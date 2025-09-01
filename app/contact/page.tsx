"use client"

import Image from "next/image"
import { Phone, Clock, MessageSquare, Mail, MapPin, Globe, CheckCircle, Plane } from "lucide-react"
import { SimplifiedBookingForm } from "@/components/simplified-booking-form"
import { scrollToBooking } from "@/utils/scroll-to-booking"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-black">
        <div className="absolute inset-0 opacity-20 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_VZDRvMxo_1744101386371_raw.jpg-dx1Wi.jpeg')] bg-cover bg-center"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Our team is available 24/7 to assist you with all your transportation needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+9651811285"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 bg-white text-black hover:bg-white/90"
              >
                <Phone className="h-4 w-4" />
                <span className="text-black font-medium">Call Now</span>
              </a>
              <a
                href="https://wa.me/9651811285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 border border-white text-white hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Customer Service Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-black/5 rounded-full mb-6">
                <Clock className="h-4 w-4 mr-2 text-black" />
                <span className="text-sm font-medium">Available 24/7</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Round-the-Clock Customer Service</h2>
              <p className="text-gray-700 mb-6">
                At Grand Limo, we understand that travel plans can change at any moment. That's why our dedicated
                customer service team is available 24 hours a day, 7 days a week, to assist you with bookings, changes,
                or any questions you might have.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Bilingual Support</h3>
                    <p className="text-gray-600 text-sm">
                      All our customer service agents are fluent in both English and Arabic, ensuring clear
                      communication regardless of your preferred language.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Flight Tracking</h3>
                    <p className="text-gray-600 text-sm">
                      Our team actively monitors flight arrivals and departures, adjusting your pickup time
                      automatically in case of delays or early arrivals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Immediate Response</h3>
                    <p className="text-gray-600 text-sm">
                      Whether by phone, WhatsApp, or email, our team responds promptly to all inquiries and booking
                      requests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Emergency Assistance</h3>
                    <p className="text-gray-600 text-sm">
                      Need last-minute transportation? Our team can arrange a vehicle for you with minimal notice,
                      subject to availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_VZDRvMxo_1744101386371_raw.jpg-IVIOAzW6SDFJVV2nklEfGNouKYKjB7.jpeg"
                alt="Grand Limo Customer Service"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out to us through any of the following channels. We're here to assist you with all your
              transportation needs in Kuwait.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Our phone lines are open 24/7. Speak directly with our customer service team for immediate assistance.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500">Local Customers:</div>
                  <a href="tel:+9651811285" className="text-lg font-medium hover:text-black/70">
                    +965 1811285
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500">International Customers:</div>
                  <a href="tel:+96566307956" className="text-lg font-medium hover:text-black/70">
                    +965 66307956
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Send us a message on WhatsApp for quick responses. Perfect for booking confirmations and updates.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500">Local Customers:</div>
                  <a
                    href="https://wa.me/9651811285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-black/70 flex items-center gap-2"
                  >
                    +965 1811285
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500">International Customers:</div>
                  <a
                    href="https://wa.me/96566307956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-black/70 flex items-center gap-2"
                  >
                    +965 66307956
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us an email for detailed inquiries, corporate bookings, or special requests.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500">General Inquiries:</div>
                  <a href="mailto:info@q8grandlimo.com" className="text-lg font-medium hover:text-black/70">
                    info@q8grandlimo.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Bookings:</div>
                  <a href="mailto:info@q8grandlimo.com" className="text-lg font-medium hover:text-black/70">
                    info@q8grandlimo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Tracking Feature */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-black/5 rounded-full mb-6">
                <Plane className="h-4 w-4 mr-2 text-black" />
                <span className="text-sm font-medium">Flight Tracking</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Real-Time Flight Monitoring</h2>
              <p className="text-gray-700 mb-6">
                Our advanced flight tracking system ensures that your chauffeur is always there when you need them,
                regardless of flight delays or early arrivals.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Automatic Adjustments</h3>
                    <p className="text-gray-600 text-sm">
                      Your pickup time is automatically adjusted based on your flight's actual arrival time, ensuring
                      your chauffeur is there when you land.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">No Additional Charges</h3>
                    <p className="text-gray-600 text-sm">
                      Flight monitoring is included free of charge with all airport pickups, giving you peace of mind
                      during your travels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Proactive Communication</h3>
                    <p className="text-gray-600 text-sm">
                      We'll keep you updated about any changes to your pickup arrangements via your preferred
                      communication method.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Global Coverage</h3>
                    <p className="text-gray-600 text-sm">
                      Our system tracks flights arriving at Kuwait International Airport from all over the world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-primary hover:bg-primary/90"
                >
                  Book Airport Transfer
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-gray-100 p-6 rounded-lg">
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-3">
                    <Plane className="h-5 w-5 mr-2 text-black" />
                    <h3 className="font-medium">How Our Flight Tracking Works</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <p>Provide your flight number when booking your airport transfer</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <p>Our system continuously monitors your flight status in real-time</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <p>Your chauffeur is automatically notified of any changes to your arrival time</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </div>
                      <p>The chauffeur adjusts their schedule to meet you at the right time</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        5
                      </div>
                      <p>You're greeted at the arrival gate with a personalized welcome sign</p>
                    </li>
                  </ol>
                </div>
                <div className="bg-black text-white p-4 rounded-md">
                  <p className="text-sm mb-2">
                    "Our flight was delayed by 3 hours, but our chauffeur was waiting for us when we arrived. The flight
                    tracking service made our late-night arrival stress-free."
                  </p>
                  <p className="text-xs text-white/70">— Sarah K., Business Traveler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Book Your Transfer</h2>
              <p className="text-gray-600">
                Fill out the form below to book your transfer. Our team will confirm your booking promptly.
              </p>
            </div>
            <SimplifiedBookingForm />
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office in Kuwait City for in-person inquiries and bookings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 mr-2 text-black" />
                <h3 className="font-medium">Kuwait City Office</h3>
              </div>
              <address className="not-italic text-gray-600 mb-6">
                Grand Limo Head Quarters
                <br />
                Floor No 10, Munther Tower
                <br />
                Kuwait City
                <br />
                Kuwait
              </address>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">Office Hours: 9:00 AM - 6:00 PM (Sunday - Thursday)</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">Customer Service: 24/7</span>
                </div>
              </div>
            </div>
            <div className="h-[300px] bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d47.96853291017563!3d29.3615217896763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIxJzQxLjUiTiA0N8KwNTgnMDYuNyJF!5e0!3m2!1sen!2skw!4v1620000000000!5m2!1sen!2skw`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Limo Office Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Premium Transportation?</h2>
            <p className="text-lg text-white/80 mb-8">
              Contact our 24/7 customer service team today and let us take care of all your transportation needs in
              Kuwait.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+9651811285"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 bg-white text-black hover:bg-white/90"
              >
                <Phone className="h-4 w-4" />
                <span className="text-black font-medium">Call Now</span>
              </a>
              <a
                href="https://wa.me/9651811285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 border border-white text-white hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
