"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"

interface SimpleQRCodeProps {
  url: string
  size?: number
  logoUrl?: string
}

export function SimpleQRCode({ url, size = 250 }: SimpleQRCodeProps) {
  const { isRTL } = useLanguage()

  // Use responsive size based on the provided size prop
  const responsiveSize = typeof window !== "undefined" && window.innerWidth < 768 ? Math.min(size, 180) : size

  return (
    <div className="relative">
      <Image
        src="/images/grand-limo-qr.png"
        alt={isRTL ? "رمز QR لتطبيق جراند ليمو" : "Grand Limo App QR Code"}
        width={responsiveSize}
        height={responsiveSize}
        className="rounded-md w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-2 rounded-md" style={{ width: `${responsiveSize * 0.2}px` }}>
          <Image
            src="/images/grand-limo-logo-white.png"
            alt="Grand Limo"
            width={responsiveSize * 0.15}
            height={responsiveSize * 0.05}
            className="h-auto opacity-0" // Hidden because the QR code already has the logo
          />
        </div>
      </div>
    </div>
  )
}
