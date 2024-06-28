import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Loader } from "lucide-react"
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className=' h-20 w-full border-b-2 border-slate-200 px-4 '>
      <div className='lg:max-w-screen-lg h-full mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-x-3 pl-4 pt-8 pb-7 '>
          <Image width={40} height={40} src="/mascot.png" alt="mascot"/>
          <h1 className='text-2xl font-extrabold tracking-wide text-green-500'>Lingo</h1>
        </div>
        <ClerkLoading>
          <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton 
            afterSignOutUrl="/"
            />
          </SignedIn>
          <SignedOut>
            <SignInButton
            mode='modal'
            fallbackRedirectUrl="/learn"
            signUpFallbackRedirectUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  )
}

export default Header
