import Link from "next/link";
import type { Metadata } from "next";
import { Pencil } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign In | DrawIt",
  description:
    "Sign in to your DrawIt account and continue creating beautiful diagrams and illustrations.",
};

export default function SignInPage() {
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
            <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-8">{/* <SignInForm /> */}</div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary/80 to-primary/60">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] mix-blend-overlay opacity-20"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="w-full max-w-xl">
            <div className="relative mx-auto h-[400px] w-[400px] md:h-[500px] md:w-[500px]">
              <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="h-6 w-24 rounded bg-white/20"></div>
                <div className="mt-4 h-4 w-48 rounded bg-white/20"></div>
                <div className="mt-2 h-4 w-32 rounded bg-white/20"></div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-md bg-white/10"></div>
                  <div className="h-24 rounded-md bg-white/10"></div>
                  <div className="h-24 rounded-md bg-white/10"></div>
                  <div className="h-24 rounded-md bg-white/10"></div>
                </div>
                <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-primary"></div>
              </div>
              <div className="absolute left-12 top-12 h-full w-full rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="h-6 w-32 rounded bg-white/20"></div>
                <div className="mt-4 h-4 w-40 rounded bg-white/20"></div>
                <div className="mt-2 h-4 w-36 rounded bg-white/20"></div>
                <div className="mt-6 h-40 rounded-md bg-white/10"></div>
                <div className="mt-4 flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/20"></div>
                  <div className="h-8 w-8 rounded-full bg-white/20"></div>
                  <div className="h-8 w-8 rounded-full bg-white/20"></div>
                </div>
                <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-primary"></div>
              </div>
              <div className="absolute left-24 top-24 h-full w-full rounded-lg bg-white/10 p-6 backdrop-blur-sm shadow-lg">
                <div className="h-6 w-28 rounded bg-white/20"></div>
                <div className="mt-4 h-4 w-44 rounded bg-white/20"></div>
                <div className="mt-2 h-4 w-28 rounded bg-white/20"></div>
                <div className="mt-8 space-y-3">
                  <div className="h-4 w-full rounded bg-white/10"></div>
                  <div className="h-4 w-5/6 rounded bg-white/10"></div>
                  <div className="h-4 w-4/6 rounded bg-white/10"></div>
                </div>
                <div className="mt-6 h-32 rounded-md bg-white/10"></div>
                <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
