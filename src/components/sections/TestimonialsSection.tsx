import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem confia, recomenda"
          description="Histórias reais de clientes e parceiros que transformaram sua vida financeira com a Única."
          light
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <div className="flex h-full flex-col gap-4 rounded-lg bg-white/5 p-7 backdrop-blur">
                  <div className="flex gap-1 text-primary-300">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        fill={index < testimonial.rating ? 'currentColor' : 'none'}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-white/85">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {testimonial.avatarInitials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
