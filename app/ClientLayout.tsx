"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import Image from "next/image"
import { Phone, MessageSquare, Mail } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const { t, isRTL } = useLanguage()

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {!isHomePage && (
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
                <Link href="/">
                  <Image
                    src="/images/grand-limo-logo-white.png"
                    alt="Grand Limo"
                    width={150}
                    height={50}
                    className="h-auto"
                  />
                </Link>
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
      )}

      {children}

      {!isHomePage && (
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
                    <button className="text-white/70 hover:text-white text-left" onClick={() => {}}>
                      {t("footer.airportTransfers")}
                    </button>
                  </li>
                  <li>
                    <button className="text-white/70 hover:text-white text-left" onClick={() => {}}>
                      {t("footer.corporateEvents")}
                    </button>
                  </li>
                  <li>
                    <button className="text-white/70 hover:text-white text-left" onClick={() => {}}>
                      {t("footer.hourlyHire")}
                    </button>
                  </li>
                  <li>
                    <button className="text-white/70 hover:text-white text-left" onClick={() => {}}>
                      {t("footer.specialOccasions")}
                    </button>
                  </li>
                </ul>
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
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-white/60 text-sm">
              <p>{t("footer.copyright")}</p>
            </div>
          </div>
        </footer>
      )}
    </ThemeProvider>
  )
}
