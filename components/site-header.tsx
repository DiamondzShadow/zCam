"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Characters", href: "/characters" },
    { name: "Missions", href: "/missions" },
    { name: "LIONSMANE", href: "/lionsmane" },
    { name: "Simulator", href: "/simulator" },
    { name: "Territory", href: "/territory-management" },
    { name: "GDD", href: "/gdd" },
    { name: "Whitepaper", href: "/whitepaper" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold text-xl text-white sm:inline-block">SCAM Mercenaires</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="transition-colors hover:text-purple-400 text-slate-300">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-slate-900 border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <span className="font-bold text-xl text-white">SCAM Mercenaires</span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-purple-400 text-slate-300 text-lg py-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="md:hidden">
              <span className="font-bold text-xl text-white">SCAM Mercenaires</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
