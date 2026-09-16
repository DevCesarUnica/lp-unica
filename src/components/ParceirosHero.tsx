import { Container } from './Container';

export function ParceirosHero() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <Container>
        <span className="eyebrow text-primary-300">Rede credenciada</span>
        <h1 className="heading-xl max-w-2xl text-balance text-white">Mais de 25 bancos parceiros em todo o Brasil</h1>
        <p className="mt-4 max-w-xl body-lg text-white/75">
          Trabalhamos com as principais instituições financeiras do país para garantir sempre a melhor taxa e
          condição para você.
        </p>
      </Container>
    </section>
  );
}
