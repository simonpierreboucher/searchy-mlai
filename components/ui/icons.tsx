'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8', className)} // Taille augmentée pour meilleure lisibilité
      {...props}
    >
      {/* Cercle de fond */}
      <circle cx="128" cy="128" r="128" fill="#000000" /> {/* Noir de fond */}

      {/* Texte "M-LAI" centré */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFFFFF" // Couleur du texte en blanc
        fontSize="64" // Taille du texte ajustée
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" // Police de caractères
        fontWeight="bold" // Texte en gras pour meilleure visibilité
      >
        M-LAI
      </text>
    </svg>
  )
}

export { IconLogo }
