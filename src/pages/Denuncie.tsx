import { ShieldAlert } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { Container } from '../components/ui/Container';
import { DenuncieForm } from '../components/forms/DenuncieForm';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { denuncieCategories } from '../utils/schemas';

export default function Denuncie() {
  return (
    <>
      <Seo
        title="Canal de Denúncias"
        description="Canal de denúncias sigiloso da Única Promotora para reportar condutas antiéticas, fraudes ou desvios de conduta."
      />

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

      <section className="section-padding">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection direction="left">
            <h2 className="heading-md">Categorias apuradas</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {denuncieCategories.map((category) => (
                <li
                  key={category}
                  className="rounded-md border border-surface-border bg-white px-4 py-3 text-sm font-medium text-secondary shadow-soft"
                >
                  {category}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} className="card-surface p-6 md:p-8">
            <DenuncieForm />
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
