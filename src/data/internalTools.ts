import { Palette } from 'lucide-react';
import type { InternalToolCategory } from '../types';

// URL definitiva do Única Design ainda pendente — trocar o "#" quando a equipe
// interna informar o endereço real do sistema.
export const internalToolCategories: InternalToolCategory[] = [
  {
    label: 'Ferramentas internas',
    tools: [
      {
        name: 'Única Design',
        description: 'Sistema interno de design da equipe Única',
        href: '#',
        icon: Palette,
      },
    ],
  },
];
