import { Container } from './Container';

export function ContatoHero() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <Container>
        <span className="eyebrow text-primary-300">Fale conosco</span>
        <h1 className="heading-xl max-w-2xl text-balance text-white">Estamos aqui para ajudar você</h1>
        <p className="mt-4 max-w-xl body-lg text-white/75">
          Tire suas dúvidas, solicite uma simulação ou fale com nosso time comercial.
        </p>
      </Container>
    </section>
  );
}
