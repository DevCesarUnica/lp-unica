import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { partnerBanks } from '../../data/banks';
import { Container } from '../ui/Container';

export function PartnersMarquee() {
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
          {[...partnerBanks, ...partnerBanks].map((bank, index) => (
            <SwiperSlide key={`${bank.name}-${index}`} className="!flex !h-24 !w-auto items-center justify-center">
              <img
                src={bank.logo}
                alt={bank.name}
                loading="lazy"
                className="max-h-16 w-auto max-w-[180px] object-contain opacity-90"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
