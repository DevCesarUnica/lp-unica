import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: 'left' | 'right';
}

export function Drawer({ isOpen, onClose, children, side = 'right' }: DrawerProps) {
  useLockBodyScroll(isOpen);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary-900/60"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ x: side === 'right' ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: side === 'right' ? '100%' : '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`absolute top-0 ${side === 'right' ? 'right-0' : 'left-0'} flex h-full w-[85%] max-w-sm flex-col bg-white shadow-card`}
          >
            <div className="flex items-center justify-end p-4">
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar menu"
                className="rounded-full p-2 text-secondary hover:bg-surface-subtle"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-8">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
