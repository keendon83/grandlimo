"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MapPin } from "lucide-react"
import { getPlacePredictions } from "@/app/actions/maps-actions"
import { useLanguage } from "@/context/language-context"

interface LocationAutocompleteProps {
  placeholder: string
  name: string
  required?: boolean
  onPlaceSelect?: (place: any) => void
  isRTL?: boolean
}

export function LocationAutocomplete({
  placeholder,
  name,
  required = false,
  onPlaceSelect,
  isRTL = false,
}: LocationAutocompleteProps) {
  const { t } = useLanguage()
  const [inputValue, setInputValue] = useState("")
  const [predictions, setPredictions] = useState<{ description: string; isCustomAddress?: boolean }[]>([])
  const [showPredictions, setShowPredictions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const hiddenInputRef = useRef<HTMLInputElement>(null)

  // Fetch predictions when input changes
  useEffect(() => {
    if (inputValue.length < 2) {
      setPredictions([])
      return
    }

    const fetchPredictions = async () => {
      setIsLoading(true)
      try {
        const result = await getPlacePredictions(inputValue)
        if (result.predictions && result.predictions.length > 0) {
          setPredictions(result.predictions)
          setShowPredictions(true)
        } else {
          setPredictions([{ description: `${inputValue} (Custom Address)`, isCustomAddress: true }])
          setShowPredictions(true)
        }
      } catch (error) {
        console.error("Error fetching predictions:", error)
        setPredictions([{ description: `${inputValue} (Custom Address)`, isCustomAddress: true }])
        setShowPredictions(true)
      } finally {
        setIsLoading(false)
      }
    }

    const timeoutId = setTimeout(fetchPredictions, 300)
    return () => clearTimeout(timeoutId)
  }, [inputValue])

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    // Also update the hidden input
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = value
    }
  }

  // Handle prediction selection
  const handlePredictionSelect = (prediction: { description: string; isCustomAddress?: boolean }) => {
    // Update visible input
    setInputValue(prediction.description)

    // Update hidden input
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = prediction.description
    }

    // Hide predictions
    setShowPredictions(false)

    // Callback if provided
    if (onPlaceSelect) {
      onPlaceSelect(prediction)
    }
  }

  // Close predictions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowPredictions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <MapPin
        className={`absolute ${isRTL ? "right-3" : "left-3"} top-2 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground z-10`}
      />

      {/* Visible input field */}
      <input
        ref={inputRef}
        type="text"
        className={`flex h-8 sm:h-10 w-full rounded-md border-input px-3 py-1 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${isRTL ? "pr-8 sm:pr-10" : "pl-8 sm:pl-10"} bg-secondary border-0`}
        placeholder={placeholder}
        autoComplete="off"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => inputValue.length >= 2 && predictions.length > 0 && setShowPredictions(true)}
      />

      {/* Hidden input for form submission */}
      <input ref={hiddenInputRef} type="hidden" name={name} value={inputValue} required={required} />

      <div className="mt-1 text-[10px] sm:text-xs text-gray-500">{t("booking.addressHelp")}</div>

      {/* Predictions dropdown */}
      {showPredictions && (
        <div
          className={`absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-40 sm:max-h-60 overflow-y-auto ${isRTL ? "text-right" : "text-left"}`}
        >
          {isLoading ? (
            <div className="p-2 text-xs sm:text-sm text-gray-500">Loading...</div>
          ) : predictions.length > 0 ? (
            <ul>
              {predictions.map((prediction, index) => (
                <li
                  key={index}
                  className={`px-3 py-1 sm:py-2 text-xs sm:text-sm hover:bg-gray-100 cursor-pointer ${
                    prediction.isCustomAddress ? "font-medium" : ""
                  }`}
                  onClick={() => handlePredictionSelect(prediction)}
                >
                  {prediction.description}
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-2 text-xs sm:text-sm text-gray-500">No results found. Please try a different search.</div>
          )}
        </div>
      )}
    </div>
  )
}
