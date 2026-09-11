import { useEffect, useState } from 'react';

/**
 * Retorna o id da última seção, entre `ids` (em ordem de topo a baixo na página),
 * cujo topo já passou do `offset`. `null` enquanto nenhuma foi alcançada ainda
 * (ex.: usuário ainda no topo/Hero). Baseado em scroll real, não na URL — a
 * hash só muda quando o usuário clica num link, não quando ele rola a página.
 */
export function useScrollSpy(ids: string[], offset = 140): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ids, offset]);

  return activeId;
}
