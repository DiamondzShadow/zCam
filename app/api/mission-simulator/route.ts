import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { character, mission, difficulty } = await request.json()

    // Simulate mission processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock mission simulation logic
    const characterStats = {
      "Summer Limptin": { stealth: 85, combat: 60, intelligence: 90, luck: 70 },
      Kjundith: { stealth: 70, combat: 75, intelligence: 95, luck: 60 },
      Carmen: { stealth: 90, combat: 80, intelligence: 75, luck: 85 },
      Neds: { stealth: 60, combat: 85, intelligence: 70, luck: 75 },
    }

    const difficultyModifiers = {
      Easy: 0.8,
      Medium: 1.0,
      Hard: 1.3,
      Extreme: 1.6,
    }

    const stats = characterStats[character as keyof typeof characterStats] || characterStats["Summer Limptin"]
    const modifier = difficultyModifiers[difficulty as keyof typeof difficultyModifiers] || 1.0

    // Calculate success probability
    const averageStats = (stats.stealth + stats.combat + stats.intelligence + stats.luck) / 4
    const adjustedDifficulty = 50 * modifier
    const successProbability = Math.max(10, Math.min(95, (averageStats / adjustedDifficulty) * 100))

    const success = Math.random() * 100 < successProbability

    // Generate rewards based on success and difficulty
    const baseReward = success ? 100 : 25
    const difficultyBonus =
      {
        Easy: 1,
        Medium: 1.5,
        Hard: 2,
        Extreme: 3,
      }[difficulty] || 1

    const g4cReward = Math.floor(baseReward * difficultyBonus)
    const c4cReward = success && difficulty === "Hard" ? Math.floor(g4cReward / 100) : 0

    const result = {
      success,
      character,
      mission,
      difficulty,
      successProbability: Math.round(successProbability),
      rewards: {
        g4c: g4cReward,
        c4c: c4cReward,
        experience: success ? 50 * difficultyBonus : 10,
        items: success ? ["Energy Pack", "Intel Data"] : [],
      },
      narrative: success
        ? `${character} successfully completed the ${mission} mission! Their skills proved crucial in navigating the challenges.`
        : `${character} encountered unexpected resistance during the ${mission} mission. Though unsuccessful, valuable experience was gained.`,
      nextActions: success
        ? ["Continue to next mission", "Upgrade equipment", "Rest and recover"]
        : ["Retry mission", "Train skills", "Seek assistance"],
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error simulating mission:", error)
    return NextResponse.json({ error: "Failed to simulate mission" }, { status: 500 })
  }
}
