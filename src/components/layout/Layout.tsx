import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { WhatsappButton } from './WhatsappButton';
import { AnecPopup } from './AnecPopup';
import { CookieConsent } from './CookieConsent';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsappButton />
      <AnecPopup />
      <CookieConsent />
    </div>
  );
}
