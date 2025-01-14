import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className=" max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">

      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image alt="hello_image" fill src="/spritesheet_double.png" />
      </div>
      <div className=" flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl text-center font-bold max-w-[480px]">
          Learn, practice, and master new languages with Lingo.
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
        <SignedOut>
            <SignUpButton
            mode='modal'
            fallbackRedirectUrl="/learn"
            signInFallbackRedirectUrl="/learn"
            >
              <Button className="w-full" size="lg" variant="secondary">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton
            mode='modal'
            fallbackRedirectUrl="/learn"
            signUpFallbackRedirectUrl="/learn"
            >
              <Button className="w-full" size="lg" variant="primaryOutline">
                I already have an account
              </Button>
            </SignInButton>
            
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">
                Continue Learning
              </Link>
            </Button>
          </SignedIn>
          </ClerkLoaded>
      </div>
      </div>
      
  </div>
  )
}
