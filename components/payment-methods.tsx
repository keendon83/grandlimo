"use client"

import { CreditCard, Banknote, Building2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function PaymentMethods() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="bg-black/80 backdrop-blur-sm py-6 border-y border-white/10">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg sm:text-xl font-medium text-white mb-4">{t("payment.title")}</h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-3 rounded-full mb-2">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm text-white/80">{t("payment.creditCards")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-3 rounded-full mb-2">
                <Banknote className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm text-white/80">{t("payment.cash")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-3 rounded-full mb-2">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm text-white/80">{t("payment.bankTransfer")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
