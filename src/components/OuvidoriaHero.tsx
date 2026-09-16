import { Headphones } from 'lucide-react';
import { Container } from './Container';

export function OuvidoriaHero() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <Container className="flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary-300">
          <Headphones size={28} aria-hidden="true" />
        </span>
        <h1 className="heading-xl mt-6 max-w-2xl text-balance text-white">Ouvidoria</h1>
        <p className="mt-4 max-w-xl body-lg text-white/75">
          A Ouvidoria existe para que nós possamos vê-lo satisfeito com nossos produtos, serviços e atendimento. De
          forma imparcial e isenta, buscamos uma solução ágil e o compromisso de identificar melhorias nos demais
          canais de relacionamento, produtos e serviços.
        </p>
      </Container>
    </section>
  );
}
