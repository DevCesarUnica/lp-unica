import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Container } from './Container';
import { BancoCard } from './BancoCard';
import { BancoModal } from './BancoModal';
import { bancos } from '../data/bancos';
import type { Banco } from '../types/banco';

// A esteira roda em autoplay contínuo (delay 0, speed 5000 encadeando uma
// transição na outra). Se as setas chamassem slidePrev/slideNext direto, o
// clique concorria com essa transição perpétua e não surtia efeito nenhum
// visível. Por isso as setas pausam o autoplay, dão um passo rápido (500ms)
// e retomam a esteira em seguida.
const MANUAL_STEP_SPEED = 500;
const AUTOPLAY_RESUME_DELAY = 1500;

const arrowButtonCls =
  'group absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full ' +
  'border border-white/30 bg-white/10 text-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 ease-out ' +
  'hover:scale-110 hover:border-white hover:bg-white hover:text-black hover:shadow-[0_0_28px_rgba(255,255,255,0.45)] ' +
  'active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ' +
  'sm:h-12 sm:w-12';

export function BancosSection() {
  const [selected, setSelected] = useState<Banco | null>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    },
    [],
  );

  const navigate = (direction: 'prev' | 'next') => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    swiper.autoplay?.stop();
    if (direction === 'prev') {
      swiper.slidePrev(MANUAL_STEP_SPEED);
    } else {
      swiper.slideNext(MANUAL_STEP_SPEED);
    }

    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      swiper.autoplay?.start();
    }, AUTOPLAY_RESUME_DELAY);
  };

  return (
    <section id="parceiros" className="scroll-mt-32 bg-black pb-[80px] pt-[100px] md:py-[80px]">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="font-heading text-[40px] font-normal leading-[36px] text-white md:text-[32px] md:leading-[16px]">
            <span className="font-bold">Bancos</span> Parceiros
          </h2>
        </div>
      </Container>

      <div className="relative">
        <button
          type="button"
          onClick={() => navigate('prev')}
          aria-label="Ver bancos anteriores"
          className={`${arrowButtonCls} left-3 sm:left-6`}
        >
          <ChevronLeft
            size={22}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={() => navigate('next')}
          aria-label="Ver próximos bancos"
          className={`${arrowButtonCls} right-3 sm:right-6`}
        >
          <ChevronRight
            size={22}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>

        <div className="mask-fade-x h-24 overflow-hidden">
          <Swiper
            modules={[Autoplay, FreeMode]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView="auto"
            spaceBetween={64}
            loop
            freeMode={{ enabled: true, momentum: false }}
            speed={5000}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            allowTouchMove={false}
            loopPreventsSliding={false}
            className="!h-24 !px-8"
          >
            {[...bancos, ...bancos].map((banco, index) => (
              <SwiperSlide key={`${banco.id}-${index}`} className="!flex !h-24 !w-auto items-center justify-center">
                <BancoCard banco={banco} onSelect={setSelected} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <BancoModal banco={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
