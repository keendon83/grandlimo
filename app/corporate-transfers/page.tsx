"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, CheckCircle, Users, Calendar, Briefcase, ArrowRight, Building, Headphones } from "lucide-react"
import { SimplifiedBookingForm } from "@/components/simplified-booking-form"
import { scrollToBooking } from "@/utils/scroll-to-booking"
import { useLanguage } from "@/context/language-context"

export default function CorporateTransfersPage() {
  const { t, isRTL } = useLanguage()

  const dirClass = isRTL ? "rtl" : "ltr"
  const textAlign = isRTL ? "text-right" : "text-left"
  const iconMargin = isRTL ? "ml-2" : "mr-2"
  const reverseOrder = isRTL ? "md:order-2" : "md:order-1"
  const normalOrder = isRTL ? "md:order-1" : "md:order-2"
  const flexDir = isRTL ? "flex-row-reverse" : "flex-row"

  return (
    <div className={`flex min-h-screen flex-col ${dirClass}`}>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-black">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/corporate-fleet.png')] bg-cover bg-center"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("corporateTransfers.title")}</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">{t("corporateTransfers.subtitle")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 bg-white text-black hover:bg-white/90"
              >
                {t("corporateTransfers.bookNow")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={textAlign}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("corporateTransfers.serviceTitle")}</h2>
              <p className="text-gray-700 mb-6">{t("corporateTransfers.serviceDescription")}</p>
              <div className="space-y-4 mb-8">
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <Headphones className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("corporateTransfers.dedicatedAccount.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("corporateTransfers.dedicatedAccount.description")}</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <Users className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("corporateTransfers.specializedSupport.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("corporateTransfers.specializedSupport.description")}</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <Briefcase className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("corporateTransfers.customizedSolutions.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("corporateTransfers.customizedSolutions.description")}</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <Building className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("corporateTransfers.corporateBilling.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("corporateTransfers.corporateBilling.description")}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-primary hover:bg-primary/90"
                >
                  {t("corporateTransfers.bookNow")}
                </button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/corporate-fleet.png"
                alt={t("corporateTransfers.subtitle")}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{t("services.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className={`bg-white p-6 rounded-lg shadow-md ${textAlign}`}>
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("corporateTransfers.executiveTransportation.title")}</h3>
              <p className="text-gray-600 mb-4">{t("corporateTransfers.executiveTransportation.description")}</p>
              <ul className="space-y-2 mb-4">
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.executiveTransportation.features.chauffeurs")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.executiveTransportation.features.vehicles")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.executiveTransportation.features.discreet")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.executiveTransportation.features.wifi")}</span>
                </li>
              </ul>
              <Link
                href="#booking-form"
                className={`text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1 ${flexDir}`}
                onClick={scrollToBooking}
              >
                {t("corporateTransfers.executiveTransportation.cta")}
                {isRTL ? <ArrowRight className="h-3 w-3 rotate-180" /> : <ArrowRight className="h-3 w-3" />}
              </Link>
            </div>

            {/* Service 2 */}
            <div className={`bg-white p-6 rounded-lg shadow-md ${textAlign}`}>
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("corporateTransfers.eventTransportation.title")}</h3>
              <p className="text-gray-600 mb-4">{t("corporateTransfers.eventTransportation.description")}</p>
              <ul className="space-y-2 mb-4">
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.eventTransportation.features.fleet")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.eventTransportation.features.manager")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.eventTransportation.features.schedules")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.eventTransportation.features.branding")}</span>
                </li>
              </ul>
              <Link
                href="#booking-form"
                className={`text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1 ${flexDir}`}
                onClick={scrollToBooking}
              >
                {t("corporateTransfers.eventTransportation.cta")}
                {isRTL ? <ArrowRight className="h-3 w-3 rotate-180" /> : <ArrowRight className="h-3 w-3" />}
              </Link>
            </div>

            {/* Service 3 */}
            <div className={`bg-white p-6 rounded-lg shadow-md ${textAlign}`}>
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("corporateTransfers.vipServices.title")}</h3>
              <p className="text-gray-600 mb-4">{t("corporateTransfers.vipServices.description")}</p>
              <ul className="space-y-2 mb-4">
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.vipServices.features.meet")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.vipServices.features.multilingual")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.vipServices.features.security")}</span>
                </li>
                <li className={`flex items-start gap-2 text-sm text-gray-600 ${flexDir}`}>
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.vipServices.features.coordination")}</span>
                </li>
              </ul>
              <Link
                href="#booking-form"
                className={`text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1 ${flexDir}`}
                onClick={scrollToBooking}
              >
                {t("corporateTransfers.vipServices.cta")}
                {isRTL ? <ArrowRight className="h-3 w-3 rotate-180" /> : <ArrowRight className="h-3 w-3" />}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Support Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 ${reverseOrder} bg-gray-100 p-6 rounded-lg`}>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-3">
                    <Headphones className="h-5 w-5 mr-2 text-black" />
                    <h3 className="font-medium">{t("corporateTransfers.dedicatedSupport.teamTitle")}</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <p>{t("corporateTransfers.dedicatedSupport.teamRoles.accountManager")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <p>{t("corporateTransfers.dedicatedSupport.teamRoles.coordinator")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <p>{t("corporateTransfers.dedicatedSupport.teamRoles.concierge")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </div>
                      <p>{t("corporateTransfers.dedicatedSupport.teamRoles.billing")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        5
                      </div>
                      <p>{t("corporateTransfers.dedicatedSupport.teamRoles.dispatch")}</p>
                    </li>
                  </ol>
                </div>
                <div className="bg-black text-white p-4 rounded-md">
                  <p className="text-sm mb-2">{t("corporateTransfers.dedicatedSupport.testimonial")}</p>
                  <p className="text-xs text-white/70">{t("corporateTransfers.dedicatedSupport.testimonialAuthor")}</p>
                </div>
              </div>
            </div>
            <div className={`order-1 ${normalOrder} ${textAlign}`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("corporateTransfers.dedicatedSupport.title")}</h2>
              <p className="text-gray-700 mb-6">{t("corporateTransfers.dedicatedSupport.description")}</p>
              <div className="space-y-4 mb-8">
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">
                      {t("corporateTransfers.dedicatedSupport.features.singlePoint.title")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("corporateTransfers.dedicatedSupport.features.singlePoint.description")}
                    </p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">
                      {t("corporateTransfers.dedicatedSupport.features.rapidResponse.title")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("corporateTransfers.dedicatedSupport.features.rapidResponse.description")}
                    </p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("corporateTransfers.dedicatedSupport.features.proactive.title")}</h3>
                    <p className="text-gray-600 text-sm">
                      {t("corporateTransfers.dedicatedSupport.features.proactive.description")}
                    </p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${flexDir}`}>
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t("corporateTransfers.dedicatedSupport.features.reporting.title")}</h3>
                    <p className="text-gray-600 text-sm">
                      {t("corporateTransfers.dedicatedSupport.features.reporting.description")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+9651811285"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 border border-black text-black hover:bg-gray-100"
                >
                  <Phone className="h-4 w-4" />
                  {t("corporateTransfers.dedicatedSupport.callTeam")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            {t("corporateTransfers.personalizedSolutions.title")}
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            {t("corporateTransfers.personalizedSolutions.description")}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("corporateTransfers.personalizedSolutions.corporateAccounts.title")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("corporateTransfers.personalizedSolutions.corporateAccounts.description")}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.personalizedSolutions.corporateAccounts.feature1")}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.personalizedSolutions.corporateAccounts.feature2")}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.personalizedSolutions.corporateAccounts.feature3")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("corporateTransfers.personalizedSolutions.eventLogistics.title")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("corporateTransfers.personalizedSolutions.eventLogistics.description")}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.personalizedSolutions.eventLogistics.feature1")}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.personalizedSolutions.eventLogistics.feature2")}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.personalizedSolutions.eventLogistics.feature3")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("corporateTransfers.personalizedSolutions.roadShows.title")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("corporateTransfers.personalizedSolutions.roadShows.description")}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.personalizedSolutions.roadShows.feature1")}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.personalizedSolutions.roadShows.feature2")}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span>{t("corporateTransfers.personalizedSolutions.roadShows.feature3")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{t("corporateTransfers.fleet.title")}</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            {t("corporateTransfers.fleet.description")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_0XmGl8eE_1742472303298_raw.jpg-fQ0K5au0gi3bYNIvqpsCpy5rb30y6S.jpeg"
                  alt={t("corporateTransfers.fleet.mercedesSClass.title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("corporateTransfers.fleet.mercedesSClass.title")}</h3>
                <p className="text-gray-600 mb-4">{t("corporateTransfers.fleet.mercedesSClass.description")}</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                    <span>{t("corporateTransfers.fleet.mercedesSClass.feature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                    <span>{t("corporateTransfers.fleet.mercedesSClass.feature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                    <span>{t("corporateTransfers.fleet.mercedesSClass.feature3")}</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToBooking}
                  className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-primary hover:bg-primary/90 w-full"
                >
                  {t("corporateTransfers.fleet.mercedesSClass.cta")}
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_uNWvl0Dl_1742472231940_raw.jpg-sP9HhuqQgYH3ZrgJLARy5lQ9TNewWS.jpeg"
                  alt={t("corporateTransfers.fleet.gmcYukon.title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("corporateTransfers.fleet.gmcYukon.title")}</h3>
                <p className="text-gray-600 mb-4">{t("corporateTransfers.fleet.gmcYukon.description")}</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                    <span>{t("corporateTransfers.fleet.gmcYukon.feature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                    <span>{t("corporateTransfers.fleet.gmcYukon.feature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                    <span>{t("corporateTransfers.fleet.gmcYukon.feature3")}</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToBooking}
                  className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-primary hover:bg-primary/90 w-full"
                >
                  {t("corporateTransfers.fleet.gmcYukon.cta")}
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_5OQF72T3_1742471803487_raw.jpg-DEhE0Sbs5K04yYSIadMyEjsCxuE5eg.jpeg"
                  alt={t("corporateTransfers.fleet.lexusES350.title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("corporateTransfers.fleet.lexusES350.title")}</h3>
                <p className="text-gray-600 mb-4">{t("corporateTransfers.fleet.lexusES350.description")}</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                    <span>{t("corporateTransfers.fleet.lexusES350.feature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                    <span>{t("corporateTransfers.fleet.lexusES350.feature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                    <span>{t("corporateTransfers.fleet.lexusES350.feature3")}</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToBooking}
                  className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-primary hover:bg-primary/90 w-full"
                >
                  {t("corporateTransfers.fleet.lexusES350.cta")}
                </button>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("corporateTransfers.bookingForm.title")}</h2>
              <p className="text-gray-600">{t("corporateTransfers.bookingForm.description")}</p>
            </div>
            <SimplifiedBookingForm />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("corporateTransfers.ctaTitle")}</h2>
            <p className="text-lg text-white/80 mb-8">{t("corporateTransfers.ctaDescription")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 bg-white text-black hover:bg-white/90"
              >
                {t("corporateTransfers.bookNow")}
              </button>
              <a
                href="tel:+9651811285"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 border border-white text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {t("corporateTransfers.dedicatedSupport.callTeam")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
