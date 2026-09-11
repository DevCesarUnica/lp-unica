import {
  Banknote,
  Building2,
  CreditCard,
  Landmark,
  PiggyBank,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import type { Product } from '../types';

export const products: Product[] = [
  {
    slug: 'consignado',
    title: 'Consignado.',
    description:
      'O produto de Crédito Consignado é uma solução financeira que atende diversas necessidades.',
    longDescription:
      'O crédito consignado é descontado diretamente na folha de pagamento ou benefício, garantindo taxas de juros reduzidas e aprovação facilitada para aposentados, pensionistas, servidores públicos e trabalhadores CLT.',
    icon: Landmark,
    color: 'primary',
    highlights: ['Taxas reduzidas', 'Desconto em folha', 'Aprovação facilitada', 'Parcelas fixas'],
  },
  {
    slug: 'credito',
    title: 'Crédito.',
    description: 'Soluções versáteis para atender às necessidades financeiras dos clientes.',
    longDescription:
      'Linhas de crédito flexíveis, pensadas para quem precisa de dinheiro rápido para realizar projetos, quitar dívidas ou lidar com imprevistos, com condições personalizadas para cada perfil.',
    icon: Wallet,
    color: 'primary',
    highlights: ['Liberação rápida', 'Sem burocracia', 'Condições personalizadas', 'Atendimento humanizado'],
  },
  {
    slug: 'fgts',
    title: 'FGTS.',
    description:
      'Na Única você pode aproveitar ao máximo os benefícios do FGTS, tornando-o uma ferramenta valiosa para atender às necessidades de crédito dos clientes.',
    longDescription:
      'Antecipe as parcelas do seu saque-aniversário do FGTS de forma simples, segura e 100% digital, transformando um benefício futuro em dinheiro disponível agora.',
    icon: PiggyBank,
    color: 'primary',
    highlights: ['100% digital', 'Sem consulta ao SPC/Serasa', 'Dinheiro na conta rápido', 'Simulação gratuita'],
  },
  {
    slug: 'abertura-de-conta',
    title: 'Abertura de Conta',
    description:
      'Na Única você pode aproveitar ao máximo os benefícios do FGTS, tornando-o uma ferramenta valiosa para atender às necessidades de crédito dos clientes.',
    longDescription:
      'Auxiliamos na abertura de contas digitais e correntes junto aos principais bancos parceiros, com atendimento gratuito do início ao fim do processo.',
    icon: Building2,
    color: 'primary',
    highlights: ['Conta gratuita', 'Processo 100% assistido', 'Cartão internacional', 'Sem tarifa de manutenção'],
  },
  {
    slug: 'seguro-prestamista',
    title: 'Seguro Prestamista.',
    description:
      'O Seguro Prestamista é uma opção adicional de proteção financeira para os clientes. Este seguro oferece cobertura em caso de morte ou invalidez permanente, garantindo que os beneficiários não sejam responsáveis pelo pagamento do empréstimo ou dívida contraídos.',
    longDescription:
      'O seguro prestamista quita automaticamente o saldo devedor do seu contrato em caso de morte ou invalidez permanente, protegendo o patrimônio da sua família.',
    icon: ShieldCheck,
    color: 'primary',
    highlights: ['Proteção familiar', 'Quitação automática', 'Contratação simples', 'Cobertura nacional'],
  },
  {
    slug: 'banco-do-brasil',
    title: 'Banco do Brasil.',
    description:
      'O Consignado Banco do Brasil é uma excelente oportunidade para quem procura soluções de crédito que sejam práticas. Com mais de 9.000 convênios disponíveis, que incluem empresas privadas, essa modalidade de crédito atende a diversos perfis de clientes.',
    longDescription:
      'Somos parceiros do Banco do Brasil, com acesso a mais de 9.000 convênios ativos em prefeituras, governos estaduais, órgãos federais e empresas privadas.',
    icon: Banknote,
    color: 'primary',
    highlights: ['+9.000 convênios', 'Servidores e empresas privadas', 'Taxas exclusivas', 'Prioridade no atendimento'],
  },
  {
    slug: 'cartoes',
    title: 'Cartões.',
    description: 'Os cartões proporcionam melhor flexibilidade financeira.',
    longDescription:
      'Cartões consignados com limites exclusivos, saque autorizado e uso em qualquer estabelecimento, com desconto direto na folha ou benefício.',
    icon: CreditCard,
    color: 'primary',
    highlights: ['Saque autorizado', 'Limite exclusivo', 'Aceito em todo Brasil', 'Anuidade facilitada'],
  },
];
