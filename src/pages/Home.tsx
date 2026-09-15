import { Seo } from '../components/ui/Seo';
import { Hero } from '../components/sections/Hero';
import { BancosSection } from '../components/bancos/BancosSection';
import { MissionVisionValues } from '../components/sections/MissionVisionValues';
import { UnicaShorts } from '../components/sections/UnicaShorts';
import { NossoSistema } from '../components/sections/NossoSistema';
import { ProductsSection } from '../components/sections/ProductsSection';

export default function Home() {
  return (
    <>
      <Seo
        title="A solução mais eficaz para você"
        description="Utilizamos nossa experiência e conhecimento diariamente para oferecer a solução mais eficaz para você."
      />
      <Hero />
      <BancosSection />
      <MissionVisionValues />
      <UnicaShorts />
      <NossoSistema />
      <ProductsSection />
    </>
  );
}
