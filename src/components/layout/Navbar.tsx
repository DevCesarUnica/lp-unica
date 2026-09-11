import { NavLink } from 'react-router-dom';
import { mainNav } from '../../data/navigation';

// elementor-element-5785442/d3fd9c3 .elementor-nav-menu .elementor-item: Exo Soft 20px/400,
// sem estado "ativo" destacado no site original — todos os itens ficam iguais, só muda no hover.
const itemCls = 'px-3 py-2 font-heading text-xl font-normal text-white/90 transition-colors hover:text-primary';

export function Navbar() {
  return (
    <nav aria-label="Navegação principal" className="hidden lg:block">
      <ul className="flex items-center gap-2">
        {mainNav.map((item) => {
          const isHome = item.href === '/';

          return (
            <li key={item.label}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noreferrer" className={itemCls}>
                  {item.label}
                </a>
              ) : (
                <NavLink to={item.href} end={isHome} className={itemCls}>
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
