import type { Banco } from '../types/banco';
import { partnerBanks } from './banks';

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Dados institucionais (SAC, site, descrição) por banco — chaveados pelo mesmo
// `name` usado em `partnerBanks` (data/banks.ts), que é a fonte única dos
// logos. Use `canais` (em vez de `sac`) quando o banco tiver mais de um
// número — a maioria tem (SAC geral, deficiente auditivo/fala, cartão etc.).
// Cobertura ainda parcial: Inbursa, BRB e NBC Bank ficaram só com site
// genérico — não veio SAC verificado pra eles ainda.
const info: Record<string, Omit<Banco, 'id' | 'nome' | 'logo'>> = {
  'BB Mais - Banco do Brasil': {
    site: 'https://www.bb.com.br',
    descricao: 'Consignado e crédito para servidores públicos, aposentados e pensionistas do INSS.',
    canais: [
      { label: 'SAC', valor: '0800 729 0722' },
      { label: 'SAC Deficientes Auditivos e de Fala', valor: '0800 729 0088' },
    ],
    horario:
      'Informações, reclamações, cancelamento de cartão, outros produtos e ouvidoria: 24h, todos os dias.',
  },
  'Itaú Consignado': {
    site: 'https://www.itau.com.br',
    descricao: 'Crédito consignado para aposentados, pensionistas e servidores públicos.',
    canais: [{ label: 'SAC', valor: '0800 724 2101' }],
    horario: 'Atendimento de segunda a sexta, das 8h às 20h.',
  },
  'Banco BMG': {
    site: 'https://www.bmg.com.br',
    descricao: 'Um dos maiores parceiros em consignado do INSS e cartão benefício do Brasil.',
    canais: [
      { label: 'SAC', valor: '0800 889 0200' },
      { label: 'SAC Deficientes Auditivos e de Fala', valor: '0800 979 7333' },
      { label: 'BMG Cartão (telefone fixo)', valor: '0800 770 1790' },
      { label: 'BMG Cartão (celular)', valor: '4002-7007' },
    ],
    horario: 'Atendimento disponível 24h, todos os dias da semana.',
  },
  'Banco Daycoval': {
    site: 'https://www.daycoval.com.br',
    descricao: 'Crédito consignado e financiamento com condições diferenciadas para parceiros.',
    canais: [
      { label: 'SAC', valor: '0800 775 0500' },
      { label: 'SAC Cartão', valor: '0800 880 6158' },
      { label: 'SAC Deficiente Auditivo ou de Fala', valor: '0800 775 2005' },
      { label: 'Central de Atendimento', valor: '0300 111 0500' },
      { label: 'WhatsApp', valor: '(11) 99111-6583' },
    ],
    ouvidoria: '0800 777 0900',
    horario:
      'SAC e Central de Atendimento: dias úteis, 8h às 19h. SAC Cartão: 24h, todos os dias. Ouvidoria: dias úteis, 9h às 18h.',
  },
  'Banco Pan': {
    site: 'https://www.bancopan.com.br',
    descricao: 'Consignado INSS, cartão benefício e crédito pessoal digital.',
    canais: [
      { label: 'SAC', valor: '0800 775 8686' },
      { label: 'SAC Deficientes Auditivos e de Fala', valor: '0800 776 2200' },
      { label: 'SAC Cancelamentos', valor: '0800 776 8000' },
      { label: 'Cartão (capital)', valor: '4003-0101' },
      { label: 'Cartão (demais localidades)', valor: '0800 888 0101' },
    ],
    horario: 'Atendimento disponível 24h, todos os dias da semana.',
  },
  Santander: {
    site: 'https://www.santander.com.br',
    descricao: 'Soluções de crédito consignado e produtos financeiros para servidores e aposentados.',
    canais: [
      { label: 'SAC (capitais e regiões metropolitanas)', valor: '4004 3535' },
      { label: 'SAC (demais localidades)', valor: '0800 702 3535' },
      { label: 'SAC Pessoas com Deficiência Auditiva e de Fala', valor: '0800 723 5007' },
    ],
    horario: 'Seg a Sex, 6h às 22h. Sábado, 8h às 19h. Domingo, 9h às 16h.',
  },
  'Banco Banrisul': {
    site: 'https://www.banrisul.com.br',
    descricao: 'Banco público gaúcho com linhas de consignado para servidores e beneficiários do INSS.',
    canais: [
      { label: 'SAC', valor: '3003 0511' },
      { label: 'SAC (demais localidades)', valor: '0800 646 1515' },
    ],
    horario: 'Atendimento disponível 24h, todos os dias da semana.',
  },
  'Banco Alfa': {
    site: 'https://www.alfanet.com.br',
    descricao: 'Crédito consignado e financeiro com atendimento especializado a correspondentes.',
    canais: [
      { label: 'SAC (capitais e grandes centros)', valor: '3003 9039' },
      { label: 'SAC (demais localidades)', valor: '0800 722 9039' },
    ],
  },
  'Facta Financeira': {
    site: 'https://www.facta.com.br',
    descricao: 'Consignado INSS, FGTS e refinanciamento com processo 100% digital.',
    canais: [
      { label: 'SAC', valor: '0800 942 0462' },
      { label: 'E-mail SAC', valor: 'sac@factafinanceira.com.br' },
      { label: 'Assistência Telemedicina', valor: '(53) 3027-5323' },
    ],
    horario: 'Atendimento das 9h às 16h.',
  },
  'C6 Consig': {
    site: 'https://www.c6bank.com.br',
    descricao: 'Consignado digital do C6 Bank, com portabilidade e refinanciamento facilitados.',
    canais: [
      { label: 'SAC (capitais e regiões metropolitanas)', valor: '3003 6206' },
      { label: 'SAC (demais localidades)', valor: '0800 770 6206' },
    ],
    horario: 'Atendimento disponível 24h, todos os dias da semana.',
  },
  Inbursa: {
    site: 'https://www.bancoinbursa.com.br',
    descricao: 'Crédito consignado com condições especiais para aposentados e pensionistas.',
  },
  BRB: {
    site: 'https://www.brb.com.br',
    descricao: 'Banco de Brasília com linhas de consignado para servidores públicos e beneficiários do INSS.',
  },
  'CBA - Caixa Aqui': {
    descricao: 'Correspondente autorizado para consignado e produtos da rede conveniada.',
    canais: [{ label: 'SAC', valor: '0800 104 0104' }],
  },
  Crefisa: {
    site: 'https://www.crefisa.com.br',
    descricao: 'Crédito pessoal e consignado com atendimento ágil em todo o Brasil.',
    canais: [{ label: 'SAC', valor: '0800 727 4884' }],
  },
  Digio: {
    site: 'https://www.digio.com.br',
    descricao: 'Banco digital com linha de crédito consignado 100% online.',
    canais: [{ label: 'SAC', valor: '0800 704 5533' }],
  },
  'NBC Bank': {
    descricao: 'Parceiro para linhas de consignado e crédito pessoal.',
  },
  Senff: {
    descricao: 'Financeira parceira para consignado e crédito pessoal.',
    canais: [{ label: 'SAC', valor: '0800 595 0595' }],
  },
  'Paraná Banco': {
    site: 'https://www.paranabanco.com.br',
    descricao: 'Consignado para servidores públicos e beneficiários do INSS.',
    canais: [{ label: 'SAC', valor: '0800 645 609' }],
  },
  CDC: {
    descricao: 'Linha de crédito direto ao consumidor via correspondente autorizado.',
    canais: [
      { label: 'SAC', valor: '(31) 2573-0055' },
      { label: 'SAC (0800)', valor: '0800 590 0127' },
      { label: 'WhatsApp', valor: '(31) 3157-038' },
    ],
  },
  'Agora Consig': {
    descricao: 'Consignado para servidores públicos com atendimento via correspondente.',
    canais: [
      { label: 'SAC', valor: '(11) 4210-2496 / 4619-0717 / 4673-0711' },
      { label: 'Central', valor: '4000 2181' },
      { label: 'E-mail SAC', valor: 'sac@capitalconsig.com.br' },
    ],
  },
  'Banco P': {
    descricao: 'Parceiro para produtos de crédito consignado.',
    canais: [
      { label: 'SAC', valor: '0800 930 1000' },
      { label: 'Central', valor: '(11) 3299-2000' },
    ],
  },
  'Quero+': {
    descricao: 'Plataforma parceira para consulta e contratação de crédito consignado.',
    canais: [
      { label: 'SAC', valor: '0800 775 0500' },
      { label: 'SAC Cartões', valor: '0800 880 6158' },
    ],
    horario: 'SAC: Seg a Sex, 8h às 19h, Sáb 8h às 14h. SAC Cartões: 24h.',
  },
};

export const bancos: Banco[] = partnerBanks.map((bank) => ({
  id: slugify(bank.name),
  nome: bank.name,
  logo: bank.logo,
  ...info[bank.name],
}));
