import { ShieldAlert } from 'lucide-react';
import { Container } from './Container';

export function DenuncieHero() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <Container className="flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary-300">
          <ShieldAlert size={28} aria-hidden="true" />
        </span>
        <h1 className="heading-xl mt-6 max-w-2xl text-balance text-white">Denuncie!</h1>
        <p className="mt-4 max-w-xl body-lg text-white/75">
          Utilize o formulário para fazer sua denúncia de fraude. Se você testemunhou ou foi vítima de algum tipo
          de fraude, não deixe de denunciar.
        </p>
      </Container>
    </section>
  );
}
