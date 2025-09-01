export function scrollToBooking() {
  const bookingForm = document.getElementById("booking-form")

  if (bookingForm) {
    // Scroll to the booking form with smooth behavior
    bookingForm.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    // Add a subtle highlight effect
    bookingForm.classList.add("ring-2", "ring-primary", "ring-opacity-50")

    // Remove the highlight effect after 1.5 seconds
    setTimeout(() => {
      bookingForm.classList.remove("ring-2", "ring-primary", "ring-opacity-50")
    }, 1500)
  }
}
