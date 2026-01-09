import Link from "next/link"
import { ArrowRight } from "lucide-react"

type PageName = 'home' | 'machines' | 'gallery' | 'events';
type PageCTAs = {
  [K in PageName]: Array<{
    title: string;
    description: string;
  }>
}
type PageLinkText = {
  [K in PageName]: string;
}

interface FooterProps {
  page: PageName;
}

const pageCTAs: PageCTAs = {
  home: [
    {
      title: "Ready to Bring Hypnocade to Your Event?",
      description: "Let's talk about how this interactive video art machine can elevate your audience experience."
    },
    {
      title: "Looking for a Participatory Visual Experience?",
      description: "Contact us to explore how Hypnocade fits into live music and arts events."
    },
    {
      title: "Want Your Audience to Step Inside the Art?",
      description: "Reach out to discuss a Hypnocade installation for your venue or festival."
    }
  ],
  machines: [
    {
      title: "Which Hypnocade Machine Is Right for You?",
      description: "Tell us about your space and event goals, and we'll help you choose the right setup."
    },
    {
      title: "Not Sure Which Configuration Fits Your Event?",
      description: "Let's discuss machine options and installation requirements."
    },
    {
      title: "Curious How the Machine Works in Practice?",
      description: "Contact us to talk through technical details and deployment scenarios."
    }
  ],
  gallery: [
    {
      title: "Want to See Hypnocade in Your Space?",
      description: "Let's talk about adapting the installation to your event or venue."
    },
    {
      title: "Wondering What This Could Look Like Live?",
      description: "Reach out to discuss past installations and custom visual possibilities."
    },
    {
      title: "Thinking Beyond the Examples Shown Here?",
      description: "Contact us to explore custom visuals and interaction styles."
    }
  ],
  events: [
    {
      title: "Planning an Event That Invites Participation?",
      description: "Let's discuss how Hypnocade can engage audiences before, between, or beyond performances."
    },
    {
      title: "Looking for an Interactive Visual Feature?",
      description: "Contact us to see how Hypnocade integrates into live events and festivals."
    },
    {
      title: "Want an Installation That Draws a Crowd?",
      description: "Reach out to explore Hypnocade for your upcoming event."
    }
  ]
};

const ctaLinkText: PageLinkText = {
  home: "Let's Talk",
  machines: "Find the Right Setup",
  gallery: "See It Live",
  events: "Discuss Your Event"
};

/**
 * Picks a random PageCTA from the appropriate section given a PageName
 */
function getRandomCTA(pageName: PageName) {
  const ctas = pageCTAs[pageName];
  const randomIndex = Math.floor(Math.random() * ctas.length);
  return ctas[randomIndex];
}

export function Footer({ page }: FooterProps) {
  const cta = getRandomCTA(page);

  return (
    <footer className="py-20 px-6 bg-muted text-foreground">
      {" "}
      {/* Changed bg-primary to bg-muted, text-primary-foreground to text-foreground */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{cta.title}</h2>
        <p className="text-xl text-muted-foreground mb-12">{cta.description}</p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-primary-foreground text-primary rounded-full hover:bg-gray-100 transition-colors font-medium text-lg"
        >
          {ctaLinkText[page]}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </footer>
  )
}
