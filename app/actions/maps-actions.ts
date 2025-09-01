"use server"

// This file contains server actions for maps-related functionality
// Since we're having issues with the Google Maps API, we'll use a hybrid approach
// with reliable mock data for Kuwait locations

export async function getPlacePredictions(input: string) {
  try {
    // The API key is accessed server-side only
    const apiKey = process.env.GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      console.error("Google Maps API key is not defined in environment variables")
      return { error: "API configuration missing" }
    }

    // Normalize the input for comparison
    const normalizedInput = input.toLowerCase().trim()

    // Check if input contains specific Kuwait areas or keywords
    const isSpecificAddress =
      normalizedInput.includes("block") ||
      normalizedInput.includes("street") ||
      normalizedInput.includes("house") ||
      normalizedInput.includes("road")

    // For specific addresses, create a custom prediction
    if (isSpecificAddress) {
      return {
        predictions: [
          { description: input, isCustomAddress: true },
          { description: "Kuwait International Airport, Kuwait" },
          { description: "Kuwait City, Kuwait" },
          { description: "Salmiya, Kuwait" },
          { description: "Hawally, Kuwait" },
          { description: "Farwaniya, Kuwait" },
        ],
      }
    }

    // Common Kuwait areas and locations
    const kuwaitAreas = [
      "Kuwait International Airport",
      "Kuwait City",
      "Salmiya",
      "Hawally",
      "Farwaniya",
      "Jahra",
      "Ahmadi",
      "Mangaf",
      "Fahaheel",
      "Sabah Al-Salem",
      "Salwa",
      "Rumaithiya",
      "Jabriya",
      "Surra",
      "Abdullah Al-Salem",
      "Qadsiya",
      "Dasma",
      "Daiya",
      "Sharq",
      "Bneid Al-Gar",
      "Fintas",
      "Abu Halifa",
      "Egaila",
      "Mahboula",
      "Messila",
      "Bayan",
      "Mishref",
      "Sabah Al-Ahmad",
      "Wafra",
      "Khairan",
      "Mubarak Al-Kabeer",
    ]

    // Filter areas based on input
    const filteredAreas = kuwaitAreas.filter(
      (area) => area.toLowerCase().includes(normalizedInput) || normalizedInput.includes(area.toLowerCase()),
    )

    // If we have filtered areas, return them
    if (filteredAreas.length > 0) {
      return {
        predictions: filteredAreas.map((area) => ({
          description: `${area}, Kuwait`,
        })),
      }
    }

    // If no specific matches, return some default Kuwait locations
    return {
      predictions: [
        { description: `${input} (Custom Address)`, isCustomAddress: true },
        { description: "Kuwait International Airport, Kuwait" },
        { description: "Kuwait City, Kuwait" },
        { description: "Salmiya, Kuwait" },
        { description: "Hawally, Kuwait" },
        { description: "Farwaniya, Kuwait" },
      ],
    }

    // Note: We're not making an actual API call to Google Maps API
    // because we're having issues with it. This is a fallback solution.
  } catch (error) {
    console.error("Error in getPlacePredictions:", error)
    return {
      error: "Failed to fetch predictions",
      predictions: [
        { description: `${input} (Custom Address)`, isCustomAddress: true },
        { description: "Kuwait International Airport, Kuwait" },
        { description: "Kuwait City, Kuwait" },
        { description: "Salmiya, Kuwait" },
        { description: "Hawally, Kuwait" },
      ],
    }
  }
}

// Simplified place details function
export async function getPlaceDetails(placeId: string) {
  return {
    details: {
      formatted_address: placeId,
      geometry: {
        location: {
          lat: 29.3759, // Default Kuwait coordinates
          lng: 47.9774,
        },
      },
    },
  }
}
