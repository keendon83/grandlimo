"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function AppStoreButtons() {
  const { isRTL } = useLanguage()

  return (
    <div className="flex flex-wrap gap-4">
      <Link
        className="inline-block"
        target="_blank"
        rel="noopener noreferrer"
        href="https://apps.apple.com/us/app/grand-limo-%D8%AC%D8%B1%D8%A7%D9%86%D8%AF-%D9%84%D9%8A%D9%85%D9%88/id1169943077"
      >
        <div className="bg-black rounded-lg border border-white/20 flex items-center justify-center px-3 h-12 w-40 sm:h-14 sm:w-44">
          <div className="flex items-center">
            <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.5564 12.4644C17.5691 10.9618 18.2868 9.54319 19.4999 8.6499C18.8709 7.7202 17.9215 7.02694 16.826 6.6742C15.7305 6.32146 14.5441 6.33108 13.4549 6.6999C12.0854 6.9355 10.9699 6.9355 9.6004 6.6999C8.51937 6.34267 7.34335 6.33818 6.26042 6.68349C5.17749 7.0288 4.23239 7.7201 3.6004 8.6399C1.8904 11.3399 2.3399 15.7899 4.8599 19.2099C5.6849 20.3399 6.6649 21.5844 7.9399 21.5499C9.2149 21.5154 9.6749 20.7599 11.1949 20.7599C12.7149 20.7599 13.1349 21.5499 14.4449 21.5304C15.7549 21.5109 16.6549 20.3899 17.4799 19.2599C18.1372 18.4301 18.6641 17.5099 19.0499 16.5299C17.5903 15.8638 16.6598 14.384 16.5699 12.7299"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.5 2.5C12.5717 3.18967 12.0359 4.29348 12 5.48499C13.1593 5.50892 14.245 4.97958 14.9 4.09981C15.555 3.22003 15.7583 2.10291 15.45 2.04981"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="text-left">
              <div className="text-[0.6rem] sm:text-[0.7rem] text-white">{isRTL ? "تنزيل من" : "Download on the"}</div>
              <div className="text-sm sm:text-base font-semibold text-white">App Store</div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        className="inline-block"
        target="_blank"
        rel="noopener noreferrer"
        href="https://play.google.com/store/apps/datasafety?id=com.GrandLimo&hl=en"
      >
        <div className="bg-black rounded-lg border border-white/20 flex items-center justify-center px-3 h-12 w-40 sm:h-14 sm:w-44">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3V21L12 12L3 3Z" fill="#EA4335"></path>
              <path d="M3 21L13 11L21 19C18.3333 21 12.2 21 3 21Z" fill="#FBBC05"></path>
              <path d="M3 3L13 13L21 5C17.6667 3 10.8 3 3 3Z" fill="#4285F4"></path>
              <path d="M13 12L21 20V4L13 12Z" fill="#34A853"></path>
            </svg>
            <div className="text-left">
              <div className="text-[0.6rem] sm:text-[0.7rem] text-white">{isRTL ? "احصل عليه من" : "GET IT ON"}</div>
              <div className="text-sm sm:text-base font-semibold text-white">Google Play</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
