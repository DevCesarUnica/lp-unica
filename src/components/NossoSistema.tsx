import { motion } from 'framer-motion';
import { Container } from './Container';
import { SystemCard } from './SystemCard';
import { TriangleDivider } from './TriangleDivider';
import { AnimatedSection, staggerContainer } from './AnimatedSection';
import { systemBrands, systemTools } from '../data/sistemas';

function BrandBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-5 py-2.5 shadow-soft">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E30613] font-heading text-[11px] font-bold text-white">
        {name.charAt(0)}
      </span>
      <span className="font-heading text-sm font-bold text-[#111111]">{name}</span>
    </div>
  );
}

export function NossoSistema() {
  return (
    <section className="bg-[#F4F4F4]">
      <TriangleDivider />

      <Container className="py-16 md:py-24">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight text-[#111111] md:text-5xl">
            Nosso Sistema
          </h2>
          <p className="mt-4 font-heading text-lg font-bold text-[#E30613] md:text-xl">
            5 Ferramentas: Oportunidades e Benefícios para Parceiros Única
          </p>
          <p className="mt-4 font-brand text-base font-normal leading-relaxed text-[#111111]/70">
            Pensando em apoiar o crescimento e a produtividade dos nossos parceiros, seguem as
            condições vigentes das ferramentas:
          </p>
        </AnimatedSection>

        <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-stretch">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex-1 lg:grid-cols-5"
          >
            {systemTools.map((tool) => (
              <SystemCard key={tool.slug} tool={tool} />
            ))}
          </motion.div>

          <AnimatedSection direction="left" delay={0.15} className="lg:w-[280px] lg:shrink-0">
            <div className="flex h-full flex-col justify-center gap-4 rounded-2xl bg-[#2F2C31] p-8">
              <span className="h-1 w-10 rounded-full bg-[#E30613]" aria-hidden="true" />
              <p className="font-heading text-xl font-bold leading-snug text-white">
                Mais tecnologia,
                <br />
                mais <span className="text-[#E30613]">oportunidades</span>
                <br />
                e mais <span className="text-[#E30613]">suporte</span>
                <br />
                para <span className="text-[#E30613]">ajudar você</span>
                <br />a escalar sua produção.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection
          delay={0.2}
          className="mt-14 flex flex-col items-center gap-5 border-t border-black/10 pt-10"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">
            Sistemas parceiros
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {systemBrands.map((brand) => (
              <BrandBadge key={brand.slug} name={brand.name} />
            ))}
          </div>
        </AnimatedSection>
      </Container>

      <TriangleDivider flip />
    </section>
  );
}
