import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Monitor, Cpu, Palette, Rotate3D, Waves, Rainbow, AudioWaveform, UsersRound, Network } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MachinesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="machines" />

      {/* Page Header */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Machines</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Each Hypnocade machine offers a unique approach to interactive video synthesis, designed for different
            experiences and environments.
          </p>
        </div>
      </section>

      {/* Hypno Machine */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <Image src="/hypnocade-machine.jpg" alt="Hypno machine" fill priority className="object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Hypno</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The original Hypnocade machine. Built around the legendary Hypno video synthesizer, this interactive
                arcade unit gives players control over a kaleidoscopic video landscape where colors, shapes, and
                interactions are created generatively.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Monitor className="h-6 w-6 text-purple-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visual Control</h4>
                    <p className="text-muted-foreground">
                      Three joysticks and seven buttons control oscillators, feedback, mirroring, and color
                      manipulation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Cpu className="h-6 w-6 text-pink-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Glitch Effects</h4>
                    <p className="text-muted-foreground">
                      Four custom circuit-bent glitch buttons create authentic analog distortions and textures
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Palette className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Dynamic Marquee</h4>
                    <p className="text-muted-foreground">
                      70+ RGB LEDs react to the video output, creating an immersive light show
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-6 mb-8">
                <h4 className="font-semibold text-foreground mb-4">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Dimensions:</span>
                    <div className="font-medium text-foreground">72&quot; × 25&quot; × 36&quot;</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Power:</span>
                    <div className="font-medium text-foreground">120V 15 amp</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Display:</span>
                    <div className="font-medium text-foreground">Sony CRT + HDMI out</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Controls:</span>
                    <div className="font-medium text-foreground">3 joysticks, 11 buttons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enso Machine */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Ens&#x014D;</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Debuting in April 2026. The Enso machine explores rotational motion and flow states using video camera
                feedback. Inspired by the Zen Buddhist concept of the ens&#x014D; circular form, this machine focuses on
                meditative, flowing visual experiences.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Rotate3D className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Circular Motion Controls</h4>
                    <p className="text-muted-foreground">
                      Use joysticks, spinners, and buttons to control camera motion, screen position, and color interactions
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Waves className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Flow-based Visual Generation</h4>
                    <p className="text-muted-foreground">
                      Explore the nuance of video feedback with fine-grained movements, text compositing, and analog glitch textures
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Rainbow className="h-6 w-6 text-neon-yellow mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Meditative Interaction Design</h4>
                    <p className="text-muted-foreground">
                      Use joysticks, spinners, and buttons to control camera motion, screen position, and color interactions
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h4 className="font-semibold text-green-800 mb-2">Arriving April 2026!</h4>
                <p className="text-green-700">
                  Currently in development for debut at the 2026 Midwest Gaming Classic. Contact us for early access
                  information.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/enso-machine.png"
                  alt="Enso machine concept"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Machine */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/future-machine.png"
                  alt="Future machine concept"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Future</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The next evolution in interactive video exploration. Future machines will incorporate emerging
                technologies and new forms of visual expression, pushing the boundaries of what&apos;s possible in
                arcade form-factor interactive video art.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <AudioWaveform className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced synthesis algorithms</span>
                </div>
                <div className="flex items-center">
                  <UsersRound className="h-6 w-6 text-pink-600 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Multi-user interaction</span>
                </div>
                <div className="flex items-center">
                  <Network className="h-6 w-6 text-purple-600 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Network connectivity</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="font-semibold text-blue-800 mb-2">In Development</h4>
                <p className="text-blue-700">
                  Exploring new possibilities in interactive video art. Timeline and features to be announced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (now using Footer component) */}
      <Footer page="machines" />
    </div>
  )
}
