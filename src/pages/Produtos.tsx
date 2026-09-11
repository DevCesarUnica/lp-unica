import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';
import { cn } from '../utils/cn';

const colorMap = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
  secondary: 'bg-secondary/10 text-secondary',
} as const;

export default function Produtos() {
  return (
    <>
      <Seo
        title="Nossos Produtos"
        description="Conheça todas as soluções financeiras da Única Promotora: consignado, crédito pessoal, FGTS, cartões, seguro prestamista e mais."
      />

      <section className="bg-secondary py-16 md:py-20">
        <Container>
          <span className="eyebrow text-primary-300">Portfólio completo</span>
          <h1 className="heading-xl max-w-2xl text-balance text-white">Soluções financeiras para cada momento da sua vida</h1>
          <p className="mt-4 max-w-xl body-lg text-white/75">
            Sete linhas de produto, dezenas de bancos parceiros e um único objetivo: encontrar a melhor condição para
            você.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="flex flex-col gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              id={product.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={cn(
                'scroll-mt-28 grid grid-cols-1 items-center gap-10 lg:grid-cols-2',
                index % 2 === 1 && 'lg:[&>*:first-child]:order-2',
              )}
            >
              <div>
                <span className={cn('flex h-16 w-16 items-center justify-center rounded-lg', colorMap[product.color])}>
                  <product.icon size={30} aria-hidden="true" />
                </span>
                <h2 className="heading-lg mt-6">{product.title}</h2>
                <p className="mt-4 body-lg text-secondary-400">{product.longDescription}</p>

                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm font-medium text-secondary">
                      <CheckCircle2 size={18} className="shrink-0 text-primary" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link to="/#parceirounica" className="mt-8 inline-block">
                  <Button rightIcon={<ArrowRight size={18} aria-hidden="true" />}>Simular agora</Button>
                </Link>
              </div>

              <div className="relative flex aspect-video items-center justify-center rounded-2xl bg-surface-muted">
                <div className={cn('flex h-28 w-28 items-center justify-center rounded-full', colorMap[product.color])}>
                  <product.icon size={52} aria-hidden="true" />
                </div>
              </div>
            </motion.div>
          ))}
        </Container>
      </section>
    </>
  );
}
