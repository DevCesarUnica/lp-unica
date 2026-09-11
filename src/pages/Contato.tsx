import { Mail, MapPin, Phone } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { Container } from '../components/ui/Container';
import { ContatoForm } from '../components/forms/ContatoForm';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { companyInfo } from '../data/company';

const contactInfo = [
  { icon: MapPin, label: 'Endereço', value: companyInfo.address },
  { icon: Phone, label: 'Telefone', value: companyInfo.phone, href: `tel:${companyInfo.phoneRaw}` },
  { icon: Mail, label: 'E-mail', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
];

export default function Contato() {
  return (
    <>
      <Seo
        title="Contato"
        description="Fale com a Única Promotora. Estamos prontos para ajudar você a encontrar a melhor solução financeira."
      />

      <section className="bg-secondary py-16 md:py-20">
        <Container>
          <span className="eyebrow text-primary-300">Fale conosco</span>
          <h1 className="heading-xl max-w-2xl text-balance text-white">Estamos aqui para ajudar você</h1>
          <p className="mt-4 max-w-xl body-lg text-white/75">
            Tire suas dúvidas, solicite uma simulação ou fale com nosso time comercial.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection direction="left">
            <h2 className="heading-md">Informações de contato</h2>
            <div className="mt-6 flex flex-col gap-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-secondary-300">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-secondary hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-secondary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 aspect-video overflow-hidden rounded-lg border border-surface-border">
              <iframe
                title="Localização Única Promotora"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-43.9430%2C-19.9236%2C-43.9349%2C-19.9156&layer=mapnik&marker=-19.9196%2C-43.9389"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} className="card-surface p-6 md:p-8">
            <h2 className="heading-md">Envie uma mensagem</h2>
            <p className="mt-2 mb-6 text-sm text-secondary-400">Respondemos em até 1 dia útil.</p>
            <ContatoForm />
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
