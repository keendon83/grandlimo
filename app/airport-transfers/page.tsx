"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Clock, CheckCircle, Plane, MapPin, Calendar, ArrowRight } from "lucide-react"
import { SimplifiedBookingForm } from "@/components/simplified-booking-form"
import { scrollToBooking } from "@/utils/scroll-to-booking"
import { useLanguage } from "@/context/language-context"

export default function AirportTransfersPage() {
  const { t, isRTL } = useLanguage()

  const dirClass = isRTL ? "rtl" : "ltr"
  const textAlign = isRTL ? "text-right" : "text-left"
  const iconMargin = isRTL ? "ml-2" : "mr-2"
  const reverseOrder = isRTL ? "md:order-2" : "md:order-1"
  const normalOrder = isRTL ? "md:order-1" : "md:order-2"
  const flexDir = isRTL ? "flex-row-reverse" : "flex-row"

  return (
    <div className={`flex min-h-screen flex-col ${dirClass}`}>
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={textAlign}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("airportTransfers.reliableService")}</h2>
              <p className="text-gray-700 mb-6">{t("airportTransfers.serviceDescription")}</p>
              <div className="space-y-4 mb-8">
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("airportTransfers.flightMonitoring.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("airportTransfers.flightMonitoring.description")}</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("airportTransfers.meetAndGreet.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("airportTransfers.meetAndGreet.description")}</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("airportTransfers.waitingTime.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("airportTransfers.waitingTime.description")}</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("airportTransfers.luggageAssistance.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("airportTransfers.luggageAssistance.description")}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-primary hover:bg-primary/90"
                >
                  {t("airportTransfers.bookNow")}
                </button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_x_IZSrP9_1744099608144_raw.jpg-8YkVwAnfScKm31s9OlpQrevCrPMgSw.jpeg"
                alt={t("airportTransfers.chauffeurImage")}
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{t("airportTransfers.ourServices")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className={`bg-white p-6 rounded-lg shadow-md ${textAlign}`}>
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("airportTransfers.airportPickup.title")}</h3>
              <p className="text-gray-600 mb-4">{t("airportTransfers.airportPickup.description")}</p>
              <ul className="space-y-2 mb-4">
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.airportPickup.feature1")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.airportPickup.feature2")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.airportPickup.feature3")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.airportPickup.feature4")}</span>
                </li>
              </ul>
              <Link
                href="/#booking-form"
                className={`text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1 ${flexDir}`}
              >
                {t("airportTransfers.bookPickup")}
                {isRTL ? <ArrowRight className="h-3 w-3 rotate-180" /> : <ArrowRight className="h-3 w-3" />}
              </Link>
            </div>

            {/* Service 2 */}
            <div className={`bg-white p-6 rounded-lg shadow-md ${textAlign}`}>
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("airportTransfers.airportDropoff.title")}</h3>
              <p className="text-gray-600 mb-4">{t("airportTransfers.airportDropoff.description")}</p>
              <ul className="space-y-2 mb-4">
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.airportDropoff.feature1")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.airportDropoff.feature2")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.airportDropoff.feature3")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.airportDropoff.feature4")}</span>
                </li>
              </ul>
              <Link
                href="/#booking-form"
                className={`text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1 ${flexDir}`}
              >
                {t("airportTransfers.bookDropoff")}
                {isRTL ? <ArrowRight className="h-3 w-3 rotate-180" /> : <ArrowRight className="h-3 w-3" />}
              </Link>
            </div>

            {/* Service 3 */}
            <div className={`bg-white p-6 rounded-lg shadow-md ${textAlign}`}>
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("airportTransfers.roundTrip.title")}</h3>
              <p className="text-gray-600 mb-4">{t("airportTransfers.roundTrip.description")}</p>
              <ul className="space-y-2 mb-4">
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.roundTrip.feature1")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.roundTrip.feature2")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.roundTrip.feature3")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("airportTransfers.roundTrip.feature4")}</span>
                </li>
              </ul>
              <Link
                href="/#booking-form"
                className={`text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1 ${flexDir}`}
              >
                {t("airportTransfers.bookRoundTrip")}
                {isRTL ? <ArrowRight className="h-3 w-3 rotate-180" /> : <ArrowRight className="h-3 w-3" />}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Luggage Assistance Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 ${reverseOrder} relative rounded-lg overflow-hidden shadow-xl`}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_2qESEM2W_1744099755133_raw.jpg-KFj9zT4v9H8FBlVumAt6cspYRFzKdG.jpeg"
                alt={t("airportTransfers.luggageAssistanceImage")}
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className={`order-1 ${normalOrder} ${textAlign}`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t("airportTransfers.luggageAssistance.mainTitle")}
              </h2>
              <p className="text-gray-700 mb-6">{t("airportTransfers.luggageAssistance.mainDescription")}</p>
              <div className="space-y-4 mb-8">
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("airportTransfers.luggageAssistance.carefulHandling.title")}</h3>
                    <p className="text-gray-600 text-sm">
                      {t("airportTransfers.luggageAssistance.carefulHandling.description")}
                    </p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("airportTransfers.luggageAssistance.spaciousVehicles.title")}</h3>
                    <p className="text-gray-600 text-sm">
                      {t("airportTransfers.luggageAssistance.spaciousVehicles.description")}
                    </p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("airportTransfers.luggageAssistance.doorToDoor.title")}</h3>
                    <p className="text-gray-600 text-sm">
                      {t("airportTransfers.luggageAssistance.doorToDoor.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("airportTransfers.coverageAreas.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("airportTransfers.coverageAreas.description")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Kuwait City",
              "Salmiya",
              "Hawally",
              "Farwaniya",
              "Jahra",
              "Ahmadi",
              "Mangaf",
              "Fahaheel",
              "Sabah Al-Salem",
              "Salwa",
              "Rumaithiya",
              "Jabriya",
              "Surra",
              "Abdullah Al-Salem",
              "Qadsiya",
              "Dasma",
              "Daiya",
              "Sharq",
              "Bneid Al-Gar",
              "Fintas",
              "Abu Halifa",
              "Egaila",
              "Mahboula",
              "Messila",
              "Bayan",
              "Mishref",
              "Sabah Al-Ahmad",
              "Wafra",
              "Khairan",
              "Mubarak Al-Kabeer",
            ].map((area, index) => (
              <div key={index} className={`bg-white p-4 rounded-md shadow-sm flex items-center gap-2 ${flexDir}`}>
                <MapPin className="h-4 w-4 text-black flex-shrink-0" />
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">{t("airportTransfers.coverageAreas.notListed")}</p>
            <Link
              href="/#booking-form"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-6 py-2 bg-white text-black hover:bg-white/90"
            >
              <span className="text-black font-medium">{t("airportTransfers.bookNowButton")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t("airportTransfers.whyChooseUs.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("airportTransfers.whyChooseUs.punctuality.title")}</h3>
              <p className="text-white/80">{t("airportTransfers.whyChooseUs.punctuality.description")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11 2 11.3V15c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("airportTransfers.whyChooseUs.luxuryFleet.title")}</h3>
              <p className="text-white/80">{t("airportTransfers.whyChooseUs.luxuryFleet.description")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("airportTransfers.whyChooseUs.professionalChauffeurs.title")}
              </h3>
              <p className="text-white/80">{t("airportTransfers.whyChooseUs.professionalChauffeurs.description")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("airportTransfers.whyChooseUs.safetyReliability.title")}</h3>
              <p className="text-white/80">{t("airportTransfers.whyChooseUs.safetyReliability.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("airportTransfers.bookingForm.title")}</h2>
              <p className="text-gray-600">{t("airportTransfers.bookingForm.description")}</p>
            </div>
            <SimplifiedBookingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{t("airportTransfers.faq.title")}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className={`bg-white p-6 rounded-lg shadow-sm ${textAlign}`}>
              <h3 className="text-lg font-bold mb-2">{t("airportTransfers.faq.question1")}</h3>
              <p className="text-gray-600">{t("airportTransfers.faq.answer1")}</p>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-sm ${textAlign}`}>
              <h3 className="text-lg font-bold mb-2">{t("airportTransfers.faq.question2")}</h3>
              <p className="text-gray-600">{t("airportTransfers.faq.answer2")}</p>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-sm ${textAlign}`}>
              <h3 className="text-lg font-bold mb-2">{t("airportTransfers.faq.question3")}</h3>
              <p className="text-gray-600">{t("airportTransfers.faq.answer3")}</p>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-sm ${textAlign}`}>
              <h3 className="text-lg font-bold mb-2">{t("airportTransfers.faq.question4")}</h3>
              <p className="text-gray-600">{t("airportTransfers.faq.answer4")}</p>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-sm ${textAlign}`}>
              <h3 className="text-lg font-bold mb-2">{t("airportTransfers.faq.question5")}</h3>
              <p className="text-gray-600">{t("airportTransfers.faq.answer5")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("airportTransfers.cta.title")}</h2>
            <p className="text-lg text-white/80 mb-8">{t("airportTransfers.cta.description")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#booking-form"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 bg-white text-black hover:bg-white/90"
              >
                <span className="text-black font-medium">{t("airportTransfers.cta.bookNow")}</span>
              </Link>
              <a
                href="tel:+9651811285"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 border border-white text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                +965 1811285
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
