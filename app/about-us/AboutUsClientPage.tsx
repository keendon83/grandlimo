"use client"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export default function AboutUsClientPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-[1]"></div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{t("aboutUs.title")}</h1>
            <p className="max-w-2xl px-4 text-lg md:text-xl">{t("aboutUs.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">{t("aboutUs.ourStory.title")}</h2>
            <p className="mb-4 text-lg text-gray-700">{t("aboutUs.ourStory.paragraph1")}</p>
            <p className="mb-4 text-lg text-gray-700">{t("aboutUs.ourStory.paragraph2")}</p>
            <p className="text-lg text-gray-700">{t("aboutUs.ourStory.paragraph3")}</p>
          </div>
          <div className="relative min-h-[400px] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_12s7kPbt_1742510887471_raw.jpg-fzY5CbFcCuxXpQ0roBKwrReZFn5wxD.jpeg"
              alt="Grand Limo luxury chauffeur service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            {t("aboutUs.ourFleet.title")}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{t("aboutUs.ourFleet.luxurySedan.title")}</h3>
              <p className="text-gray-700">{t("aboutUs.ourFleet.luxurySedan.description")}</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{t("aboutUs.ourFleet.premiumSUV.title")}</h3>
              <p className="text-gray-700">{t("aboutUs.ourFleet.premiumSUV.description")}</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{t("aboutUs.ourFleet.vipVehicles.title")}</h3>
              <p className="text-gray-700">{t("aboutUs.ourFleet.vipVehicles.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-900 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">{t("aboutUs.values.title")}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-800 p-6">
              <h3 className="mb-4 text-xl font-semibold">{t("aboutUs.values.excellence.title")}</h3>
              <p className="text-gray-300">{t("aboutUs.values.excellence.description")}</p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <h3 className="mb-4 text-xl font-semibold">{t("aboutUs.values.reliability.title")}</h3>
              <p className="text-gray-300">{t("aboutUs.values.reliability.description")}</p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <h3 className="mb-4 text-xl font-semibold">{t("aboutUs.values.personalization.title")}</h3>
              <p className="text-gray-300">{t("aboutUs.values.personalization.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t("aboutUs.cta.title")}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">{t("aboutUs.cta.description")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              {t("aboutUs.cta.contactUs")}
            </a>
            <a
              href="/"
              className="rounded-md border border-white px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-white/10"
            >
              {t("aboutUs.cta.bookService")}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
