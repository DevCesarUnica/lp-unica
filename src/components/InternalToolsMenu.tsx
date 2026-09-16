import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu } from 'lucide-react';
import { Drawer } from './Drawer';
import { useDisclosure } from '../hooks/useDisclosure';
import { internalToolCategories } from '../data/internalTools';
import { cn } from '../utils/cn';

// Botão hambúrguer no header, ao lado do "Contato" — abre um menu lateral próprio
// (mesmo Drawer do menu mobile, mas liberado pra qualquer largura de tela) com as
// categorias de ferramentas internas em formato acordeão.
export function InternalToolsMenu() {
  const { isOpen, open, close } = useDisclosure();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Abrir ferramentas internas"
        className="hidden h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[3px] text-white transition-colors duration-200 hover:bg-white/10 lg:flex"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      <Drawer isOpen={isOpen} onClose={close} desktopHidden={false}>
        <p className="mb-4 text-xs font-heading font-bold uppercase tracking-[0.15em] text-secondary-300">
          MENU
        </p>

        <div className="flex flex-col gap-2">
          {internalToolCategories.map((category) => {
            const isExpanded = expanded === category.label;

            return (
              <div key={category.label}>
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? null : category.label)}
                  aria-expanded={isExpanded}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left font-heading text-base font-bold text-secondary transition-colors duration-200 hover:bg-surface-subtle"
                >
                  {category.label}
                  <ChevronDown
                    size={18}
                    className={cn('shrink-0 text-secondary-300 transition-transform duration-200', isExpanded && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>

                {isExpanded && (
                  <div className="flex flex-col gap-2 py-2 pl-3">
                    {category.tools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={close}
                        className="group flex items-center gap-3 rounded-md border border-surface-border px-3 py-2.5 transition-colors duration-200 hover:border-primary hover:bg-primary/5"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                          <tool.icon size={18} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-heading text-sm font-bold text-secondary transition-colors duration-200 group-hover:text-primary">
                            {tool.name}
                          </span>
                          <span className="block truncate text-xs text-secondary-300">{tool.description}</span>
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-secondary-300 transition-colors duration-200 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}
