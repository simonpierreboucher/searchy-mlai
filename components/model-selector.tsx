import Image from 'next/image'
import { createModelId } from '@/lib/utils'

interface ModelSelectorProps {
  selectedModelId: string
  onModelChange: (id: string) => void
}

export function ModelSelector({
  selectedModelId,
  onModelChange
}: ModelSelectorProps) {
  // Définir le modèle par défaut
  const defaultModelId = createModelId({
    provider: 'openai', // Spécifiez le fournisseur ici
    providerId: 'gpt-4o-mini',
    name: 'GPT-4O Mini'
  })

  // Appeler onModelChange avec le modèle par défaut si ce n'est pas encore défini
  if (selectedModelId !== defaultModelId) {
    onModelChange(defaultModelId)
  }

  return (
    <div className="absolute -top-8 left-2">
      <div className="flex items-center space-x-1">
        <Image
          src={`/providers/logos/openai.svg`} // Chemin du logo pour le modèle par défaut
          alt="OpenAI"
          width={18}
          height={18}
          className="bg-white rounded-full border"
        />
        <span className="text-xs font-medium">GPT-4O Mini</span>
      </div>
    </div>
  )
}
