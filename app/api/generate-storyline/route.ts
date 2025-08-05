import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { character, location } = await request.json()

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock storyline generation based on character and location
    const storylines = {
      "Summer Limptin": {
        London:
          "Summer navigates the foggy streets of London, her family's dark legacy weighing heavily on her shoulders. She must evade Limptin Foundation operatives while seeking passage to New York. The ancient city's surveillance network poses a constant threat, but underground resistance cells offer hope.",
        "New York":
          "In the neon-lit streets of New York, Summer finally makes contact with the Hittim Back Legion. Jeremy Cause's network operates from the shadows of Wall Street, using financial warfare against her family's empire. Every transaction could be her last.",
        default:
          "Summer's journey takes an unexpected turn as she discovers new allies in her fight against the Limptin Foundation's tyrannical control.",
      },
      Kjundith: {
        Johannesburg:
          "Kjundith returns to his homeland, haunted by his brother Nwgeua's death. The mining districts hold secrets about LIONSMANE technology, but Limptin operatives patrol every corner. He must recover his brother's research before it falls into the wrong hands.",
        London:
          "Far from home, Kjundith struggles with the cold London streets. His brother's encrypted data holds the key to stopping the nano-scam, but decoding it requires resources he doesn't have. Trust becomes a luxury he can't afford.",
        default:
          "Kjundith's technical expertise becomes crucial as he works to unlock the secrets of LIONSMANE NFT technology.",
      },
      default: {
        default:
          "The mercenary's path leads through dangerous territory where every decision could mean the difference between salvation and destruction. The LIONSMANE NFTs hold power beyond imagination, but wielding them comes at a cost.",
      },
    }

    const characterStories = storylines[character as keyof typeof storylines] || storylines.default
    const story =
      typeof characterStories === "object"
        ? characterStories[location as keyof typeof characterStories] || characterStories.default
        : characterStories

    return NextResponse.json({
      storyline: story,
      character,
      location,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error generating storyline:", error)
    return NextResponse.json({ error: "Failed to generate storyline" }, { status: 500 })
  }
}
