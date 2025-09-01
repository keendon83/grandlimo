"use client"

import { useState, useEffect } from "react"

interface PickupCardPreviewProps {
  name: string
  isRTL?: boolean
}

export function PickupCardPreview({ name, isRTL = false }: PickupCardPreviewProps) {
  const [displayName, setDisplayName] = useState(name || "YOUR NAME")

  useEffect(() => {
    setDisplayName(name || "YOUR NAME")
  }, [name])

  return (
    <div className="mt-2 sm:mt-4 border border-gray-300 rounded-md overflow-hidden">
      <div className="bg-black text-white p-1 sm:p-2 text-center text-xs sm:text-sm font-medium">
        {isRTL ? "بطاقة استقبال المطار" : "Airport Pickup Card Preview"}
      </div>
      <div className="p-2 sm:p-4 bg-white">
        <div className="border-2 border-black p-2 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-[10px] sm:text-xs text-gray-500 mb-1">GRAND LIMO</div>
          <div className="font-bold text-base sm:text-xl text-center mb-1">{displayName}</div>
          <div className="text-[10px] sm:text-xs text-gray-500">
            {isRTL ? "خدمة سائقين فاخرة في الكويت" : "Kuwait's Premium Chauffeur Service"}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-1 sm:p-2 text-[10px] sm:text-xs text-gray-500 text-center">
        {isRTL ? "سيحمل السائق هذه البطاقة عند بوابة الوصول" : "Your chauffeur will hold this card at the arrival gate"}
      </div>
    </div>
  )
}
