"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Users, Zap, Shield, Coins } from "lucide-react"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">SCAM Mercenaires</h1>
          <h2 className="text-2xl text-purple-400 mb-6">Whitepaper v1.0</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Revolutionizing Gaming Through Blockchain Technology and Narrative-Driven NFT Experiences
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="secondary">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">Version 1.0</Badge>
            <Badge variant="outline">December 2024</Badge>
          </div>
        </div>

        {/* Document Metadata */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-slate-400">Authors:</span>
                <p className="text-white">SCAM Mercenaires Team</p>
              </div>
              <div>
                <span className="text-slate-400">Last Updated:</span>
                <p className="text-white">December 2024</p>
              </div>
              <div>
                <span className="text-slate-400">Status:</span>
                <Badge variant="default">Active Development</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Abstract */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Abstract</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              SCAM Mercenaires represents a paradigm shift in blockchain gaming, combining immersive cyberpunk
              storytelling with innovative NFT mechanics and decentralized governance. Set in 2039, players navigate a
              world where cryptocurrency and nanotechnology have been weaponized, requiring strategic thinking and
              community collaboration to overcome digital oppression.
            </p>
            <p>
              Our platform introduces LIONSMANE NFTs - self-aware digital entities that evolve based on player actions
              and community decisions. Through a dual-token economy ($MERC and $G4C), players can participate in
              governance, trade assets, and influence the game's narrative direction while earning real value for their
              contributions.
            </p>
          </CardContent>
        </Card>

        {/* Problem Statement */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Problem Statement
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>The current gaming industry faces several critical challenges:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Players invest time and money in games without true ownership of digital assets</li>
              <li>Centralized game economies limit player agency and value creation</li>
              <li>Traditional NFT projects lack meaningful utility and narrative depth</li>
              <li>Gaming communities have limited influence over game development and direction</li>
              <li>Cross-platform asset interoperability remains largely unrealized</li>
            </ul>
            <p>
              SCAM Mercenaires addresses these issues by creating a player-owned economy where digital assets have real
              utility, governance is decentralized, and narrative choices have lasting consequences across the entire
              ecosystem.
            </p>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Our Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Narrative-Driven NFTs</h4>
                <p className="text-sm">
                  LIONSMANE NFTs evolve based on player choices and community actions, creating unique digital entities
                  with meaningful backstories and capabilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Decentralized Governance</h4>
                <p className="text-sm">
                  Token holders participate in key decisions about game development, narrative direction, and economic
                  parameters through on-chain voting mechanisms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Cross-Mission Utility</h4>
                <p className="text-sm">
                  Assets and achievements from one mission carry forward, creating a persistent world where player
                  actions have lasting consequences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Community-Driven Economy</h4>
                <p className="text-sm">
                  Players can create, trade, and monetize content within the game ecosystem, fostering a sustainable
                  creator economy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tokenomics */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Coins className="w-5 h-5" />
              Tokenomics
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-slate-600 rounded-lg">
                <h4 className="font-semibold text-white mb-2">$MERC Token</h4>
                <p className="text-sm mb-3">Governance and premium utility token</p>
                <ul className="text-xs space-y-1">
                  <li>• Total Supply: 100,000,000 MERC</li>
                  <li>• Governance voting rights</li>
                  <li>• Premium mission access</li>
                  <li>• Staking rewards</li>
                  <li>• Territory ownership</li>
                </ul>
              </div>
              <div className="p-4 border border-slate-600 rounded-lg">
                <h4 className="font-semibold text-white mb-2">$G4C Token</h4>
                <p className="text-sm mb-3">In-game currency and rewards</p>
                <ul className="text-xs space-y-1">
                  <li>• Unlimited supply (inflationary)</li>
                  <li>• Mission rewards</li>
                  <li>• NFT marketplace currency</li>
                  <li>• Character upgrades</li>
                  <li>• Convertible to C4C (500k:5 ratio)</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Token Distribution</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">30%</div>
                  <div className="text-sm">Community Rewards</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">25%</div>
                  <div className="text-sm">Development Team</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">20%</div>
                  <div className="text-sm">Public Sale</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">25%</div>
                  <div className="text-sm">Ecosystem Fund</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Architecture */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Technical Architecture</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Blockchain Layer</h4>
                <ul className="text-sm space-y-1">
                  <li>• Ethereum mainnet for governance tokens</li>
                  <li>• Polygon for game transactions</li>
                  <li>• IPFS for NFT metadata storage</li>
                  <li>• Layer 2 scaling solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Game Infrastructure</h4>
                <ul className="text-sm space-y-1">
                  <li>• Next.js web application</li>
                  <li>• Real-time multiplayer support</li>
                  <li>• AI-powered narrative generation</li>
                  <li>• Cross-platform compatibility</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Smart Contract Architecture</h4>
              <p className="text-sm">
                Our smart contracts handle NFT minting, evolution mechanics, governance voting, and cross-mission asset
                transfers. All contracts are audited and upgradeable through community governance.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Development Roadmap</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Badge variant="default">Q1 2025</Badge>
                <div>
                  <h4 className="font-semibold text-white">Alpha Launch</h4>
                  <p className="text-sm">Core mission system, basic NFT functionality, community testing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Badge variant="secondary">Q2 2025</Badge>
                <div>
                  <h4 className="font-semibold text-white">Beta Release</h4>
                  <p className="text-sm">Full 7-mission campaign, marketplace launch, governance implementation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Badge variant="outline">Q3 2025</Badge>
                <div>
                  <h4 className="font-semibold text-white">Public Launch</h4>
                  <p className="text-sm">Token generation event, full platform launch, mobile app release</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Badge variant="outline">Q4 2025</Badge>
                <div>
                  <h4 className="font-semibold text-white">Expansion</h4>
                  <p className="text-sm">Additional missions, VR support, cross-game integrations</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="w-5 h-5" />
              Team & Partners
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              Our team combines expertise in blockchain technology, game development, and narrative design. We are
              committed to building a sustainable, community-driven gaming ecosystem that pushes the boundaries of
              what's possible in Web3 gaming.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-semibold text-white">Core Development</h4>
                <p className="text-sm">Blockchain engineers, game developers, UI/UX designers</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white">Creative Team</h4>
                <p className="text-sm">Narrative writers, artists, community managers</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white">Advisory Board</h4>
                <p className="text-sm">Industry veterans, blockchain experts, gaming influencers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Disclaimer */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Legal Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 text-sm space-y-2">
            <p>
              This whitepaper is for informational purposes only and does not constitute an offer or solicitation to
              sell shares or securities. The information contained herein may not be exhaustive and does not imply any
              elements of a contractual relationship.
            </p>
            <p>
              Cryptocurrency investments carry significant risk. Past performance does not guarantee future results.
              Please conduct your own research and consult with financial advisors before making investment decisions.
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Join the Revolution</h3>
          <p className="text-slate-300 mb-6">
            Be part of the future of gaming. Join our community and help shape the SCAM Mercenaires universe.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Join Discord
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              Follow on Twitter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
