"use client"

import { useState } from "react"
import { Menu, X, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const textAlign = isRTL ? "text-right" : "text-left"
  const menuAlign = isRTL ? "items-end" : "items-center"

  // Find the navigation links array and add the About Us link:
  const links = [
    { href: "/", label: t("navigation.home") },
    { href: "/about-us", label: t("navigation.aboutUs") },
    { href: "/airport-transfers", label: t("navigation.airportTransfers") },
    { href: "/corporate-transfers", label: t("navigation.corporateTransfers") },
    { href: "/contact", label: t("navigation.contact") },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className={`fixed inset-0 z-50 bg-black/95 flex flex-col ${isRTL ? "rtl" : "ltr"}`}>
          <div className="flex justify-between items-center p-4">
            <div>
              <Image
                src="/images/grand-limo-logo-white.png"
                alt="Grand Limo"
                width={120}
                height={40}
                className="h-auto"
              />
            </div>
            <div className="flex items-center gap-2">
              {/* LanguageSelector temporarily hidden */}
              <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Contact info */}
          <div className={`px-4 py-2 border-b border-white/10 ${textAlign}`}>
            <div className="flex flex-col gap-3">
              <div>
                <div className="text-xs text-white/70 mb-1">{t("common.local")}:</div>
                <div className="flex items-center gap-3">
                  <a href="tel:+9651811285" className="flex items-center gap-1 text-white">
                    <Phone className="h-3 w-3" />
                    <span>+965 1811285</span>
                  </a>
                  <a href="https://wa.me/9651811285" className="flex items-center gap-1 text-white">
                    <MessageSquare className="h-3 w-3" />
                    <span>{t("common.whatsApp")}</span>
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs text-white/70 mb-1">{t("common.international")}:</div>
                <div className="flex items-center gap-3">
                  <a href="tel:+96566307956" className="flex items-center gap-1 text-white">
                    <Phone className="h-3 w-3" />
                    <span>+965 66307956</span>
                  </a>
                  <a href="https://wa.me/96566307956" className="flex items-center gap-1 text-white">
                    <MessageSquare className="h-3 w-3" />
                    <span>{t("common.whatsApp")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-1">
            {/* Service options */}
            <div className="w-full pt-4 mt-2">
              <div className={`flex flex-col ${menuAlign} gap-4`}>
                <Link href="/airport-transfers" className="text-lg text-white/80 hover:text-white" onClick={toggleMenu}>
                  {t("header.airportTransfers")}
                </Link>
                <Link href="/" className="text-lg text-white/80 hover:text-white" onClick={toggleMenu}>
                  {t("header.pointToPoint")}
                </Link>
                <Link
                  href="/corporate-transfers"
                  className="text-lg text-white/80 hover:text-white"
                  onClick={toggleMenu}
                >
                  {t("header.corporateTransfers")}
                </Link>
                <Link href="/#fleet-section" className="text-lg text-white/80 hover:text-white" onClick={toggleMenu}>
                  {t("footer.ourFleet")}
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 rounded-md px-6 bg-white text-black hover:bg-white/90"
                onClick={toggleMenu}
              >
                {t("common.contactUs")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
