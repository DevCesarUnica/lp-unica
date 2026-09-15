import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Container } from '../ui/Container';
import { BancoCard } from './BancoCard';
import { BancoModal } from './BancoModal';
import { bancos } from '../../data/bancos';
import type { Banco } from '../../types/banco';

export function BancosSection() {
  const [selected, setSelected] = useState<Banco | null>(null);

  return (
    <section id="parceiros" className="scroll-mt-32 bg-black pb-[80px] pt-[100px] md:py-[80px]">
      <Container>
        {/* elementor-element-5e8c333 .elementor-heading-title: 32px/16px weight 400 desktop,
            40px/36px mobile, cor #fff, "Bancos" é <b>. */}
        <div className="mb-10 text-center">
          <h2 className="font-heading text-[40px] font-normal leading-[36px] text-white md:text-[32px] md:leading-[16px]">
            <span className="font-bold">Bancos</span> Parceiros
          </h2>
        </div>
      </Container>

      {/* altura fixa: evita layout shift enquanto o Swiper inicializa */}
      <div className="mask-fade-x h-24 overflow-hidden">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={64}
          loop
          freeMode={{ enabled: true, momentum: false }}
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          allowTouchMove={false}
          className="!h-24 !px-8"
        >
          {[...bancos, ...bancos].map((banco, index) => (
            <SwiperSlide key={`${banco.id}-${index}`} className="!flex !h-24 !w-auto items-center justify-center">
              <BancoCard banco={banco} onSelect={setSelected} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <BancoModal banco={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
