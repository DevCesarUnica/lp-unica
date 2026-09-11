import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { staggerContainer, staggerItem } from '../components/ui/AnimatedSection';
import { partnerBanks } from '../data/banks';

export default function Parceiros() {
  return (
    <>
      <Seo
        title="Bancos Parceiros"
        description="Conheça as mais de 25 instituições financeiras parceiras da Única Promotora em todo o Brasil."
      />

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

      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Instituições"
            title="Nossos bancos parceiros"
            description="Correspondente bancário autorizado, com acesso direto às melhores condições do mercado."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          >
            {partnerBanks.map((bank) => (
              <motion.div
                key={bank.name}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="flex h-24 flex-col items-center justify-center gap-2 rounded-md border border-surface-border bg-secondary p-4 text-center shadow-soft transition-shadow hover:shadow-card"
              >
                <img src={bank.logo} alt={bank.name} className="max-h-10 w-auto max-w-[110px] object-contain" />
                <span className="text-[11px] text-white/60">{bank.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="bg-brand-gradient py-16 text-center">
        <Container className="flex flex-col items-center gap-6">
          <h2 className="heading-lg max-w-xl text-balance text-white">Sua instituição ainda não está aqui?</h2>
          <p className="max-w-lg text-white/85">
            Estamos sempre expandindo nossa rede de parceiros. Fale com nosso time comercial.
          </p>
          <Link to="/contato">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight size={20} aria-hidden="true" />}>
              Entrar em contato
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
