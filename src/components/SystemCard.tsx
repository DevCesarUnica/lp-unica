import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { SystemTool } from '../types';
import { staggerItem } from './AnimatedSection';

interface SystemCardProps {
  tool: SystemTool;
}

export function SystemCard({ tool }: SystemCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex h-full flex-col gap-5 rounded-2xl bg-[#E30613] p-7 shadow-lg shadow-black/10 hover:shadow-xl"
    >
      <h3 className="font-heading text-xl font-bold leading-snug text-white">{tool.name}</h3>
      <p className="flex-1 font-brand text-sm font-normal leading-relaxed text-white/90">
        {tool.description}
      </p>
      <motion.a
        href={tool.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Acessar sistema ${tool.name} (abre em nova aba)`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-5 py-2.5 font-heading text-sm font-bold text-[#E30613] transition-colors duration-300 hover:bg-[#2F2C31] hover:text-white"
      >
        Acessar Sistema
        <ArrowUpRight size={16} aria-hidden="true" />
      </motion.a>
    </motion.div>
  );
}
