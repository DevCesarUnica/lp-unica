import { Container } from '../ui/Container';
import { LeadForm } from '../forms/LeadForm';

export function Hero() {
  // elementor-element-a031677 (wrapper pai do heading): padding-top 58px desktop, 0 mobile —
  // soma-se ao padding-top:80px do próprio widget do heading.
  return (
    <section id="parceirounica" className="scroll-mt-32 bg-white md:pt-[58px]">
      {/* elementor-element-2610791 (row do hero): container boxed sem gutter próprio — cada
          widget dentro cuida do seu padding (é por isso que zeramos aqui). */}
      <Container className="px-0 sm:px-0 lg:px-0">
        {/* elementor-element-4078b99 .elementor-heading-title (post 73):
            desktop font-size:73px;font-weight:100;line-height:75px;color:var(--e-global-color-secondary)
            widget padding 80px 500px 100px 0 — mobile (<768px) font-size:45px;line-height:1.1em,
            text-align:center, widget padding 80px 20px 80px 20px. "Conexões Únicas" é <b> no h2 original. */}
        <h1 className="pb-[80px] pt-[80px] px-[20px] text-center text-[45px] font-heading font-thin leading-[1.1] text-secondary md:px-0 md:pb-[100px] md:pr-[500px] md:pt-[80px] md:text-left md:text-[73px] md:leading-[75px]">
          Transformando vidas com <span className="font-bold text-primary">Conexões Únicas</span>
        </h1>

        {/* elementor-element-77a2974 (row, md breakpoint 768px, margin-bottom:100px desktop /
            0 mobile — é o espaço branco visível abaixo do bloco colorido antes da próxima
            seção). Filhos: 0ca34dc (tira, bg #D5040C) width 1% + b3493b9 (form, bg
            var(--e-global-color-secondary)=#373435) width 67% + 9044ca5 (bg #D5040C) width 32%. */}
        <div
          id="lead-form"
          className="flex w-full max-w-full scroll-mt-32 flex-col shadow-card md:mb-[100px] md:flex-row"
        >
          <div className="hidden shrink-0 bg-primary md:block md:w-[1%]" aria-hidden="true" />
          <div className="min-w-0 bg-secondary md:w-[67%]">
            <LeadForm />
          </div>
          {/* elementor-element-dbfc407 .elementor-heading-title: font-size 34px;font-weight
              400;line-height 29px;color #fff — mobile font-size 40px;line-height 36px.
              widget padding 35px 60px 32px 65px desktop / 32px 20px mobile. <br> real após
              "Faça parte"; "promotora que mais cresce no mercado!" é <b> (700). */}
          <div className="flex min-w-0 items-center bg-primary md:w-[32%]">
            <p className="px-[20px] py-[32px] font-heading text-[40px] font-normal leading-[36px] text-white md:pb-[32px] md:pl-[65px] md:pr-[60px] md:pt-[35px] md:text-[34px] md:leading-[29px]">
              Faça parte
              <br />
              da <span className="font-bold">promotora que mais cresce no mercado!</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
