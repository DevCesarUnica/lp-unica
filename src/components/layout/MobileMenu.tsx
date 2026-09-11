import { NavLink } from 'react-router-dom';
import { ChevronRight, LogIn } from 'lucide-react';
import { mainNav, socialLinks, PARTNER_SYSTEM_URL } from '../../data/navigation';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

interface MobileMenuProps {
  onNavigate: () => void;
}

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  return (
    <div className="flex h-full flex-col">
      <nav aria-label="Navegação mobile" className="flex-1">
        <ul className="flex flex-col divide-y divide-surface-border">
          {mainNav.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onNavigate}
                  className="flex items-center justify-between py-4 font-heading font-semibold text-secondary hover:text-primary"
                >
                  {item.label}
                  <ChevronRight size={18} aria-hidden="true" />
                </a>
              ) : (
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between py-4 font-heading font-semibold text-secondary hover:text-primary',
                      isActive && 'text-primary',
                    )
                  }
                >
                  {item.label}
                  <ChevronRight size={18} aria-hidden="true" />
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-3 border-t border-surface-border pt-6">
        <Button
          variant="outline"
          leftIcon={<LogIn size={18} aria-hidden="true" />}
          onClick={() => {
            window.open(PARTNER_SYSTEM_URL, '_blank', 'noopener');
            onNavigate();
          }}
        >
          Sou Parceiro
        </Button>
        <NavLink to="/#parceirounica" onClick={onNavigate}>
          <Button fullWidth>Quero ser parceiro agora</Button>
        </NavLink>

        <div className="mt-2 flex items-center justify-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-subtle text-secondary hover:bg-primary hover:text-white"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
