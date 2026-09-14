import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import anecImage from '../../assets/images/card-1118-1.jpg';

const ANEC_LINK = 'https://anecbrasil.com.br/certificaco';

// Popup real do site (elementor-id 968): trigger "page_load" com delay de 1s,
// imagem única (card-1118-1.jpg, 800x450) linkando para a ANEC.
export function AnecPopup() {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => setIsOpen(false);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-secondary-900/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Certificação ANEC com desconto exclusivo"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-[800px] overflow-hidden rounded-lg shadow-card"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-secondary shadow-soft hover:bg-surface-subtle"
            >
              <X size={18} />
            </button>
            <a href={ANEC_LINK} target="_blank" rel="noreferrer" onClick={close}>
              <img
                src={anecImage}
                alt="Adquira sua Certificação ANEC com desconto exclusivo da Única Promotora — cupom UNICA20"
                width={800}
                height={450}
                className="block h-auto w-full"
              />
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
