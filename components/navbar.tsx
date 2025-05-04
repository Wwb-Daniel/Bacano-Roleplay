"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo-header.png" alt="Bacano RP Logo" width={80} height={30} className="h-8 w-auto" />
            <span className="font-bold text-lg text-primary">Bacano RP</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Características
          </Link>
          <Link href="#videos" className="text-sm font-medium transition-colors hover:text-primary">
            Videos
          </Link>
          <Link href="#join" className="text-sm font-medium transition-colors hover:text-primary">
            Únete
          </Link>
          <Link href="#forms" className="text-sm font-medium transition-colors hover:text-primary">
            Formularios
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild variant="default" size="sm" className="hidden md:flex">
            <Link href="mtasa://102.129.137.140:20016">Conectar al Servidor</Link>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-3 p-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </Link>
            <Link
              href="#videos"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Videos
            </Link>
            <Link
              href="#join"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Únete
            </Link>
            <Link
              href="#forms"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Formularios
            </Link>
            <Button asChild variant="default" size="sm" className="w-full">
              <Link href="mtasa://102.129.137.140:20016">Conectar al Servidor</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
