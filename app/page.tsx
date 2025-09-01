"use client"

import Image from "next/image"
import Link from "next/link"
import { SimplifiedBookingForm } from "@/components/simplified-booking-form"
import { MobileMenu } from "@/components/mobile-menu"
import { scrollToBooking } from "@/utils/scroll-to-booking"
import { Phone, MessageSquare } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { CreditCard, Banknote, Building2, ExternalLink, Mail } from "lucide-react"
import { AppStoreButtons } from "@/components/app-store-buttons"
import { SimpleQRCode } from "@/components/simple-qr-code"

export default function Home() {
  const { t, isRTL } = useLanguage()

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      {/* Header Section - Updated with logo */}
      <header className="bg-black text-white w-full">
        <div className="container">
          {/* Contact info bar */}
          <div className="hidden md:flex justify-end items-center py-2 text-xs border-b border-white/10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  <span className="text-white/70">{t("common.local")}:</span>
                  <a href="tel:+9651811285" className="hover:text-white">
                    +965 1811285
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  <a
                    href="https://wa.me/9651811285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {t("common.whatsApp")}
                  </a>
                </div>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  <span className="text-white/70">{t("common.international")}:</span>
                  <a href="tel:+96566307956" className="hover:text-white">
                    +965 66307956
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  <a
                    href="https://wa.me/96566307956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {t("common.whatsApp")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main navigation */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="/images/grand-limo-logo-white.png"
                alt="Grand Limo"
                width={150}
                height={50}
                className="h-auto"
              />
            </div>
            <div className="flex items-center gap-4">
              {/* LanguageSelector temporarily hidden */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 bg-white text-black hover:bg-white/90"
              >
                {t("common.contactUs")}
              </Link>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Submenu */}
      <section className="relative min-h-[750px] sm:min-h-[800px] md:min-h-[900px] lg:min-h-[950px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/luxury-chauffeur-service.png"
            alt="Luxury Chauffeur Service"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-[1]"></div>

        {/* Submenu - Moved from header to hero */}
        <div className="relative z-10 w-full bg-black/50 border-y border-white/10">
          <div className="container">
            <div className="hidden md:flex justify-center">
              <div className="flex justify-between w-full max-w-2xl py-2">
                <Link
                  href="/airport-transfers"
                  className="text-sm text-white/80 hover:text-white transition-colors px-4 py-1"
                >
                  {t("header.airportTransfers")}
                </Link>
                <button
                  onClick={scrollToBooking}
                  className="text-sm text-white/80 hover:text-white transition-colors px-4 py-1"
                >
                  {t("header.pointToPoint")}
                </button>
                <Link
                  href="/corporate-transfers"
                  className="text-sm text-white/80 hover:text-white transition-colors px-4 py-1"
                >
                  {t("header.corporateTransfers")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative z-10">
          {/* Hero content and booking form side by side at the top */}
          <div className="grid md:grid-cols-2 gap-6 pt-6 md:pt-8 pb-12 md:pb-16">
            {/* Hero text content */}
            <div className="flex flex-col justify-start">
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white drop-shadow-md">
                  {t("hero.title")}
                </h1>
                <p className="max-w-[600px] text-white/90 text-sm sm:text-base md:text-lg drop-shadow-md">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>

            {/* Booking form */}
            <div className="flex justify-end">
              <SimplifiedBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-black relative z-10 mt-[-30px] sm:mt-[-100px] md:mt-[-150px]">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{t("services.title")}</h2>
            <p className="mt-2 sm:mt-4 text-white/70 max-w-2xl mx-auto">{t("services.subtitle")}</p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Service Card 1 - Point to Point */}
            <div className="rounded-lg border shadow-sm overflow-hidden bg-black text-white border-gray-800 hover:border-gray-700 transition-all">
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_WoLz0FlD_1742728963173_raw.jpg-Wq8sNNh6mTFRnP3UC1JsrCKalG3Vip.jpeg"
                  alt={t("services.pointToPoint.title")}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("services.pointToPoint.title")}</h3>
                <p className="text-white/80 mb-4">{t("services.pointToPoint.description")}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white/90 mb-2">{t("services.pointToPoint.highlights")}</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.pointToPoint.doorToDoor")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.pointToPoint.fixedPricing")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.pointToPoint.luxuryVehicles")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.pointToPoint.complimentaryWater")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.pointToPoint.waitingTime")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary/90"
                >
                  {t("common.bookNow")}
                </button>
              </div>
            </div>

            {/* Service Card 2 - Corporate Bookings */}
            <div className="rounded-lg border shadow-sm overflow-hidden bg-black text-white border-gray-800 hover:border-gray-700 transition-all">
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_VN9Tmryx_1742729062072_raw.jpg-WtDdgDulrV5wwhQOYaaic8ovtPncZY.jpeg"
                  alt={t("services.corporateBookings.title")}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("services.corporateBookings.title")}</h3>
                <p className="text-white/80 mb-4">{t("services.corporateBookings.description")}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white/90 mb-2">
                    {t("services.corporateBookings.highlights")}
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.corporateBookings.accountManagement")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.corporateBookings.vehicleCoordination")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.corporateBookings.professionalChauffeurs")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.corporateBookings.flexibleBilling")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.corporateBookings.dedicatedSupport")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <Link
                  href="/corporate-transfers"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary/90"
                >
                  {t("common.learnMore")}
                </Link>
              </div>
            </div>

            {/* Service Card 3 - Airport Transfer with Video Hover */}
            <div className="rounded-lg border shadow-sm overflow-hidden bg-black text-white border-gray-800 hover:border-gray-700 transition-all">
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_nmCWB2Sx_1742728275111_raw.jpg-qtW60sbqL3mODeGWSE7Cu0PY5fo0Qf.jpeg"
                  alt={t("services.airportTransfer.title")}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("services.airportTransfer.title")}</h3>
                <p className="text-white/80 mb-4">{t("services.airportTransfer.description")}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white/90 mb-2">
                    {t("services.airportTransfer.highlights")}
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.airportTransfer.flightTracking")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.airportTransfer.meetAndGreet")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.airportTransfer.waitingTime")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.airportTransfer.luggageAssistance")}</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t("services.airportTransfer.comfortableVehicles")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <Link
                  href="/airport-transfers"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary/90"
                >
                  {t("common.learnMore")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet-section" className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">{t("fleet.title")}</h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">{t("fleet.subtitle")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Vehicle Card 1 */}
            <div className="rounded-lg border shadow-sm overflow-hidden bg-black text-white border-gray-800 hover:border-gray-700 transition-all">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_5OQF72T3_1742471803487_raw.jpg-DEhE0Sbs5K04yYSIadMyEjsCxuE5eg.jpeg"
                  alt={t("fleet.lexusES350.title")}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("fleet.lexusES350.title")}</h3>
                <p className="text-sm text-white/70 mb-4">{t("fleet.lexusES350.capacity")}</p>
                <ul className="space-y-1">
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.lexusES350.features.leatherInterior")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.lexusES350.features.climateControl")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.lexusES350.features.soundSystem")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.lexusES350.features.complimentaryWater")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.lexusES350.features.professionalChauffeur")}</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary/90"
                >
                  {t("common.bookNow")}
                </button>
              </div>
            </div>

            {/* Vehicle Card 2 */}
            <div className="rounded-lg border shadow-sm overflow-hidden bg-black text-white border-gray-800 hover:border-gray-700 transition-all">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_uNWvl0Dl_1742472231940_raw.jpg-sP9HhuqQgYH3ZrgJLARy5lQ9TNewWS.jpeg"
                  alt={t("fleet.gmcYukon.title")}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("fleet.gmcYukon.title")}</h3>
                <p className="text-sm text-white/70 mb-4">{t("fleet.gmcYukon.capacity")}</p>
                <ul className="space-y-1">
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.gmcYukon.features.spaciousInterior")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.gmcYukon.features.leatherSeating")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.gmcYukon.features.extraLuggage")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.gmcYukon.features.privacyGlass")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.gmcYukon.features.professionalChauffeur")}</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary/90"
                >
                  {t("common.bookNow")}
                </button>
              </div>
            </div>

            {/* Vehicle Card 3 */}
            <div className="rounded-lg border shadow-sm overflow-hidden bg-black text-white border-gray-800 hover:border-gray-700 transition-all">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_0XmGl8eE_1742472303298_raw.jpg-fQ0K5au0gi3bYNIvqpsCpy5rb30y6S.jpeg"
                  alt={t("fleet.mercedesSClass.title")}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("fleet.mercedesSClass.title")}</h3>
                <p className="text-sm text-white/70 mb-4">{t("fleet.mercedesSClass.capacity")}</p>
                <ul className="space-y-1">
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.mercedesSClass.features.premiumLeather")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.mercedesSClass.features.advancedClimate")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.mercedesSClass.features.ambientLighting")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.mercedesSClass.features.executiveSeating")}</span>
                  </li>
                  <li className="text-sm text-white/80 flex items-start">
                    <span className={`${isRTL ? "ml-2" : "mr-2"}`}>•</span>
                    <span>{t("fleet.mercedesSClass.features.professionalChauffeur")}</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary/90"
                >
                  {t("common.bookNow")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="bg-black/80 backdrop-blur-sm py-6 border-y border-white/10">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg sm:text-xl font-medium text-white mb-4">{t("payment.title")}</h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-3 rounded-full mb-2">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-white/80">{t("payment.creditCards")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-3 rounded-full mb-2">
                  <Banknote className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-white/80">{t("payment.cash")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-3 rounded-full mb-2">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-white/80">{t("payment.bankTransfer")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="bg-black text-white py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t("app.title")}</h2>
              <p className="text-white/80 mb-8">{t("app.description")}</p>
              <div className="flex flex-col gap-4">
                <AppStoreButtons />
                <p className="text-white/70 text-sm">{t("app.qrDescription")}</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-white p-3 rounded-lg shadow-lg max-w-[180px] md:max-w-[250px]">
                <SimpleQRCode
                  url="https://apps.apple.com/us/app/grand-limo-%D8%AC%D8%B1%D8%A7%D9%86%D8%AF-%D9%84%D9%8A%D9%85%D9%88/id1169943077"
                  size={180}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4">
                <Image
                  src="/images/grand-limo-logo-white.png"
                  alt="Grand Limo"
                  width={180}
                  height={60}
                  className="h-auto"
                />
              </div>
              <p className="text-white/70">{t("footer.companyDescription")}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-white/70 hover:text-white" href="/">
                    {t("footer.home")}
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="/about-us">
                    {t("footer.aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="/#fleet-section">
                    {t("footer.ourFleet")}
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="/airport-transfers">
                    {t("footer.airportTransfers")}
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="/contact">
                    {t("footer.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.services")}</h3>
              <ul className="space-y-2">
                <li>
                  <button className="text-white/70 hover:text-white text-left" onClick={scrollToBooking}>
                    {t("footer.airportTransfers")}
                  </button>
                </li>
                <li>
                  <Link href="/corporate-transfers" className="text-white/70 hover:text-white text-left">
                    {t("footer.corporateEvents")}
                  </Link>
                </li>
                <li>
                  <button className="text-white/70 hover:text-white text-left" onClick={scrollToBooking}>
                    {t("footer.hourlyHire")}
                  </button>
                </li>
                <li>
                  <button className="text-white/70 hover:text-white text-left" onClick={scrollToBooking}>
                    {t("footer.specialOccasions")}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.paymentMethods")}</h3>
              <ul className="space-y-2">
                <li className="text-white/70 flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span>{t("footer.creditCards")}</span>
                </li>
                <li className="text-white/70 flex items-center gap-2">
                  <Banknote className="h-4 w-4" />
                  <span>{t("footer.cash")}</span>
                </li>
                <li className="text-white/70 flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span>{t("footer.bankTransfer")}</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-white/60">{t("footer.paymentNote")}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.contactUs")}</h3>
              <address className="not-italic text-sm">
                <p className="text-white/70 mb-2">{t("footer.kuwaitCity")}</p>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  <div className="text-white/90 text-xs">{t("common.local")}:</div>
                  <div className="flex items-center gap-1 text-white/70">
                    <Phone className="h-3 w-3" />
                    <a href="tel:+9651811285" className="hover:text-white">
                      +965 1811285
                    </a>
                  </div>

                  <div className="text-white/90 text-xs">{t("common.whatsApp")}:</div>
                  <div className="flex items-center gap-1 text-white/70">
                    <MessageSquare className="h-3 w-3" />
                    <a
                      href="https://wa.me/9651811285"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      +965 1811285
                    </a>
                  </div>

                  <div className="text-white/90 text-xs">{t("common.international")}:</div>
                  <div className="flex items-center gap-1 text-white/70">
                    <Phone className="h-3 w-3" />
                    <a href="tel:+96566307956" className="hover:text-white">
                      +965 66307956
                    </a>
                  </div>

                  <div className="text-white/90 text-xs">{t("common.whatsApp")}:</div>
                  <div className="flex items-center gap-1 text-white/70">
                    <MessageSquare className="h-3 w-3" />
                    <a
                      href="https://wa.me/96566307956"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      +965 66307956
                    </a>
                  </div>

                  <div className="text-white/90 text-xs">{t("common.email")}:</div>
                  <div className="flex items-center gap-1 text-white/70">
                    <Mail className="h-3 w-3" />
                    <a href="mailto:info@q8grandlimo.com" className="hover:text-white">
                      info@q8grandlimo.com
                    </a>
                  </div>
                </div>
              </address>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.ourPartners")}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <a
                    href="https://www.blacklane.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white"
                  >
                    <div className="bg-white/10 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                      <span className="text-xs font-semibold">BL</span>
                    </div>
                    <span>Blacklane</span>
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://www.booking.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white"
                  >
                    <div className="bg-white/10 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                      <span className="text-xs font-semibold">BC</span>
                    </div>
                    <span>Booking.com</span>
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white">
                    <div className="bg-white/10 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                      <span className="text-xs font-semibold">RA</span>
                    </div>
                    <span>Royal American</span>
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-white/60 text-sm">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
