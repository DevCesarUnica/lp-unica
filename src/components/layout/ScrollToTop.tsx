import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * - Sem hash: volta ao topo a cada mudança de rota — exceto na Home, que deve abrir
 *   já no formulário (`#lead-form`), sem mostrar a faixa vermelha do topo.
 * - Com hash: espera a seção alvo existir (páginas são lazy), rola até ela
 *   descontando a altura do header fixo, e reajusta enquanto o layout muda
 *   (imagens, carrosséis e a fonte web que só troca depois).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash && pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }

    const id = hash ? decodeURIComponent(hash.replace('#', '')) : 'lead-form';
    let cancelled = false;
    let ro: ResizeObserver | null = null;
    let settleTimer = 0;
    const waitDeadline = Date.now() + 8000;

    const alignTo = (el: HTMLElement) => {
      // respeita o `scroll-margin-top` (scroll-mt-*) das seções, sob o header fixo
      el.scrollIntoView({ block: 'start', behavior: 'instant' as ScrollBehavior });
    };

    const realign = () => {
      const el = document.getElementById(id);
      if (el && !cancelled) alignTo(el);
    };

    const stop = () => {
      if (cancelled) return;
      cancelled = true;
      realign();
      ro?.disconnect();
      window.clearTimeout(settleTimer);
      window.removeEventListener('load', realign);
    };

    const scheduleStop = () => {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(stop, 400);
    };

    const startTracking = (el: HTMLElement) => {
      alignTo(el);
      ro = new ResizeObserver(() => {
        realign();
        scheduleStop();
      });
      ro.observe(document.documentElement);
      window.addEventListener('load', realign);
      // a fonte web reflui o texto depois de baixar
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          realign();
          scheduleStop();
        });
      }
      scheduleStop();
    };

    const waitForTarget = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) return startTracking(el);
      if (Date.now() > waitDeadline) {
        cancelled = true;
        return;
      }
      window.requestAnimationFrame(waitForTarget);
    };

    waitForTarget();

    return () => {
      cancelled = true;
      ro?.disconnect();
      window.clearTimeout(settleTimer);
      window.removeEventListener('load', realign);
    };
  }, [pathname, hash]);

  return null;
}
