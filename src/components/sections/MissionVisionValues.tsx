import { Container } from '../ui/Container';
import { mission, values, vision } from '../../data/company';
import bannerBruno from '../../assets/images/Banner-Bruno-1.png';

export function MissionVisionValues() {
  return (
    <section id="sobre-nos" className="relative scroll-mt-32 overflow-hidden bg-secondary text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={bannerBruno}
          alt=""
          className="h-full w-full object-cover object-[65%_center]"
        />
        {/* escurece só o lado esquerdo (onde fica o texto) e libera a foto à direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary from-20% via-secondary/75 via-45% to-transparent to-75%" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent md:hidden" />
      </div>

      {/* elementor-element-b1d1318: padding 170px/150px desktop, 80px/80px mobile.
          Headings cde0e0a "União," (96.23px/90px, weight 700) + 8b9a6c0 "transformação
          e inovação." (mesma métrica, weight 100). Icon-box: título 32.858px/700 Exo 2,
          descrição 17.86px/400 Montserrat, ambos brancos, sem ícone/card. */}
      <Container className="relative pb-[80px] pt-[80px] md:pb-[150px] md:pt-[170px]">
        <div className="max-w-2xl">
          <h2 className="font-heading leading-[36px] tracking-tight text-white md:leading-[90px]">
            <span className="relative inline-block pl-5 text-[40px] font-bold md:text-[96px]">
              <span className="absolute left-0 top-1.5 h-[0.8em] w-1 bg-primary" aria-hidden="true" />
              União,
            </span>
            <br />
            <span className="text-[40px] font-thin text-white md:text-[96px]">transformação</span>
            <br />
            <span className="text-[40px] font-thin text-white md:text-[96px]">e inovação.</span>
          </h2>

          <div className="mt-12 space-y-10 md:w-[60%]">
            <div>
              <h3 className="font-heading text-[32.858px] font-bold text-white">Missão</h3>
              <p className="mt-3 font-brand text-[17.86px] leading-relaxed text-white/90">{mission}</p>
            </div>

            <div>
              <h3 className="font-heading text-[32.858px] font-bold text-white">Visão</h3>
              <p className="mt-3 font-brand text-[17.86px] leading-relaxed text-white/90">{vision}</p>
            </div>

            <div>
              <h3 className="font-heading text-[32.858px] font-bold text-white">Valores</h3>
              <div className="mt-3 space-y-3 font-brand text-[17.86px] leading-relaxed text-white/90">
                {values.map((value) => (
                  <p key={value.title}>
                    <strong className="font-semibold text-white">{value.title}</strong> {value.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
