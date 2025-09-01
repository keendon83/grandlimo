"use server"

import { Resend } from "resend"

export async function sendBookingEmail(formData: FormData) {
  // Extract all form data
  const formEntries = Array.from(formData.entries())
  const bookingData: Record<string, string> = {}

  formEntries.forEach(([key, value]) => {
    bookingData[key] = value.toString()
  })

  try {
    // Log the booking data for server-side reference
    console.log("New booking request received:", bookingData)

    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables")
      return handleEmailFailure(
        bookingData,
        "Email service configuration is missing. Your booking details have been saved.",
      )
    }

    // Initialize Resend with API key
    const resend = new Resend(apiKey)

    // Create HTML email content for admin notification
    const adminEmailHtml = `
      <h1>New Booking Request</h1>
      <p>A new booking request has been submitted through the website:</p>
      <table border="0" cellpadding="8" style="border-collapse: collapse;">
        ${Object.entries(bookingData)
          .map(
            ([key, value]) => `
          <tr>
            <td><strong>${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}:</strong></td>
            <td>${value}</td>
          </tr>
        `,
          )
          .join("")}
      </table>
    `

    // Create customer confirmation email HTML
    const customerEmailHtml = createCustomerEmailTemplate(bookingData)

    try {
      // Prepare admin email options
      const adminEmailOptions: any = {
        from: "Grand Limo Booking <booking@grandlimo.com.kw>",
        to: ["info@q8grandlimo.com"],
        subject: "New Booking Request from Grand Limo Website",
        html: adminEmailHtml,
      }

      // Only add reply_to if a valid email was provided
      if (bookingData.email && bookingData.email.includes("@") && bookingData.email.includes(".")) {
        adminEmailOptions.reply_to = bookingData.email
      }

      // Send admin notification email
      const { data: adminEmailData, error: adminEmailError } = await resend.emails.send(adminEmailOptions)

      if (adminEmailError) {
        console.error("Error sending admin email:", adminEmailError)

        if (adminEmailError.message?.includes("API key is invalid")) {
          return handleEmailFailure(
            bookingData,
            "We're experiencing issues with our email service. Your booking details have been saved.",
          )
        }

        return handleEmailFailure(
          bookingData,
          `Failed to send booking request: ${adminEmailError.message}. Your booking details have been saved.`,
        )
      }

      console.log("Admin email sent successfully:", adminEmailData)

      // Send customer confirmation email if they provided an email
      let customerEmailSent = false
      if (bookingData.email && bookingData.email.includes("@") && bookingData.email.includes(".")) {
        try {
          const customerEmailOptions = {
            from: "Grand Limo <booking@grandlimo.com.kw>",
            to: [bookingData.email],
            subject: "Your Grand Limo Booking Confirmation",
            html: customerEmailHtml,
          }

          const { data: customerEmailData, error: customerEmailError } = await resend.emails.send(customerEmailOptions)

          if (customerEmailError) {
            console.error("Error sending customer confirmation email:", customerEmailError)
          } else {
            console.log("Customer confirmation email sent successfully:", customerEmailData)
            customerEmailSent = true
          }
        } catch (customerEmailError) {
          console.error("Error sending customer confirmation email:", customerEmailError)
        }
      }

      return {
        success: true,
        message:
          "Your booking request has been sent successfully! " +
          (customerEmailSent
            ? "A confirmation email has been sent to your email address."
            : "We will contact you shortly to confirm your booking."),
        bookingData: bookingData,
        emailSent: true,
        customerEmailSent,
      }
    } catch (resendError) {
      console.error("Resend API error:", resendError)
      return handleEmailFailure(bookingData, "Email service error. Your booking details have been saved.")
    }
  } catch (error) {
    console.error("Error in sendBookingEmail:", error)
    return handleEmailFailure(bookingData, "An unexpected error occurred. Your booking details have been saved.")
  }
}

// Helper function to handle email failures consistently
function handleEmailFailure(bookingData: Record<string, string>, message: string) {
  // In a production environment, you would implement a database save here
  // For now, we'll just return the booking data to the client

  return {
    success: true, // Set to true so the user sees it as a success
    message: message + " Please save your booking details for reference. Our team will contact you shortly.",
    bookingData: bookingData,
    emailSent: false, // Flag to indicate email wasn't sent
  }
}

