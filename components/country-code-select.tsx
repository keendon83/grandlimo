"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

// Country codes with flags
const countryCodes = [
  { code: "+965", country: "KW", flag: "🇰🇼", name: "Kuwait" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE" },
  { code: "+973", country: "BH", flag: "🇧🇭", name: "Bahrain" },
  { code: "+974", country: "QA", flag: "🇶🇦", name: "Qatar" },
  { code: "+968", country: "OM", flag: "🇴🇲", name: "Oman" },
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+92", country: "PK", flag: "🇵🇰", name: "Pakistan" },
  { code: "+20", country: "EG", flag: "🇪🇬", name: "Egypt" },
  { code: "+961", country: "LB", flag: "🇱🇧", name: "Lebanon" },
  { code: "+962", country: "JO", flag: "🇯🇴", name: "Jordan" },
  { code: "+963", country: "SY", flag: "🇸🇾", name: "Syria" },
  { code: "+964", country: "IQ", flag: "🇮🇶", name: "Iraq" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
  { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
  { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
  { code: "+58", country: "VE", flag: "🇻🇪", name: "Venezuela" },
]

interface CountryCodeSelectProps {
  onChange: (code: string) => void
  defaultValue?: string
}

export function CountryCodeSelect({ onChange, defaultValue = "+965" }: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCode, setSelectedCode] = useState(defaultValue)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Find the selected country data
  const selectedCountry = countryCodes.find((country) => country.code === selectedCode) || countryCodes[0]

  // Handle selection
  const handleSelect = (code: string) => {
    setSelectedCode(code)
    onChange(code)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        className="flex items-center justify-between h-8 sm:h-10 rounded-md border-input px-1 sm:px-2 py-1 sm:py-2 text-xs sm:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-secondary border-0 w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          <span className="mr-1">{selectedCountry.flag}</span>
          <span className="text-xs">{selectedCountry.code}</span>
        </span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
          <div className="sticky top-0 bg-white z-10 px-2 py-1.5">
            <div className="text-xs font-medium text-gray-500 mb-1">Select country code</div>
          </div>
          {countryCodes.map((country) => (
            <div
              key={country.code}
              className={`flex items-center px-2 py-1 cursor-pointer hover:bg-gray-100 ${
                selectedCode === country.code ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSelect(country.code)}
            >
              <span className="mr-2">{country.flag}</span>
              <span>{country.code}</span>
            </div>
          ))}
        </div>
      )}

      {/* Hidden input to store the selected country code */}
      <input type="hidden" name="countryCode" value={selectedCode} />
    </div>
  )
}
