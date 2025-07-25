"use client"

import Link from "next/link"
import { useState } from "react"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Characters", href: "/characters" },
  { name: "Missions", href: "/missions" },
  { name: "Storyline", href: "/storyline" },
  { name: "LIONSMANE", href: "/lionsmane" },
  { name: "Simulator", href: "/simulator" },
  { name: "Character Progression", href: "/character-progression" },
  { name: "Territory Management", href: "/territory-management" },
  { name: "Year 3030", href: "/future" },
  { name: "Rainbow Static", href: "/rainbow-static" },
]

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-zinc-800 py-4 px-6 sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold tracking-tight">SCAM MERCENAIRES</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-wrap gap-x-6 gap-y-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-zinc-400 hover:text-white transition">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/expanded-missions">
            <Button className="bg-red-600 hover:bg-red-700">Extended Missions</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button type="button" className="md:hidden text-zinc-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-6 border-t border-zinc-800 bg-black">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-400 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/expanded-missions" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-red-600 hover:bg-red-700 mt-2">Extended Missions</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
