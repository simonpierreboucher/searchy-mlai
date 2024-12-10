import React from 'react'
import Link from 'next/link'
import { SiDiscord } from 'react-icons/si'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground/50"
        >
          <Link href="https://discord.gg/zRxaseCuGq" target="_blank" rel="noopener noreferrer">
            <SiDiscord size={18} />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
