'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8', className)} // Taille augmentée
      {...props}
    >
      <circle cx="128" cy="128" r="128" fill="#1E3A8A" /> {/* Bleu foncé */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFFFFF"
        fontSize="64" // Taille du texte augmentée
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" // Police modifiée
        fontWeight="bold" // Texte en gras
      >
        M-LAI
      </text>
    </svg>
  )
}

export { IconLogo }
