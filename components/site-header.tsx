"use client"

import Link from "next/link"
import { useState } from "react"
import { Shield, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "Characters", href: "/characters" },
  { name: "Storyline", href: "/storyline" },
  { name: "LIONSMANE", href: "/lionsmane" },
  { name: "Simulator", href: "/simulator" },
]

const gameplayNavigation = [
  { name: "Missions", href: "/missions", description: "Core mission progression" },
  { name: "Extended Missions", href: "/expanded-missions", description: "Additional mission content" },
  { name: "Character Progression", href: "/character-progression", description: "Level up your character" },
  { name: "Territory Management", href: "/territory-management", description: "Manage your territories" },
  { name: "Year 3030", href: "/future", description: "Future timeline content" },
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
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {mainNavigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="text-zinc-400 hover:text-white transition px-3 py-2 rounded-md text-sm">
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-zinc-400 hover:text-white bg-transparent text-sm">
                  Gameplay
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80 bg-black border border-zinc-800">
                    {gameplayNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white"
                      >
                        <div className="text-sm font-medium leading-none text-white">{item.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-400 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="mt-2 pt-2 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 mb-2 font-semibold">GAMEPLAY</p>
              {gameplayNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-zinc-400 hover:text-white transition py-2 pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
