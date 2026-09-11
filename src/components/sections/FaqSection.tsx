import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { faqItems } from '../../data/faq';

export function FaqSection() {
  return (
    <section className="section-padding">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas & Respostas"
          description="Reunimos as dúvidas mais comuns dos nossos clientes e parceiros."
        />
        <AnimatedSection direction="up" delay={0.15} className="mt-12">
          <Accordion items={faqItems} />
        </AnimatedSection>
      </Container>
    </section>
  );
}
