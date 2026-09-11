import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { products } from '../../data/products';

export function ProductsSection() {
  const [index, setIndex] = useState(4); // "Seguro Prestamista." como no site
  const current = products[index];

  const go = (dir: number) => setIndex((prev) => (prev + dir + products.length) % products.length);

  return (
    <section id="produtos" className="scroll-mt-32 bg-primary py-20 text-white md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* elementor-element-a04ceb7 .elementor-heading-title: 96px/90px weight 100 desktop,
            40px/36px mobile; color #fff; "produtos" é <b> (700) no h2 original. */}
        <h2 className="font-heading text-[40px] font-thin leading-[36px] text-white md:text-[96px] md:leading-[90px]">
          <span className="font-thin">Nossos</span>
          <br />
          <span className="font-bold">produtos</span>
        </h2>

        <div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              {/* .elementskit-commentor-content>p: Montserrat 34px/700 (rótulo).
                  .elementskit-author-name: Montserrat 24px/400/line-height:30px (descrição). */}
              <h3 className="font-brand text-[34px] font-bold leading-tight">{current.title}</h3>
              <p className="mt-5 max-w-xl font-brand text-[24px] font-normal leading-[30px] text-white">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Produto anterior"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white hover:text-black"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximo produto"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white hover:text-black"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
