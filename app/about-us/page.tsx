import type { Metadata } from "next"
import AboutUsClientPage from "./AboutUsClientPage"

export const metadata: Metadata = {
  title: "About Grand Limo | Kuwait's Premium Chauffeur Service",
  description:
    "Learn about Grand Limo's journey since 2016, our luxury fleet, and our commitment to exceptional service in Kuwait.",
}

export default function AboutUsPage() {
  return <AboutUsClientPage />
}
