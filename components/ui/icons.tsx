'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'img'>) {
  return (
    <img
      src="https://raw.githubusercontent.com/M-Lai-ai/logo/refs/heads/main/favicon.ico"
      alt="Logo"
      className={cn('h-4 w-4', className)}
      {...props}
    />
  )
}

export { IconLogo }
