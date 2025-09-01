"use client"

import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import type { Language, LanguageContextType } from "@/types/language"
import { translations } from "@/utils/translations"

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
  isRTL: false,
})

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext)

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Get initial language from localStorage or default to 'en'
  const [language, setLanguageState] = useState<Language>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguageState(savedLanguage)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      // Save language to localStorage
      localStorage.setItem("language", language)

      // Set HTML dir attribute for RTL support
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = language
    }
  }, [language, isLoaded])

  // Set language function
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
  }

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".")
    let result: any = translations[language]

    for (const k of keys) {
      if (result && result[k]) {
        result = result[k]
      } else {
        // Fallback to English if translation not found
        let fallback = translations["en"]
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey]) {
            fallback = fallback[fbKey]
          } else {
            return key // Return key if not found in fallback
          }
        }
        return typeof fallback === "string" ? fallback : key
      }
    }

    return typeof result === "string" ? result : key
  }

  const value = {
    language,
    setLanguage,
    t,
    isRTL: language === "ar",
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
