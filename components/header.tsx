"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Logo from "@/components/logo"

interface HeaderProps {
  currentPage?: "home" | "machines" | "gallery" | "contact" | "events"
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const linkClasses = (page: string) => {
    return page === currentPage
      ? "text-foreground font-medium"
      : "text-muted-foreground hover:text-foreground transition-colors"
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-foreground text-orange-500">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-8 text-base">
          <Link href="/machines" className={linkClasses("machines")}>
            Machines
          </Link>
          <Link href="/gallery" className={linkClasses("gallery")}>
            Gallery
          </Link>
          <Link href="/events" className={linkClasses("events")}>
            Events
          </Link>
          <Link href="/contact" className={linkClasses("contact")}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <nav className="flex flex-col px-4 py-2">
            <Link
              href="/machines"
              className={`${linkClasses("machines")} py-3 border-b border-border`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Machines
            </Link>
            <Link
              href="/gallery"
              className={`${linkClasses("gallery")} py-3 border-b border-border`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/events"
              className={`${linkClasses("events")} py-3 border-b border-border`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className={`${linkClasses("contact")} py-3`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
