export interface CanalContato {
  label: string;
  valor: string;
}

export interface Banco {
  id: string;
  nome: string;
  logo: string;
  telefone?: string;
  sac?: string;
  ouvidoria?: string;
  site?: string;
  descricao?: string;
  /** Canais específicos quando o banco tem mais de um SAC (ex.: empréstimo, imobiliário, WhatsApp). */
  canais?: CanalContato[];
  /** Nota geral de horário/disponibilidade, exibida uma única vez abaixo dos canais. */
  horario?: string;
}
