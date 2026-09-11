import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada" description="A página que você procura não existe ou foi movida." />
      <section className="flex min-h-[70vh] items-center justify-center py-20">
        <Container className="flex flex-col items-center text-center">
          <span className="font-heading text-8xl font-extrabold text-primary/20">404</span>
          <h1 className="heading-lg mt-4">Página não encontrada</h1>
          <p className="mt-3 max-w-md text-secondary-400">
            O endereço que você tentou acessar não existe ou foi movido. Vamos te ajudar a voltar para o caminho
            certo.
          </p>
          <Link to="/" className="mt-8">
            <Button leftIcon={<ArrowLeft size={18} aria-hidden="true" />}>Voltar para a Home</Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
