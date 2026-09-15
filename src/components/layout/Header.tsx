import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { Container } from '../ui/Container';
import { Drawer } from '../ui/Drawer';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useDisclosure } from '../../hooks/useDisclosure';
import { cn } from '../../utils/cn';
import logoCompleta from '../../assets/images/Logo-unica-completa.svg';
import logoIcon from '../../assets/images/Logo-Unica3.svg';

export function Header() {
  const scrolled = useScrollPosition(16);
  const { isOpen, open, close } = useDisclosure();

  return (
    <>
      {/* A faixa vermelha rola normalmente com a página — só a barra escura (logo+menu)
          fica fixa. */}
      <TopBar />
      <header className="sticky top-0 z-50">
        <div
          className={cn(
            'bg-secondary text-white transition-shadow duration-300',
            scrolled ? 'shadow-header' : 'shadow-none',
          )}
        >
          <Container
            className={cn(
              'flex items-center justify-between gap-6 px-[20px] sm:px-[20px] md:px-0 lg:px-0 transition-all duration-300',
              scrolled ? 'py-[14px]' : 'py-[24px]',
            )}
          >
            <Link to="/" className="inline-flex shrink-0 items-center" aria-label="Única Promotora">
              {/* < 768px: logo reduzida (120x37, igual ao site). 768–1023px: tamanho nativo (281x87). */}
              <img
                src={logoCompleta}
                alt="Única Promotora"
                width={281}
                height={87}
                className="hidden h-[37px] w-auto sm:block md:h-[87px] lg:hidden"
              />
              <img
                src={logoCompleta}
                alt="Única Promotora"
                width={281}
                height={87}
                className="block h-[37px] w-auto sm:hidden"
              />
              {/* >= 1024px: só o ícone (80x82), igual ao menu desktop do site */}
              <img
                src={logoIcon}
                alt="Única Promotora"
                width={80}
                height={82}
                className="hidden h-[82px] w-auto lg:block"
              />
            </Link>
            <Navbar />

            <button
              type="button"
              onClick={open}
              aria-label="Abrir menu"
              className="flex h-[33px] w-[33px] items-center justify-center rounded-[3px] bg-white text-primary lg:hidden"
            >
              <Menu size={22} />
            </button>
          </Container>
        </div>

        <Drawer isOpen={isOpen} onClose={close}>
          <MobileMenu onNavigate={close} />
        </Drawer>
      </header>
    </>
  );
}
