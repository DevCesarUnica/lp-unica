import { Container } from './Container';

export function ProdutosHero() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <Container>
        <span className="eyebrow text-primary-300">Portfólio completo</span>
        <h1 className="heading-xl max-w-2xl text-balance text-white">
          Soluções financeiras para cada momento da sua vida
        </h1>
        <p className="mt-4 max-w-xl body-lg text-white/75">
          Sete linhas de produto, dezenas de bancos parceiros e um único objetivo: encontrar a melhor condição para
          você.
        </p>
      </Container>
    </section>
  );
}
