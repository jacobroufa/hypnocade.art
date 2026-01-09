import Link from "next/link"
import { ArrowLeft, Mail, Instagram, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="contact" />
      {/* Page Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            {" "}
            {/* Changed text-gray-600 and hover:text-gray-900 */}
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Get in Touch</h1> {/* Changed text-gray-900 */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {" "}
              {/* Changed text-gray-600 */}
              Ready to bring interactive video art to your event? Let&apos;s discuss installation options, pricing, and
              availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Links */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>{" "}
                {/* Changed text-gray-900 */}
                <div className="space-y-6">
                  <a
                    href="mailto:info@hypnocade.art"
                    className="flex items-center p-6 bg-muted rounded-2xl hover:bg-gray-100 transition-colors group" // Changed bg-gray-50 to bg-muted
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                      {" "}
                      {/* Uses custom blue-100 and blue-200 */}
                      <Mail className="h-6 w-6 text-blue-600" /> {/* Uses custom blue-600 */}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3> {/* Changed text-gray-900 */}
                      <p className="text-muted-foreground">info@hypnocade.art</p> {/* Changed text-gray-600 */}
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 ml-auto" />
                  </a>

                  <a
                    href="https://www.instagram.com/hypnocade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-6 bg-muted rounded-2xl hover:bg-gray-100 transition-colors group" // Changed bg-gray-50 to bg-muted
                  >
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-pink-200 transition-colors">
                      {" "}
                      {/* Uses custom pink-100 */}
                      <Instagram className="h-6 w-6 text-pink-600" /> {/* Uses custom pink-600 */}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Instagram</h3> {/* Changed text-gray-900 */}
                      <p className="text-muted-foreground">See Hypnocade in action</p> {/* Changed text-gray-600 */}
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 ml-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What to Include</h2>{" "}
                {/* Changed text-gray-900 */}
                <div className="bg-muted rounded-2xl p-6">
                  {" "}
                  {/* Changed bg-gray-50 to bg-muted */}
                  <p className="text-muted-foreground mb-4">When reaching out, please include:</p>{" "}
                  {/* Changed text-gray-600 */}
                  <ul className="space-y-3 text-muted-foreground">
                    {" "}
                    {/* Changed text-gray-600 */}
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Event type and dates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Venue location and size</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Preferred installation packages</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Expected audience size</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Budget considerations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>{" "}
            {/* Changed text-gray-900 */}
            <div className="space-y-6">
              <div className="bg-muted rounded-2xl p-6">
                {" "}
                {/* Changed bg-gray-50 to bg-muted */}
                <h3 className="font-semibold text-foreground mb-2">What power requirements do the machines have?</h3>{" "}
                {/* Changed text-gray-900 */}
                <p className="text-muted-foreground">
                  Each machine requires one 120V 20 amp circuit and a level surface.
                </p>{" "}
                {/* Changed text-gray-600 */}
              </div>
              <div className="bg-muted rounded-2xl p-6">
                {" "}
                {/* Changed bg-gray-50 to bg-muted */}
                <h3 className="font-semibold text-foreground mb-2">How far in advance should I book?</h3>{" "}
                {/* Changed text-gray-900 */}
                <p className="text-muted-foreground">
                  {" "}
                  {/* Changed text-gray-600 */}
                  We recommend booking at least 2-3 months in advance, especially for festival season (spring/summer).
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-6">
                {" "}
                {/* Changed bg-gray-50 to bg-muted */}
                <h3 className="font-semibold text-foreground mb-2">Do you provide setup and technical support?</h3>{" "}
                {/* Changed text-gray-900 */}
                <p className="text-muted-foreground">
                  {" "}
                  {/* Changed text-gray-600 */}
                  Yes, all installations include setup, testing, and on-site technical support as needed.
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-6">
                {" "}
                {/* Changed bg-gray-50 to bg-muted */}
                <h3 className="font-semibold text-foreground mb-2">Do you have a pitch deck with details for event installations?</h3>{" "}
                {/* Changed text-gray-900 */}
                <p className="text-muted-foreground">
                  {" "}
                  {/* Changed text-gray-600 */}
                  Yes, please find our standard pitch deck {" "}
                  <Link href="/events#pitch" className="text-muted-foreground hover:text-foreground transition-colors">
                    on our Events page
                  </Link>
                  , and contact us with any other questions you might have!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
