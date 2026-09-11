import { NavLink, useLocation } from 'react-router-dom';
import { mainNav } from '../../data/navigation';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { cn } from '../../utils/cn';

// Quadrado vermelho atrás do texto (::before): escondido em repouso, aparece (cresce)
// quando o item está com o mouse em cima OU quando é a seção em que o usuário está
// agora. "Contato" é exceção: nunca fica marcado como "seção atual", só reage ao hover.
// "isolate" cria um contexto de empilhamento próprio no item — sem isso, o z-index
// negativo do quadrado escapa para o header (que é sticky) e fica escondido atrás
// do fundo escuro da barra, em vez de só atrás do texto.
const baseItemCls =
  'relative isolate px-3 py-2 font-heading text-xl font-normal text-white ' +
  "before:absolute before:inset-0 before:-z-10 before:bg-primary before:transition before:duration-300 before:content-[''] " +
  'hover:before:scale-100 hover:before:opacity-100 focus-visible:before:scale-100 focus-visible:before:opacity-100';
// "resting"/"active" nunca ficam juntas na mesma classList — antes ficavam (scale-75 do
// base competindo com scale-100 do ativo, mesma especificidade), e quem "ganhava" era
// só sorte da ordem do CSS gerado, deixando o Home às vezes pequeno mesmo marcado ativo.
const restingCls = 'before:scale-75 before:opacity-0';
const activeItemCls = 'before:scale-100 before:opacity-100';

// ids em ordem de topo a baixo na Home — usados pelo scroll-spy para saber em
// qual seção o usuário está de fato, em vez de confiar na hash (que só muda
// ao clicar num link, ficando "presa" na última seção clicada ao rolar a página).
const SPY_IDS = ['produtos', 'parceiros', 'blog'];

export function Navbar() {
  const location = useLocation();
  const spyId = useScrollSpy(SPY_IDS);
  const onHome = location.pathname === '/';

  const isItemActive = (href: string) => {
    if (href === '/') return onHome && spyId === null;
    const [, hash] = href.split('#');
    if (hash && SPY_IDS.includes(hash)) return onHome && spyId === hash;
    if (hash) return onHome && spyId === null;
    return location.pathname === href;
  };

  return (
    <nav aria-label="Navegação principal" className="hidden lg:block">
      <ul className="flex items-center gap-2">
        {mainNav.map((item) => {
          // "Contato" nunca fica marcado como ativo (só reage ao hover);
          // "Home" fica sempre marcado (sempre "cheio").
          const active = item.label === 'Home' || (item.label !== 'Contato' && isItemActive(item.href));
          const classes = cn(baseItemCls, active ? activeItemCls : restingCls);

          return (
            <li key={item.label}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noreferrer" className={classes}>
                  {item.label}
                </a>
              ) : (
                <NavLink to={item.href} className={classes} aria-current={active ? 'page' : undefined}>
                  {item.label}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
