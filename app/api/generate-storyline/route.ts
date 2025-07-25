import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export async function POST(request: NextRequest) {
  try {
    const { location, character } = await request.json()

    const { text } = await generateText({
      model: groq("llama3-70b-8192"),
      prompt: `Create a short mission storyline for a character in the Scam Mercenaires universe. 
      The character is described as: ${character}
      The mission takes place in: ${location}
      
      The mission should involve fighting against the Limptin Foundation and their SCAM nanobots or protecting LIONSMANE NFTs.
      
      Format the response as a mission briefing with objectives and potential rewards. Keep it under 300 words.`,
      system:
        "You are a cyberpunk mission generator for the Scam Mercenaires universe, a world where crypto technology, NFTs, and nanotech are being weaponized by the evil Limptin Foundation.",
    })

    return NextResponse.json({ story: text })
  } catch (error) {
    console.error("Error generating storyline:", error)
    return NextResponse.json({ error: "Failed to generate storyline" }, { status: 500 })
  }
}
