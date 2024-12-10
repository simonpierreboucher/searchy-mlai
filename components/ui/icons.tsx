'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<typeof Image>) {
  return (
    <Image
      src="https://raw.githubusercontent.com/M-Lai-ai/logo/refs/heads/main/favicon.ico"
      alt="Logo"
      className={cn('h-4 w-4', className)}
      width={16}
      height={16}
      {...props}
    />
  )
}

export { IconLogo }
