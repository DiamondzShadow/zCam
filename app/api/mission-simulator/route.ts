import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { deepinfra } from "@ai-sdk/deepinfra"

export async function POST(request: NextRequest) {
  try {
    const { action, choice, history } = await request.json()

    if (action === "start") {
      // Initial mission setup
      return NextResponse.json({
        step: {
          text: "You wake up in a small apartment in a city you don't recognize. Your head is pounding, and you notice a smartphone on the nightstand with a blinking notification. The streets outside are busy, and you can hear sirens in the distance. What do you do?",
          choices: [
            "Check the smartphone notification",
            "Look around the apartment for clues",
            "Go to the window and check outside",
            "Try to remember how you got here",
          ],
        },
      })
    } else if (action === "choice") {
      // Generate next step based on user choice
      const { text } = await generateText({
        model: deepinfra("meta-llama/Llama-2-70b-chat-hf"),
        prompt: `This is a text-based mission simulator for the Scam Mercenaires universe. The player is on Mission 1, trying to escape a dangerous situation and establish their identity.

Previous conversation:
${history.join("\n")}

The player chose: "${choice}"

Generate the next step in the mission with a detailed description and 3-4 possible choices for the player. Keep the cyberpunk theme with references to crypto, NFTs, and the Limptin Foundation where appropriate.`,
        system:
          "You are an immersive cyberpunk mission simulator for the Scam Mercenaires universe. Create engaging, detailed scenarios with meaningful choices.",
      })

      // Extract choices from the generated text
      const lines = text.split("\n")
      const choicesStart = lines.findIndex(
        (line) => line.includes("Choice") || line.includes("Option") || line.includes("- "),
      )

      let choices = []
      if (choicesStart !== -1) {
        choices = lines
          .slice(choicesStart)
          .filter((line) => line.trim().length > 0)
          .map((line) => line.replace(/^(Choice \d+:|Option \d+:|- )/, "").trim())
          .slice(0, 4)
      } else {
        // Fallback choices if none were generated
        choices = ["Continue exploring", "Look for more information", "Try a different approach", "Call for help"]
      }

      // Extract the narrative text
      const narrative = choicesStart !== -1 ? lines.slice(0, choicesStart).join("\n").trim() : text.trim()

      return NextResponse.json({
        step: {
          text: narrative,
          choices: choices,
        },
      })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Error in mission simulator:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
