import { type NextRequest, NextResponse } from "next/server"

// Fallback image URLs for when the API fails
const FALLBACK_IMAGES = [
  "/neon-cityscape.png",
  "/neon-grid-breach.png",
  "/neon-grid.png",
  "/neon-city-dreams.png",
  "/neural-connection.png",
]

export async function POST(request: NextRequest) {
  try {
    // Return a random fallback image instead of trying to use the XAI API
    // This ensures the mission simulator will always have visuals
    const randomIndex = Math.floor(Math.random() * FALLBACK_IMAGES.length)
    const fallbackImageUrl = FALLBACK_IMAGES[randomIndex]

    return NextResponse.json({
      imageUrl: fallbackImageUrl,
      isStaticImage: true,
    })
  } catch (error) {
    console.error("Error generating mission art:", error)
    // Even if there's an error in our fallback logic, return a default image
    return NextResponse.json({
      imageUrl: "/neon-grid.png",
      isStaticImage: true,
      error: "Failed to generate mission art",
    })
  }
}
