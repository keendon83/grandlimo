"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MapPin, Calendar, Clock, Plane, User, Phone, Timer, Mail, CreditCard } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { LocationAutocomplete } from "./location-autocomplete"
import { PickupCardPreview } from "./pickup-card-preview"
import { BookingConfirmation } from "./booking-confirmation"
import { CountryCodeSelect } from "./country-code-select"
import { sendBookingEmail } from "@/app/actions/send-booking-email"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

// Kuwait Airport Terminals with detailed information (removed Terminal 2 and Cargo Terminal)
const kuwaitAirportTerminals = [
  "Terminal 1 (Main Terminal) - Multiple Airlines",
  "Terminal 3 (Jazeera Airways Terminal)",
  "Terminal 4 (Kuwait Airways Terminal)",
  "Terminal 5 (Private Aviation Terminal)",
]

export function SimplifiedBookingForm() {
  const { t, isRTL } = useLanguage()
  const [bookingType, setBookingType] = useState<"hourly" | "oneway" | "airport">("hourly")
  const [airportDirection, setAirportDirection] = useState<"pickup" | "drop">("pickup")
  const [pickupCardName, setPickupCardName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [confirmationState, setConfirmationState] = useState<{
    show: boolean
    success: boolean
    message: string
    bookingData?: Record<string, string>
    emailSent?: boolean
    customerEmailSent?: boolean
  }>({
    show: false,
    success: false,
    message: "",
  })
  const [showEstimatedFare, setShowEstimatedFare] = useState(false)
  const [countryCode, setCountryCode] = useState("+965")

  // Force re-render of location fields when booking type changes
  const [locationKey, setLocationKey] = useState(0)

  useEffect(() => {
    // Update the key to force re-render of location components
    setLocationKey((prev) => prev + 1)
    // Reset the estimated fare display
    setShowEstimatedFare(false)
  }, [bookingType, airportDirection])

  useEffect(() => {
    const form = document.querySelector("form")
    if (!form) return

    const handleInput = () => {
      checkFormCompleteness()
    }

    form.addEventListener("input", handleInput)
    form.addEventListener("change", handleInput)

    return () => {
      form.removeEventListener("input", handleInput)
      form.removeEventListener("change", handleInput)
    }
  }, [])

  // Handle pickup card name change
  const handlePickupCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickupCardName(e.target.value)
  }

  const checkFormCompleteness = () => {
    // Simple check if the form has been interacted with enough to show the fare
    const form = document.querySelector("form") as HTMLFormElement
    if (!form) return

    // Check if essential fields are filled
    const requiredFields = form.querySelectorAll("input[required], select[required]")
    let allFilled = true

    requiredFields.forEach((field) => {
      const input = field as HTMLInputElement | HTMLSelectElement
      if (!input.value) {
        allFilled = false
      }
    })

    if (allFilled && !showEstimatedFare) {
      setShowEstimatedFare(true)
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Add booking type and airport direction to form data
      const formData = new FormData(e.currentTarget)
      formData.append("bookingType", bookingType)
      if (bookingType === "airport") {
        formData.append("airportDirection", airportDirection)
      }

      // Process the booking
      const result = await sendBookingEmail(formData)

      setConfirmationState({
        show: true,
        success: result.success,
        message: result.message,
        bookingData: result.bookingData,
        emailSent: result.emailSent,
        customerEmailSent: result.customerEmailSent,
      })
    } catch (error) {
      console.error("Error submitting form:", error)

      // Create a backup of the booking data in case of error
      const formData = new FormData(e.currentTarget)
      const bookingData: Record<string, string> = {}

      Array.from(formData.entries()).forEach(([key, value]) => {
        bookingData[key] = value.toString()
      })

      setConfirmationState({
        show: true,
        success: false,
        message: "An unexpected error occurred. Please try again or contact us directly.",
        bookingData: bookingData,
        emailSent: false,
        customerEmailSent: false,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeConfirmation = () => {
    setConfirmationState((prev) => ({ ...prev, show: false }))
    if (confirmationState.success) {
      // Reset form if submission was successful
      document.querySelector("form")?.reset()
      setPickupCardName("")
    }
  }

  const dirClass = isRTL ? "rtl" : "ltr"
  const textAlign = isRTL ? "text-right" : "text-left"
  const marginClass = isRTL ? "mr-2" : "ml-2"

  return (
    <>
      {/* Added max-height and overflow-y-auto to make the form scrollable on mobile */}
      <div
        id="booking-form"
        className={`bg-white p-3 sm:p-6 rounded-md shadow-md w-full max-w-lg mx-auto md:mx-0 max-h-[75vh] overflow-y-auto mb-8 ${dirClass}`}
      >
        <div className="flex justify-between mb-3 sm:mb-5 text-xs sm:text-sm">
          <button
            className={`px-2 sm:px-4 py-1 sm:py-2 ${bookingType === "hourly" ? "border-b-2 border-primary font-medium" : "text-muted-foreground"}`}
            onClick={() => setBookingType("hourly")}
            type="button"
          >
            {t("booking.byTheHour")}
          </button>
          <button
            className={`px-2 sm:px-4 py-1 sm:py-2 ${bookingType === "oneway" ? "border-b-2 border-primary font-medium" : "text-muted-foreground"}`}
            onClick={() => setBookingType("oneway")}
            type="button"
          >
            {t("booking.oneWay")}
          </button>
          <button
            className={`px-2 sm:px-4 py-1 sm:py-2 ${bookingType === "airport" ? "border-b-2 border-primary font-medium" : "text-muted-foreground"}`}
            onClick={() => setBookingType("airport")}
            type="button"
          >
            {t("booking.airport")}
          </button>
        </div>

        {/* Airport direction selection */}
        {bookingType === "airport" && (
          <div className="flex justify-between mb-3 sm:mb-5 border-b border-gray-200 pb-2 sm:pb-4 text-xs sm:text-sm">
            <button
              className={`px-2 sm:px-4 py-1 sm:py-2 ${airportDirection === "pickup" ? "bg-gray-100 rounded-md font-medium" : "text-muted-foreground"}`}
              onClick={() => setAirportDirection("pickup")}
              type="button"
            >
              {t("booking.airportPickup")}
            </button>
            <button
              className={`px-2 sm:px-4 py-1 sm:py-2 ${airportDirection === "drop" ? "bg-gray-100 rounded-md font-medium" : "text-muted-foreground"}`}
              onClick={() => setAirportDirection("drop")}
              type="button"
            >
              {t("booking.airportDrop")}
            </button>
          </div>
        )}

        <form className={`space-y-3 sm:space-y-4 ${textAlign}`} onSubmit={handleSubmit}>
          {/* Passenger Information - For All Forms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <div className="relative">
                <User
                  className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                />
                <input
                  className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0`}
                  placeholder={t("booking.passengerName")}
                  name="passengerName"
                  required
                />
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-[90px] sm:w-[100px]">
                  <CountryCodeSelect onChange={setCountryCode} defaultValue="+965" />
                </div>
                <div className="relative flex-1">
                  <Phone
                    className={`absolute ${isRTL ? "right-2" : "left-2"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                  />
                  <input
                    className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-7 sm:pr-8" : "pl-7 sm:pl-8"} bg-secondary border-0`}
                    placeholder={t("booking.contactNumber")}
                    name="contactNumber"
                    type="tel"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Optional Email Field */}
          <div className="space-y-1 sm:space-y-2">
            <div className="relative">
              <Mail
                className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
              />
              <input
                className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0`}
                placeholder={t("booking.emailAddress")}
                name="email"
                type="email"
                required
              />
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground">{t("booking.emailAddressHelp")}</p>
          </div>

          {/* Location Fields - Different based on booking type */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${bookingType}-${airportDirection}-${locationKey}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              {/* Airport Pickup */}
              {bookingType === "airport" && airportDirection === "pickup" && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="relative">
                      <MapPin
                        className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                      />
                      <select
                        className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0 appearance-none`}
                        name="pickupLocation"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {t("booking.selectAirportTerminal")}
                        </option>
                        {kuwaitAirportTerminals.map((terminal) => (
                          <option key={terminal} value={terminal}>
                            {terminal}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{t("booking.terminalHelp")}</p>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <LocationAutocomplete
                      placeholder={t("booking.dropLocation")}
                      name="dropLocation"
                      required
                      isRTL={isRTL}
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="relative">
                      <Plane
                        className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                      />
                      <input
                        className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0`}
                        placeholder={t("booking.flightNumber")}
                        name="flightNumber"
                        required
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{t("booking.flightNumberHelp")}</p>
                  </div>
                </div>
              )}

              {/* Airport Drop */}
              {bookingType === "airport" && airportDirection === "drop" && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <LocationAutocomplete
                      placeholder={t("booking.pickupLocation")}
                      name="pickupLocation"
                      required
                      isRTL={isRTL}
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="relative">
                      <MapPin
                        className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                      />
                      <select
                        className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0 appearance-none`}
                        name="dropLocation"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {t("booking.selectAirportTerminal")}
                        </option>
                        {kuwaitAirportTerminals.map((terminal) => (
                          <option key={terminal} value={terminal}>
                            {terminal}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{t("booking.terminalDepartureHelp")}</p>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="relative">
                      <Plane
                        className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                      />
                      <input
                        className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0`}
                        placeholder={t("booking.flightNumberOptional")}
                        name="flightNumber"
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{t("booking.flightNumberHelp")}</p>
                  </div>
                </div>
              )}

              {/* Hourly or One Way */}
              {(bookingType === "hourly" || bookingType === "oneway") && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <LocationAutocomplete placeholder={t("booking.from")} name="from" required isRTL={isRTL} />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <LocationAutocomplete placeholder={t("booking.to")} name="to" required isRTL={isRTL} />
                  </div>

                  {/* Hours field - Only for hourly bookings */}
                  {bookingType === "hourly" && (
                    <div className="space-y-1 sm:space-y-2">
                      <div className="relative">
                        <Timer
                          className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                        />
                        <input
                          className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0`}
                          placeholder={t("booking.numberOfHours")}
                          name="hours"
                          type="number"
                          min="2"
                          defaultValue="2"
                          required
                        />
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{t("booking.minimumBooking")}</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Vehicle Selection - For All Forms */}
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">{t("booking.selectVehicle")}</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <label className="relative cursor-pointer">
                  <input type="radio" name="vehicleType" value="Lexus ES350" className="peer sr-only" defaultChecked />
                  <div className="flex flex-col items-center p-2 rounded-md border border-gray-200 bg-white peer-checked:border-black peer-checked:bg-gray-50 transition-all">
                    <div className="w-full h-20 relative mb-2 overflow-hidden rounded">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_5OQF72T3_1742471803487_raw.jpg-DEhE0Sbs5K04yYSIadMyEjsCxuE5eg.jpeg"
                        alt={t("fleet.lexusES350.title")}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{t("fleet.lexusES350.title")}</span>
                    <span className="text-xs text-gray-500">{t("fleet.lexusES350.capacity")}</span>
                  </div>
                </label>

                <label className="relative cursor-pointer">
                  <input type="radio" name="vehicleType" value="GMC Yukon" className="peer sr-only" />
                  <div className="flex flex-col items-center p-2 rounded-md border border-gray-200 bg-white peer-checked:border-black peer-checked:bg-gray-50 transition-all">
                    <div className="w-full h-20 relative mb-2 overflow-hidden rounded">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_uNWvl0Dl_1742472231940_raw.jpg-sP9HhuqQgYH3ZrgJLARy5lQ9TNewWS.jpeg"
                        alt={t("fleet.gmcYukon.title")}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{t("fleet.gmcYukon.title")}</span>
                    <span className="text-xs text-gray-500">{t("fleet.gmcYukon.capacity")}</span>
                  </div>
                </label>

                <label className="relative cursor-pointer">
                  <input type="radio" name="vehicleType" value="Mercedes S Class" className="peer sr-only" />
                  <div className="flex flex-col items-center p-2 rounded-md border border-gray-200 bg-white peer-checked:border-black peer-checked:bg-gray-50 transition-all">
                    <div className="w-full h-20 relative mb-2 overflow-hidden rounded">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_0XmGl8eE_1742472303298_raw.jpg-fQ0K5au0gi3bYNIvqpsCpy5rb30y6S.jpeg"
                        alt={t("fleet.mercedesSClass.title")}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{t("fleet.mercedesSClass.title")}</span>
                    <span className="text-xs text-gray-500">{t("fleet.mercedesSClass.capacity")}</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Date and Time - For All Forms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                {t("booking.pickupDate")}
              </label>
              <div className="relative">
                <Calendar
                  className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                />
                <input
                  id="pickup-date"
                  type="date"
                  className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0`}
                  name="date"
                  required
                />
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700 mb-1">
                {t("booking.pickupTime")}
              </label>
              <div className="relative">
                <Clock
                  className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                />
                <input
                  id="pickup-time"
                  type="time"
                  className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0`}
                  name="time"
                  required
                />
              </div>
            </div>
          </div>

          {/* Pickup Card Name - Only for Airport Pickup */}
          {bookingType === "airport" && airportDirection === "pickup" && (
            <div className="space-y-1 sm:space-y-2">
              <div className="relative">
                <User
                  className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground`}
                />
                <input
                  className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0`}
                  placeholder={t("booking.nameOnPickupCard")}
                  name="pickupCardName"
                  value={pickupCardName}
                  onChange={handlePickupCardNameChange}
                  required
                />
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">{t("booking.pickupCardHelp")}</p>

              {/* Pickup Card Preview */}
              <PickupCardPreview name={pickupCardName} isRTL={isRTL} />
            </div>
          )}

          {/* Wait Time Info */}
          <div className="text-xs sm:text-sm text-muted-foreground">
            {bookingType === "airport" && airportDirection === "pickup"
              ? t("booking.airportPickupWait")
              : t("booking.standardWait")}
          </div>

          {/* Payment information */}
          <div className="text-xs sm:text-sm text-muted-foreground border-t border-gray-200 pt-3 mt-3">
            <p className="flex items-center gap-1">
              <CreditCard className="h-3 w-3" />
              <span>{t("booking.paymentAccepted")}</span>
            </p>
          </div>

          {/* Estimated Fare */}
          {showEstimatedFare && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-sm">{t("booking.estimatedFare")}:</h4>
                  <p className="text-xs text-muted-foreground">{t("booking.fareNote")}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">KWD 10</div>
                  <div className="text-xs text-muted-foreground">Approx. $35</div>
                </div>
              </div>
            </div>
          )}

          {/* Make the button sticky to the bottom of the form container */}
          <div className="sticky bottom-0 pt-2 pb-1 bg-white mt-4">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary/90"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("common.processing") : t("booking.bookNow")}
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      {confirmationState.show && (
        <BookingConfirmation
          success={confirmationState.success}
          message={confirmationState.message}
          onClose={closeConfirmation}
          bookingData={confirmationState.bookingData}
          emailSent={confirmationState.emailSent}
          customerEmailSent={confirmationState.customerEmailSent}
          isRTL={isRTL}
        />
      )}
    </>
  )
}