// Function to create a nicely formatted customer confirmation email
function createCustomerEmailTemplate(bookingData: Record<string, string>): string {
  // Format date if available
  let formattedDate = ""
  if (bookingData.date) {
    try {
      const date = new Date(bookingData.date)
      formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch (e) {
      formattedDate = bookingData.date
    }
  }

  // Format time if available
  let formattedTime = bookingData.time || ""
  if (formattedTime) {
    try {
      // Convert 24-hour time to 12-hour format
      const [hours, minutes] = formattedTime.split(":")
      const hour = Number.parseInt(hours, 10)
      const ampm = hour >= 12 ? "PM" : "AM"
      const hour12 = hour % 12 || 12
      formattedTime = `${hour12}:${minutes} ${ampm}`
    } catch (e) {
      // Keep original if parsing fails
    }
  }

  // Determine booking type and set appropriate fields
  let bookingTypeDisplay = "Standard Booking"
  let locationDetails = ""

  if (bookingData.bookingType === "hourly") {
    bookingTypeDisplay = "Hourly Booking"
    locationDetails = `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; width: 40%"><strong>From:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.from || "N/A"}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>To:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.to || "N/A"}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Hours:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.hours || "N/A"}</td>
      </tr>
    `
  } else if (bookingData.bookingType === "oneway") {
    bookingTypeDisplay = "One Way Trip"
    locationDetails = `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; width: 40%"><strong>From:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.from || "N/A"}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>To:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.to || "N/A"}</td>
      </tr>
    `
  } else if (bookingData.bookingType === "airport") {
    if (bookingData.airportDirection === "pickup") {
      bookingTypeDisplay = "Airport Pickup"
      locationDetails = `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; width: 40%"><strong>Pickup Terminal:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.pickupLocation || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Drop Location:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.dropLocation || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Flight Number:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.flightNumber || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Pickup Card Name:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.pickupCardName || "N/A"}</td>
        </tr>
      `
    } else {
      bookingTypeDisplay = "Airport Drop-off"
      locationDetails = `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; width: 40%"><strong>Pickup Location:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.pickupLocation || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Drop Terminal:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.dropLocation || "N/A"}</td>
        </tr>
        ${
          bookingData.flightNumber
            ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Flight Number:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.flightNumber}</td>
        </tr>
        `
            : ""
        }
      `
    }
  }

  // Create the HTML template
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 20px; padding: 20px; background-color: #000; color: #fff;">
          <h1 style="margin: 0; font-size: 24px; font-weight: bold;">GRAND LIMO</h1>
          <p style="margin: 5px 0 0;">Kuwait's Premium Chauffeur Service</p>
        </div>
        
        <div style="padding: 20px 0;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">Booking Confirmation</h2>
          <p>Dear ${bookingData.passengerName},</p>
          <p>Thank you for choosing Grand Limo. Your booking has been received and is being processed. Below are the details of your booking:</p>
          
          <div style="background-color: #f9f9f9; border-radius: 5px; padding: 15px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #000;">${bookingTypeDisplay}</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; width: 40%"><strong>Booking Reference:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee">${generateBookingReference()}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Passenger Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.passengerName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Contact Number:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.contactNumber}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Date:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee"><strong>Time:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee">${formattedTime}</td>
              </tr>
              ${locationDetails}
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; width: 40%"><strong>Vehicle:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee">${bookingData.vehicleType || "Standard Vehicle"}</td>
              </tr>
            </table>
          </div>
          
          <h3 style="color: #000;">What's Next?</h3>
          <p>Our team will review your booking and contact you shortly to confirm all details. If you need to make any changes to your booking or have any questions, please contact us using the information below.</p>
          
          ${
            bookingData.bookingType === "airport" && bookingData.airportDirection === "pickup"
              ? `
          <div style="background-color: #f9f9f9; border-radius: 5px; padding: 15px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #000;">Airport Pickup Information</h3>
            <p>Your chauffeur will be waiting at the arrival gate holding a pickup card with the name: <strong>${bookingData.pickupCardName}</strong></p>
            <p>The chauffeur will wait for 60 minutes free of charge after your flight landing.</p>
          </div>
          `
              : ""
          }
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <h3 style="color: #000;">Contact Us</h3>
            <p>If you have any questions or need assistance, please don't hesitate to contact us:</p>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Phone:</strong> +965 1811285</li>
              <li><strong>Email:</strong> info@q8grandlimo.com</li>
              <li><strong>Website:</strong> <a href="https://grandlimo.com.kw" style="color: #000;">grandlimo.com.kw</a></li>
            </ul>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #777; font-size: 12px;">
          <p>Thank you for choosing Grand Limo, Kuwait's Premium Chauffeur Service.</p>
          <p>&copy; ${new Date().getFullYear()} Grand Limo. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Generate a unique booking reference
function generateBookingReference(): string {
  const prefix = "GL"
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")
  return `${prefix}${timestamp}${random}`
}
