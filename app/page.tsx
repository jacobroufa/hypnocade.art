import Image from "next/image"
import Link from "next/link"
import { Play, Zap, Users, Palette, Monitor } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-neon-yellow to-green-600 bg-clip-text text-transparent">
              Interactive&nbsp;
            </span>
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Video
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Synthesizer
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform any space into an immersive visual playground. Hypnocade machines combine familiar arcade controls with video art tools to create an interactive art experience that responds to your touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/machines"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-gray-800 transition-colors font-medium hover:text-pink-600"
            >
              Explore Machines
              <Monitor className="ml-2 h-5 w-5" />
            </Link>
            {/**
            <button className="inline-flex items-center px-8 py-4 border border-input text-foreground rounded-full hover:border-gray-400 transition-colors font-medium">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
            */}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/hypnocade-hero.jpg"
              alt="Hypnocade machine creating colorful visuals"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Why Hypnocade?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Intuitive Creation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Familiar joysticks and buttons control complex video art tools. No technical knowledge required – just
                play and create.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Crowd Engagement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for festivals and events. HDMI output enables projection for audience participation and visual
                performances.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional Grade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on proven video production technology with custom glitch circuits and programmable LED arrays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Art Meets Technology</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Each Hypnocade machine is a unique fusion of video art and interactive design. Built around professional
                video production tools with custom control interfaces, glitch circuits, and dynamic LED displays.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Kaleidoscopic Visuals</h4>
                    <p className="text-muted-foreground">
                      Generate infinite combinations of colors, shapes, and patterns
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Real-time Control</h4>
                    <p className="text-muted-foreground">Manipulate oscillators, feedback, and effects in real-time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Custom Glitch Effects</h4>
                    <p className="text-muted-foreground">Circuit-bent hardware creates authentic analog distortions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/art-technology.jpg"
                  alt="Hypnocade control panel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Tiers */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Installation Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="text-sm font-semibold text-blue-600 mb-2">BASE TIER</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Hypnocade</h3>
              <p className="text-muted-foreground mb-6">Standalone machine ready to plug in and play</p>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Complete arcade unit</li>
                <li>72&quot; × 25&quot; × 36&quot; footprint</li>
                <li>120V 15 amp power</li>
                <li>HDMI output included</li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <div className="grid grid-cols-2">
                <div className="text-sm font-semibold text-pink-600 mb-2">ADD-ON</div>
                <div className="text-sm font-semibold text-purple-600 mb-2 text-right animate-glow">POPULAR</div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Crowd-sourced Visuals</h3>
              <p className="text-muted-foreground mb-6">Full integration with live performances and VJ sets</p>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Everything in the base package</li>
                <li>Performer coordination</li>
                <li>Placement near front-of-house</li>
                <li>Additional technical support and consultation</li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2">
                <div className="text-sm font-semibold text-pink-600 mb-2">ADD-ON</div>
                <div className="text-sm font-semibold text-green-600 mb-2 text-right animate-glow">NEW FOR 2026</div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Projection</h3>
              <p className="text-muted-foreground mb-6">Includes 150&quot; projection screen for larger audiences</p>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Everything in the base package</li>
                <li>150&quot; projection screen</li>
                <li>Custom lighted art frame</li>
                <li>Independent placement</li>
                <li>Enhanced visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (now using Footer component) */}
      <Footer page="home" />
    </div>
  )
}
