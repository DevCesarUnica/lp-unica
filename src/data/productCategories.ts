import { Award, BarChart3, DollarSign, Monitor, ShieldCheck } from 'lucide-react';
import type { ProductCategory } from '../types';

export const productCategories: ProductCategory[] = [
  {
    slug: 'consignado',
    title: 'Consignado',
    icon: Award,
    className: 'lg:row-span-2',
    items: ['INSS', 'Público', 'Privado', 'Federal/Civil (SIAPE)', 'Marinha', 'Aeronáutica', 'Exército'],
  },
  {
    slug: 'credito',
    title: 'Crédito',
    icon: DollarSign,
    items: ['Pessoal', 'Empréstimo / FGTS', 'Car Equity'],
  },
  {
    slug: 'seguros',
    title: 'Seguros',
    icon: ShieldCheck,
    items: ['Prestamista'],
  },
  {
    slug: 'outros-produtos',
    title: 'Outros Produtos',
    icon: BarChart3,
    className: 'lg:row-span-2',
    items: ['Mais BB', 'Santander (Abertura de Conta)'],
  },
  {
    slug: 'cartoes',
    title: 'Cartões',
    icon: Monitor,
    className: 'lg:col-span-2',
    badgePosition: 'bottom',
    items: ['Cartão Benefício Consignável', 'Cartão Consignado com Saque Complementar'],
  },
];
