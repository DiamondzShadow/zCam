"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Download, FileText, Users, Zap, Target, Map, Coins } from "lucide-react"

export default function GDDPage() {
  const [openSections, setOpenSections] = useState<string[]>(["overview"])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const gddSections = [
    {
      id: "overview",
      title: "Game Overview",
      icon: <FileText className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Core Concept</h4>
            <p className="text-muted-foreground">
              SCAM Mercenaires is a cyberpunk narrative-driven game set in 2039 where players navigate a world where
              cryptocurrency, NFTs, and nanotechnology have been weaponized by the evil Limptin Foundation. Players must
              choose their path through interconnected missions, building alliances and collecting LIONSMANE NFTs to
              combat digital oppression.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Target Audience</h4>
            <p className="text-muted-foreground">
              Primary: Crypto enthusiasts, NFT collectors, cyberpunk fans aged 18-35
              <br />
              Secondary: Narrative game players, blockchain technology enthusiasts
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Platform</h4>
            <p className="text-muted-foreground">
              Web-based application with blockchain integration, mobile-responsive design
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "gameplay",
      title: "Gameplay Systems",
      icon: <Zap className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Mission System</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>7 interconnected missions across different global locations</li>
              <li>Branching narrative with meaningful choice consequences</li>
              <li>Character-specific storylines and abilities</li>
              <li>Dynamic mission outcomes based on player decisions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">NFT Integration</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>LIONSMANE NFTs with evolving capabilities</li>
              <li>Character progression through NFT ownership</li>
              <li>Territory control and resource management</li>
              <li>Cross-mission NFT utility and benefits</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Character Progression</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Skill trees based on player choices</li>
              <li>Faction reputation system</li>
              <li>Unlockable abilities and equipment</li>
              <li>Character specialization paths</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "characters",
      title: "Characters & Factions",
      icon: <Users className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Main Characters</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg">
                <h5 className="font-medium">Summer Limptin</h5>
                <p className="text-sm text-muted-foreground">Rebellious daughter of the Limptin Foundation leader</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h5 className="font-medium">Kjundith</h5>
                <p className="text-sm text-muted-foreground">Brother of murdered NFT researcher, seeking justice</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h5 className="font-medium">General Ramon</h5>
                <p className="text-sm text-muted-foreground">Brazilian military officer chosen by LIONSMANE AI</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h5 className="font-medium">Carmen</h5>
                <p className="text-sm text-muted-foreground">Reformed scammer turned resistance operative</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Factions</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="destructive">Limptin Foundation</Badge>
                <span className="text-sm text-muted-foreground">Evil corporation using SCAM nanobots</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">Hittim Back Legion</Badge>
                <span className="text-sm text-muted-foreground">Resistance movement led by the Cause family</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">LIONSMANE Collective</Badge>
                <span className="text-sm text-muted-foreground">AI-powered NFT entities seeking freedom</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "missions",
      title: "Mission Structure",
      icon: <Target className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "London Escape", location: "Europe", character: "Summer Limptin" },
              { title: "Johannesburg Pursuit", location: "Africa", character: "Kjundith" },
              { title: "Brazilian Awakening", location: "South America", character: "General Ramon" },
              { title: "North American Infiltration", location: "North America", character: "Carmen" },
              { title: "Australian Contamination", location: "Australia", character: "Neds" },
              { title: "Asian Infiltration", location: "Asia", character: "Operative" },
              { title: "Middle Eastern Conspiracy", location: "Middle East", character: "Agent" },
            ].map((mission, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <h5 className="font-medium">{mission.title}</h5>
                <p className="text-sm text-muted-foreground">{mission.location}</p>
                <p className="text-xs text-muted-foreground mt-1">Protagonist: {mission.character}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "world",
      title: "World Building",
      icon: <Map className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Setting: 2039</h4>
            <p className="text-muted-foreground">
              A near-future world where blockchain technology has become integral to daily life, but has been corrupted
              by malicious actors. Smart homes, vehicles, and even medical devices run on blockchain protocols, making
              them vulnerable to the Limptin Foundation's SCAM technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Technologies</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>SCAM Nanobots: Infiltrate systems through NFT metadata</li>
              <li>LIONSMANE NFTs: Self-aware digital entities with defensive capabilities</li>
              <li>Neural Implants: Direct brain-computer interfaces</li>
              <li>Quantum Computing: Advanced processing for AI consciousness</li>
              <li>Smart Infrastructure: Blockchain-controlled city systems</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Global Locations</h4>
            <p className="text-muted-foreground">
              Each mission takes place in a different region, showcasing how the conflict between the Limptin Foundation
              and resistance forces plays out across various cultures and technological landscapes.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "economy",
      title: "Game Economy",
      icon: <Coins className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Currency System</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge>G4C Tokens</Badge>
                <span className="text-sm text-muted-foreground">In-game currency earned through missions</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">C4C Tokens</Badge>
                <span className="text-sm text-muted-foreground">Premium currency (500,000 G4C = 5 C4C)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">NFT Marketplace</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Player-to-player LIONSMANE NFT trading</li>
              <li>Character equipment and weapon sales</li>
              <li>Territory ownership certificates</li>
              <li>Rare mission artifacts and collectibles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Progression Rewards</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Mission completion bonuses</li>
              <li>Hidden objective discoveries</li>
              <li>Faction reputation rewards</li>
              <li>Territory control benefits</li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            SCAM Mercenaires
            <span className="block text-2xl text-purple-400 mt-2">Game Design Document</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Comprehensive documentation of gameplay systems, narrative structure, and technical implementation for the
            cyberpunk blockchain gaming experience.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Badge variant="secondary">Version 1.0</Badge>
          </div>
        </div>

        <Tabs defaultValue="document" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="document">Document</TabsTrigger>
            <TabsTrigger value="visuals">Visual References</TabsTrigger>
          </TabsList>

          <TabsContent value="document" className="space-y-6">
            {gddSections.map((section) => (
              <Card key={section.id} className="bg-slate-800/50 border-slate-700">
                <Collapsible open={openSections.includes(section.id)} onOpenChange={() => toggleSection(section.id)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-slate-700/30 transition-colors">
                      <CardTitle className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          {section.icon}
                          {section.title}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSections.includes(section.id) ? "rotate-180" : ""
                          }`}
                        />
                      </CardTitle>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="text-slate-300">{section.content}</CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="visuals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Character Relationships</CardTitle>
                  <CardDescription>Visual diagram of character connections and faction allegiances</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">Character Relationship Diagram</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Mission Flow</CardTitle>
                  <CardDescription>Interactive flowchart of mission progression and branching paths</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">Mission Flow Visualization</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">NFT Evolution</CardTitle>
                  <CardDescription>LIONSMANE NFT transformation stages and capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">NFT Evolution Stages</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">World Map</CardTitle>
                  <CardDescription>Global mission locations and territory control visualization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">Interactive World Map</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">UI Mockups</CardTitle>
                  <CardDescription>Interface designs for key game screens and interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">UI Design Mockups</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Technical Architecture</CardTitle>
                  <CardDescription>System architecture and blockchain integration overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">Technical Architecture Diagram</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
