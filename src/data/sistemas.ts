import type { SystemBrand, SystemTool } from '../types';

export const systemTools: SystemTool[] = [
  {
    slug: 'astor-tech',
    name: 'Astor Tech',
    description: 'Consulta, higienização e enriquecimento de bases de dados.',
    href: 'https://crm.astortech.com.br/',
  },
  {
    slug: 'astor-chat',
    name: 'Astor Chat',
    description: 'Atendimento e relacionamento via WhatsApp.',
    href: 'https://crm.astortech.com.br/',
  },
  {
    slug: 'astor-multibank',
    name: 'Astor Multibank',
    description: 'Consulta Multibanco para Consignado CLT.',
    href: 'https://crm.astortech.com.br/',
  },
  {
    slug: 'ultra-facil',
    name: 'Ultra Fácil',
    description: 'Consultas, disparos de mensagens e criação de campanhas.',
    href: 'https://ultrafacil.consigbr.com/admin',
  },
  {
    slug: 'unica-mais',
    name: 'Única Mais',
    description: 'Sistema de vantagens para solicitação de bases e escolha de prêmios.',
    href: 'https://unicamais.com/',
  },
];

// As 5 ferramentas pertencem a 3 marcas/plataformas parceiras exibidas no rodapé da seção.
export const systemBrands: SystemBrand[] = [
  { slug: 'astor', name: 'Astor', logo: '/images/systems/astor.png' },
  { slug: 'ultra-facil', name: 'Ultra Fácil' },
  { slug: 'unica-mais', name: 'Única Mais' },
];
