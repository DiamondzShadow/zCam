import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { prompt, name } = await request.json()

    // Call Fal AI API to generate an image
    const response = await fetch("https://api.fal.ai/v1/text-to-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FAL_KEY}`,
      },
      body: JSON.stringify({
        model: "stable-diffusion-xl",
        prompt: `Cyberpunk LIONSMANE NFT, digital art, ${prompt}`,
        negative_prompt: "low quality, blurry, distorted",
        width: 512,
        height: 512,
      }),
    })

    const data = await response.json()

    return NextResponse.json({
      imageUrl: data.images?.[0]?.url || null,
      name,
    })
  } catch (error) {
    console.error("Error generating NFT:", error)
    return NextResponse.json({ error: "Failed to generate NFT" }, { status: 500 })
  }
}
