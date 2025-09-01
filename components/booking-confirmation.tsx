"use client"

import { CheckCircle, XCircle, Copy, Mail, Phone, AlertTriangle } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"

interface BookingConfirmationProps {
  success: boolean
  message: string
  onClose: () => void
  bookingData?: Record<string, string>
  emailSent?: boolean
  customerEmailSent?: boolean
  isRTL?: boolean
}

export function BookingConfirmation({
  success,
  message,
  onClose,
  bookingData,
  emailSent,
  customerEmailSent,
  isRTL = false,
}: BookingConfirmationProps) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyBookingData = () => {
    if (!bookingData) return

    const formattedData = Object.entries(bookingData)
      .filter(([key]) => key !== "error") // Don't include error field
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}: ${value}`)
      .join("\n")

    navigator.clipboard.writeText(formattedData)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const sendEmailManually = () => {
    if (!bookingData) return

    const subject = encodeURIComponent("New Booking Request from Grand Limo Website")
    const body = encodeURIComponent(
      Object.entries(bookingData)
        .filter(([key]) => key !== "error") // Don't include error field
        .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}: ${value}`)
        .join("\n\n"),
    )

    window.open(`mailto:info@q8grandlimo.com?subject=${subject}&body=${body}`, "_blank")
  }

  const textAlign = isRTL ? "text-right" : "text-left"
  const flexDir = isRTL ? "flex-row-reverse" : "flex-row"

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto ${isRTL ? "rtl" : "ltr"}`}
      >
        <div className="flex flex-col items-center text-center">
          {success ? (
            emailSent === false ? (
              <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
            ) : (
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            )
          ) : (
            <XCircle className="h-12 w-12 text-red-500 mb-4" />
          )}

          <h3 className="text-xl font-bold mb-2">
            {success
              ? emailSent === false
                ? isRTL
                  ? "تم استلام طلب الحجز"
                  : "Booking Request Received"
                : isRTL
                  ? "تم إرسال طلب الحجز"
                  : "Booking Request Sent"
              : isRTL
                ? "حدث خطأ ما"
                : "Something Went Wrong"}
          </h3>
          <p className="text-gray-600 mb-6">{message}</p>

          {/* Email status indicators */}
          {success && emailSent && (
            <div className="w-full mb-4 flex flex-col gap-2">
              <div className={`flex ${flexDir} items-center gap-2 text-sm bg-gray-50 p-3 rounded-md`}>
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>
                  {isRTL ? "تم إرسال إشعار الحجز إلى فريق جراند ليمو" : "Booking notification sent to Grand Limo team"}
                </span>
              </div>

              {bookingData?.email ? (
                <div className={`flex ${flexDir} items-center gap-2 text-sm bg-gray-50 p-3 rounded-md`}>
                  {customerEmailSent ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>
                        {isRTL
                          ? `تم إرسال رسالة تأكيد إلى ${bookingData.email}`
                          : `Confirmation email sent to ${bookingData.email}`}
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                      <span>
                        {isRTL
                          ? `تعذر إرسال رسالة تأكيد إلى ${bookingData.email}`
                          : `Could not send confirmation email to ${bookingData.email}`}
                      </span>
                    </>
                  )}
                </div>
              ) : null}
            </div>
          )}

          {/* Show booking data */}
          {bookingData && (
            <div className="w-full mb-6">
              <div className={`bg-gray-50 p-4 rounded-md ${textAlign} mb-4 max-h-60 overflow-y-auto`}>
                <h4 className="font-medium mb-2">{isRTL ? "تفاصيل الحجز:" : "Your Booking Details:"}</h4>
                <div className="space-y-1 text-sm">
                  {Object.entries(bookingData)
                    .filter(([key]) => !["error", "emailSent", "customerEmailSent"].includes(key)) // Don't show system fields
                    .map(([key, value]) => (
                      <div key={key} className="grid grid-cols-2 gap-2">
                        <div className="font-medium">
                          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}:
                        </div>
                        <div>{value}</div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={copyBookingData}
                  className={`flex ${flexDir} items-center justify-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md transition-colors`}
                >
                  <Copy className="h-4 w-4" />
                  {copied ? (isRTL ? "تم النسخ!" : "Copied!") : isRTL ? "نسخ تفاصيل الحجز" : "Copy booking details"}
                </button>

                {(emailSent === false || !success) && (
                  <button
                    onClick={sendEmailManually}
                    className={`flex ${flexDir} items-center justify-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md transition-colors`}
                  >
                    <Mail className="h-4 w-4" />
                    {isRTL ? "إرسال التفاصيل عبر البريد الإلكتروني" : "Send details via email"}
                  </button>
                )}

                <a
                  href="tel:+9651811285"
                  className={`flex ${flexDir} items-center justify-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md transition-colors`}
                >
                  <Phone className="h-4 w-4" />
                  {isRTL ? "اتصل بنا: +965 1811285" : "Call us: +965 1811285"}
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                {isRTL
                  ? "يرجى حفظ هذه التفاصيل للرجوع إليها. يمكنك أيضًا الاتصال بنا مباشرة على info@q8grandlimo.com أو الاتصال على +965 1811285 للمساعدة الفورية."
                  : "Please save these details for your reference. You can also contact us directly at info@q8grandlimo.com or call +965 1811285 for immediate assistance."}
              </p>
            </div>
          )}

          <button
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-primary hover:bg-primary/90"
          >
            {isRTL ? "إغلاق" : "Close"}
          </button>
        </div>
      </div>
    </div>
  )
}
