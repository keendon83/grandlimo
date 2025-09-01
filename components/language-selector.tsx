"use client"
import { useLanguage } from "@/context/language-context"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors rounded-md px-2 py-1"
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? t("languageSelector.arabic") : t("languageSelector.english")}</span>
    </button>
  )
}
