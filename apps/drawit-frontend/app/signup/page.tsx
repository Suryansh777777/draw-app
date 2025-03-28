import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Pencil } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign Up | DrawIt",
  description:
    "Create your DrawIt account and start creating beautiful diagrams and illustrations.",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-[600px] xl:px-12">
        <div className="mx-auto w-full max-w-sm lg:w-[400px]">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Pencil className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">DrawIt</span>
            </Link>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">{/* <SignUpForm /> */}</div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary/90 to-primary/70">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] mix-blend-overlay opacity-20"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          <div className="w-full max-w-xl">
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Start creating beautiful diagrams today
            </h3>
            <p className="mt-4 text-lg text-white/90">
              Join thousands of designers, product managers, and developers who
              use DrawIt to bring their ideas to life.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h4 className="font-semibold text-white">
                  Intuitive Interface
                </h4>
                <p className="mt-1 text-sm text-white/80">
                  Our clean, distraction-free interface puts the focus on your
                  creativity.
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h4 className="font-semibold text-white">
                  Real-time Collaboration
                </h4>
                <p className="mt-1 text-sm text-white/80">
                  Work together with your team in real-time, no matter where
                  they are.
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h4 className="font-semibold text-white">Smart Templates</h4>
                <p className="mt-1 text-sm text-white/80">
                  Get started quickly with professionally designed templates.
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <h4 className="font-semibold text-white">Export Anywhere</h4>
                <p className="mt-1 text-sm text-white/80">
                  Export your work in multiple formats compatible with all major
                  platforms.
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="User Avatar"
                width={48}
                height={48}
                className="rounded-full border-2 border-white/50"
              />
              <div>
                <p className="text-white/90 italic">
                  &quot;DrawIt has completely changed how I create diagrams for
                  my presentations. Its intuitive and powerful.&quot;
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Sarah Johnson, Product Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
