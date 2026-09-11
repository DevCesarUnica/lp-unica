import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { PageLoader } from '../components/ui/PageLoader';

const Home = lazy(() => import('../pages/Home'));
const Produtos = lazy(() => import('../pages/Produtos'));
const Sobre = lazy(() => import('../pages/Sobre'));
const Parceiros = lazy(() => import('../pages/Parceiros'));
const Contato = lazy(() => import('../pages/Contato'));
const Ouvidoria = lazy(() => import('../pages/Ouvidoria'));
const Denuncie = lazy(() => import('../pages/Denuncie'));
const NotFound = lazy(() => import('../pages/NotFound'));

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/ouvidoria" element={<Ouvidoria />} />
          <Route path="/denuncie" element={<Denuncie />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
