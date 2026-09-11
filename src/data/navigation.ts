import type { NavItem, SocialLink } from '../types';
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from '../components/ui/SocialIcons';

export const TRABALHE_CONOSCO_URL = 'https://forms.gle/nk5JjHSgHQUt8e8CA';
export const DADOS_TITULARIDADE_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSccO1zGQdZh2gYiKB78XxJCeg4WXSeZs--Ijfo3O7kax5v3Kg/viewform';
export const PARTNER_SYSTEM_URL = 'https://sistema.unicapromotora.com.br/';

export const POLICY_URLS = {
  compliance:
    'https://unicapromotora.com.br/wp-content/uploads/2026/03/codigo-de-conduta-2026-oficial-4.pdf',
  privacidade:
    'https://unicapromotora.com.br/wp-content/uploads/2026/04/POLITICA-DE-PRIVACIDADE-DE-DADOS_UNICA-PROMORORA_V4.R4.pdf',
  cookies:
    'https://unicapromotora.com.br/wp-content/uploads/2026/04/POLITICA-DE-COOKIES_UNICAPROMOTORA_V1.R4.pdf',
  incidentes:
    'https://unicapromotora.com.br/wp-content/uploads/2026/04/POLITICA-GESTAO-INCID_UNICA-PROMOTORA_V2.R4.pdf',
} as const;

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Produtos', href: '/#produtos' },
  { label: 'Bancos Parceiros', href: '/#parceiros' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Trabalhe Conosco', href: TRABALHE_CONOSCO_URL, external: true },
  { label: 'Contato', href: '/#parceirounica' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://facebook.com/unicapromotora/', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com/unicapromotora/', icon: InstagramIcon },
  { label: 'Google', href: 'https://g.page/unicapromotora/', icon: GoogleIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/unicapromotora/', icon: LinkedinIcon },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=553121165020&text&type=phone_number&app_absent=0',
    icon: WhatsappIcon,
  },
];
