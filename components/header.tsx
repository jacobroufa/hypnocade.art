import Link from "next/link"
import Logo from "@/components/logo"

interface HeaderProps {
  currentPage?: "home" | "machines" | "gallery" | "contact" | "events"
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const linkClasses = (page: string) => {
    return page === currentPage
      ? "text-foreground font-medium"
      : "text-muted-foreground hover:text-foreground transition-colors"
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-foreground text-orange-500">
          <Logo />
        </Link>
        <nav className="flex items-center space-x-8">
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
      </div>
    </header>
  )
}
