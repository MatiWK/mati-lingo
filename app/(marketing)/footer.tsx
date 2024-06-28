import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="hidden lg:block w-full h-20 border-t-2
     border-slate-200 p-2">
      <div className=' max-w-screen-lg
      mx-auto flex items-center justify-evenly h-full'>
        <Button size="lg" variant="ghost" className='w-full'>
          <Image  
          src="/DE.svg"
          alt="Germany"
          height={32}
          width={40}
          className='mr-4 rounded-md'
          />
          German
        </Button>
        <Button size="lg" variant="ghost" className='w-full'>
          <Image  
          src="/ES.svg"
          alt="Spanish"
          height={32}
          width={40}
          className='mr-4 rounded-md'
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className='w-full'>
          <Image  
          src="/GB.svg"
          alt="English"
          height={32}
          width={40}
          className='mr-4 rounded-md'
          />
          English
        </Button>
        <Button size="lg" variant="ghost" className='w-full'>
          <Image  
          src="/HR.svg"
          alt="Croatian"
          height={32}
          width={40}
          className='mr-4 rounded-md'
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className='w-full'>
          <Image  
          src="/IT.svg"
          alt="Italian"
          height={32}
          width={40}
          className='mr-4 rounded-md'
          />
          
          Italian
        </Button>
      </div>
    </footer>
  )
}

export default Footer
