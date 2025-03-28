import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Pencil,
  Layers,
  Share,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DrawingAnimation from "@/components/home/drawing-animation";
import FeatureCard from "@/components/home/feature-card";
import PricingCard from "@/components/home/pricing-card";
import TestimonialCard from "@/components/home/testimonial-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="sticky px-10 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Pencil className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DrawIt</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Log in
            </Link>
            <Button>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Bring Your Ideas to Life with{" "}
                    <span className="text-primary">DrawIt</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The intuitive drawing app that makes creating beautiful
                    diagrams, sketches, and illustrations effortless.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="h-12">
                    Start Drawing Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-12">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Free Plan</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />
                    <span>No Credit Card</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Cancel Anytime</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">
                  <DrawingAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted/50 py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to create stunning visuals in one intuitive
                platform
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Pencil className="h-10 w-10 text-primary" />}
                title="Intuitive Drawing Tools"
                description="Sketch, draw, and annotate with our easy-to-use tools designed for both beginners and professionals."
              />
              <FeatureCard
                icon={<Layers className="h-10 w-10 text-primary" />}
                title="Smart Layers"
                description="Organize your work with intelligent layers that make complex illustrations manageable."
              />
              <FeatureCard
                icon={<Share className="h-10 w-10 text-primary" />}
                title="One-Click Sharing"
                description="Share your creations instantly with teammates, clients, or the world."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Real-time Collaboration"
                description="Work together with your team in real-time, no matter where they are located."
              />
              <FeatureCard
                icon={<Sparkles className="h-10 w-10 text-primary" />}
                title="AI-Powered Enhancements"
                description="Let our AI help perfect your drawings and suggest improvements automatically."
              />
              <FeatureCard
                icon={<ArrowRight className="h-10 w-10 text-primary" />}
                title="Export Anywhere"
                description="Export your work in multiple formats compatible with all major platforms."
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex items-center justify-center lg:order-last">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="DrawIt Interface"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Designed for{" "}
                    <span className="text-primary">Creativity</span>
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our clean, distraction-free interface puts the focus on your
                    creativity, not learning complicated tools.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 text-primary shrink-0" />
                    <p>Customizable workspace that adapts to your workflow</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 text-primary shrink-0" />
                    <p>
                      Dark and light themes to reduce eye strain during long
                      sessions
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 text-primary shrink-0" />
                    <p>Gesture support for touch devices and drawing tablets</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 text-primary shrink-0" />
                    <p>Infinite canvas that grows with your ideas</p>
                  </li>
                </ul>
                <div>
                  <Button size="lg" className="mt-4">
                    Explore Interface
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-muted/50 py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple Pricing
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works best for you or your team
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <PricingCard
                title="Free"
                price="$0"
                description="Perfect for hobbyists and occasional users"
                features={[
                  "Basic drawing tools",
                  "5 projects",
                  "Export as PNG",
                  "Community support",
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Pro"
                price="$12"
                period="per month"
                description="For individual professionals and creators"
                features={[
                  "All Free features",
                  "Unlimited projects",
                  "Export in all formats",
                  "Advanced tools",
                  "Priority support",
                ]}
                buttonText="Start Free Trial"
                buttonVariant="default"
                popular={true}
              />
              <PricingCard
                title="Team"
                price="$49"
                period="per month"
                description="For teams and organizations"
                features={[
                  "All Pro features",
                  "Team collaboration",
                  "Admin controls",
                  "API access",
                  "Dedicated support",
                  "Custom branding",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of satisfied users who have transformed their
                creative process
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="DrawIt has completely changed how I create diagrams for my presentations. It's intuitive and powerful."
                author="Sarah Johnson"
                role="Product Designer"
                avatarSrc="/placeholder.svg?height=40&width=40"
              />
              <TestimonialCard
                quote="The collaboration features are game-changing. My team can work together seamlessly no matter where we are."
                author="Michael Chen"
                role="UX Director"
                avatarSrc="/placeholder.svg?height=40&width=40"
              />
              <TestimonialCard
                quote="I've tried many drawing apps, but DrawIt strikes the perfect balance between simplicity and power."
                author="Emma Rodriguez"
                role="Freelance Illustrator"
                avatarSrc="/placeholder.svg?height=40&width=40"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-muted/50 py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about DrawIt
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">
                  Is there a free trial for the Pro plan?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we offer a 14-day free trial for our Pro plan with no
                  credit card required. You can upgrade or cancel anytime.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">
                  Can I use DrawIt offline?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, our desktop application allows you to work offline and
                  automatically syncs your changes when you reconnect.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">
                  How does team collaboration work?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  With our Team plan, multiple users can edit the same document
                  simultaneously. Changes appear in real-time with user
                  attribution.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">
                  What file formats can I export to?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Free users can export to PNG. Pro and Team users can export to
                  SVG, PDF, JPG, and more specialized formats.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="rounded-lg bg-primary p-8 md:p-12 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                  Ready to Start Creating?
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/90 md:text-xl">
                  Join thousands of creators, designers, and teams who use
                  DrawIt every day to bring their ideas to life.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" variant="secondary" className="h-12">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Schedule a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Pencil className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">DrawIt</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                The intuitive drawing app for creators, designers, and teams.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} DrawIt. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
