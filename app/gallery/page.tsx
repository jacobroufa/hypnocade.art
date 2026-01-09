import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Images, TriangleAlert } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=400&width=400&text=Gallery+Image+${i + 1}`,
    alt: `Gallery Image ${i + 1}`,
    title: `Visual Art ${i + 1}`,
  }))

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="gallery" />

      {/* Page Header */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-foreground mb-6">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore a collection of mesmerizing visuals created by Hypnocade machines in various settings.
          </p>
          <div className="flex items-center py-16 px-6 max-w-3xl">
            <div className="w-12 h-12 flex items-center justify-center mr-6 pl-3">
              <TriangleAlert className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Pardon Our Dust</h4>
              <p className="text-muted-foreground">
                We&apos;re working on launching a gallery here. Meanwhile please follow the link below to see Hypnocade installations at various events around the country.
              </p>
            </div>
          </div>
          <div className="max-w-3xl">
            <a
              href="https://photos.app.goo.gl/izr3B6fUPzB4nEY7A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-muted rounded-2xl hover:bg-gray-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                <Images className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Hypnocade Installations Gallery</h3>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400 ml-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/**
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-card rounded-2xl overflow-hidden shadow-lg">
                <div className="relative aspect-square">
                  <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">Interactive visual art installation.</p>
                </div>
              </div>
            ))}
          </div>
          */}
        </div>
      </section>

      {/* CTA Section (now using Footer component) */}
      <Footer page="gallery" />
    </div>
  )
}
