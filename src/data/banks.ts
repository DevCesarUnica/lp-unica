import type { PartnerBank } from '../types';

// Caminhos de string direto pra /public (não import ESM) — Astro trata import de
// imagem como objeto ({src, width, height}), não string, o que quebrava o <img src>.
// Mesmo padrão já usado nos outros componentes do piloto (Header, Footer etc.).
export const partnerBanks: PartnerBank[] = [
  { name: 'BB Mais - Banco do Brasil', logo: '/images/banks/bb-mais.png' },
  { name: 'Itaú Consignado', logo: '/images/banks/itau-1.png' },
  { name: 'Banco BMG', logo: '/images/banks/bmg.png' },
  { name: 'Banco Daycoval', logo: '/images/banks/daycoval.png' },
  { name: 'Banco Pan', logo: '/images/banks/banco-pan.png' },
  { name: 'Santander', logo: '/images/banks/santander-1.png' },
  { name: 'Banco Banrisul', logo: '/images/banks/banrisul-1.png' },
  { name: 'Banco Alfa', logo: '/images/banks/alfa.png' },
  { name: 'Facta Financeira', logo: '/images/banks/facta.png' },
  { name: 'C6 Consig', logo: '/images/banks/c6-consig.png' },
  { name: 'Inbursa', logo: '/images/banks/inbursa_unica.png' },
  { name: 'BRB', logo: '/images/banks/BRB-1.png' },
  { name: 'CBA - Caixa Aqui', logo: '/images/banks/CBA-1.png' },
  { name: 'Crefisa', logo: '/images/banks/crefisa-1.png' },
  { name: 'Digio', logo: '/images/banks/digio.png' },
  { name: 'NBC Bank', logo: '/images/banks/nbc.png' },
  { name: 'Senff', logo: '/images/banks/senff.png' },
  { name: 'Paraná Banco', logo: '/images/banks/parana.png' },
  { name: 'CDC', logo: '/images/banks/CDC.png' },
  { name: 'Agora Consig', logo: '/images/banks/agora-consig.svg' },
  { name: 'Banco P', logo: '/images/banks/logo-banner-banco-p.png' },
  { name: 'Quero+', logo: '/images/banks/QUERO-MAIS_.png' },
];
