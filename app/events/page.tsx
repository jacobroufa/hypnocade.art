import Link from "next/link"
import { ArrowLeft, ExternalLink, Images } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="events" />

      {/* Page Header */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-foreground mb-6">Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Details about upcoming installations and how to bring Hypnocade to your event.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Upcoming</h2>{" "}
          {/* Changed text-gray-900 */}
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              {" "}
              {/* Uses custom blue-50 and blue-200 */}
              <h4 className="font-semibold text-blue-800 mb-2">AV Brain Melt</h4>{" "}
              {/* Uses custom blue-800 */}
              <p className="text-blue-700 text-sm mb-3">March 28, 2026 • Chicago, IL</p> {/* Uses custom blue-700 */}
              <p className="text-blue-600">Hypnocade will be featured at Hydrosonic Light Show&apos;s 5 year anniversary event at Ramova Loft.</p>{" "}
              {/* Uses custom blue-600 */}
            </div>
            {/* Changed text-gray-900 */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              {" "}
              {/* Uses custom blue-50 and blue-200 */}
              <h4 className="font-semibold text-blue-800 mb-2">Midwest Gaming Classic 2026</h4>{" "}
              {/* Uses custom blue-800 */}
              <p className="text-blue-700 text-sm mb-3">April 24-26 2026 • Milwaukee, WI</p> {/* Uses custom blue-700 */}
              <p className="text-blue-600">See Hypnocade in person in the Chroma Club room at the premier US retro gaming convention.</p>{" "}
              {/* Uses custom blue-600 */}
            </div>
          </div>
        </div>
      </section>

      <span id="pitch">&nbsp;</span>
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Pitch Deck</h2>{" "}
          <div className="grid grid-cols-1 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Concept & Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                I created Hypnocade as a way to involve and engage people with the video art medium and allow them to 
                explore a never-ending novel landscape. My journey as an artist has been one of inspiration and delight, 
                and when I discovered how to incorporate my trained engineering skillset into my art I knew I was meant 
                to share the love of creation with others. It brought me incredible joy to learn this medium and I want 
                nothing more than to give others that same feeling. So far it has proven this concept in every way I 
                hoped.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">The Machine</h3>
              <p className="text-muted-foreground mb-2 leading-relaxed">
                Hypnocade is an interactive visual arts arcade machine that lets players create kaleidoscoping colorful 
                visuals with a simple and intuitive set of classic arcade controls. Colors, shapes, and interactions are 
                all created generatively by a player. The resulting visuals can be moved, spun about, mirrored, and 
                otherwise manipulated in a wide variety of ways. I&apos;ve shown this at a wide array of events, from very small
                events (1-200 people) to large gaming conventions (40,000 attendees) as well as festivals across the country.
                In 2025 I took it to Sound Haven and Fire Lights festivals (2-4,000 attendees) and received feedback from
                festival-goers ranging from &quot;what even IS this thing?&quot; to &quot;my friend just spent the last three hours playing
                your arcade&quot; to &quot;the best festival side quest I&apos;ve ever seen&quot;.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Fire Lights I had the installation set up near one of the stages and ran the signal into FOH for VJs to 
                mix in crowd-interactive visuals with their sets as desired. I would love to do this again, with alternatives 
                of a stand-alone installation (base package, no external display) or have a lighted art-framed projection 
                screen decorated similarly to what is created on the machine to provide an extra layer of entertainment for 
                passers-by as well as those interacting with the arcade.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Previous Installations</h3>
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
                    <h3 className="font-semibold text-foreground">Hypnocade Media Gallery</h3>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 ml-auto" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Installation Options</h3>
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
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Technical Details</h3>
              <p className="text-muted-foreground mb-2 leading-relaxed">
                If you want an even deeper dive I&apos;m more than happy to accomodate so please let me know! Here&apos;s a short
                run-down with some specifics:
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed px-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>The installation is built in a vintage arcade machine&mdash;housed in a friendly, 
                  approachable form factor&mdash;with visual-reactive LED marquee</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Brightly painted with UV reactive paint, I will have it installed with overhead UV lights to make it glow</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Installation sits on a wood palette with a small canopy overhead for weather protection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Power requirement: a single 120V 15 amp outlet</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Space requirement: 6&apos; square, 8&apos; high (with canopy), and requires a level surface</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Notes & Other Requirements</h3>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>If a wood palette can be provided on-site it would be appreciated, but not necessary.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>
                    FOH involvement / additional VJ signal will require placement close to the booth at whatever stage it is 
                    installed. I will provide a cable run to the booth and help coordinate video input for visual artists. Additional 
                    communication with the visual team is required for this add-on.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>
                    The projection screen with custom art frame is roughly 12&apos; wide and 9&apos; tall (150&quot; diagonal viewing area) and
                    will require a setback of 5-6&apos;. I would recommend this to be installed along a forest path near the machine.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>
                    The installation can accommodate both a projector output as well as crowd-sourced visuals to augment VJ 
                    performance. During budget discussions we can talk about base pricing and add-ons for each level to see what 
                    setup works best for your event.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (now using Footer component) */}
      <Footer page="events" />
    </div>
  )
}
