import { Headphones } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { Container } from '../components/ui/Container';
import { OuvidoriaForm } from '../components/forms/OuvidoriaForm';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export default function Ouvidoria() {
  return (
    <>
      <Seo
        title="Ouvidoria"
        description="Canal de Ouvidoria da Única Promotora para reclamações, sugestões e manifestações dos nossos clientes."
      />

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

      <section className="section-padding">
        <Container className="max-w-2xl">
          <AnimatedSection direction="up">
            <div className="rounded-lg border border-surface-border bg-surface-muted p-6 text-sm text-secondary-400">
              Antes de acionar a Ouvidoria, procure primeiro o atendimento habitual. Caso a solução apresentada não
              tenha sido satisfatória, ou o prazo de resposta tenha sido ultrapassado, registre sua manifestação
              abaixo. Você também pode buscar o{' '}
              <a
                href="https://www.consumidor.gov.br"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                consumidor.gov.br
              </a>{' '}
              para soluções alternativas de conflito.
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15} className="card-surface mt-8 p-6 md:p-8">
            <OuvidoriaForm />
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
