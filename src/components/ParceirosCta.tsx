import { ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

export function ParceirosCta() {
  return (
    <section className="bg-brand-gradient py-16 text-center">
      <Container className="flex flex-col items-center gap-6">
        <h2 className="heading-lg max-w-xl text-balance text-white">Sua instituição ainda não está aqui?</h2>
        <p className="max-w-lg text-white/85">
          Estamos sempre expandindo nossa rede de parceiros. Fale com nosso time comercial.
        </p>
        <a href="/contato">
          <Button variant="secondary" size="lg" rightIcon={<ArrowRight size={20} aria-hidden="true" />}>
            Entrar em contato
          </Button>
        </a>
      </Container>
    </section>
  );
}
