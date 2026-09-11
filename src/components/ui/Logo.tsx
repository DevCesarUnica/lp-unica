import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import logoCompleta from '../../assets/images/Logo-unica-completa.svg';
import logoIcon from '../../assets/images/Logo-Unica3.svg';

interface LogoProps {
  className?: string;
  /** 'completa' = lockup (tile + wordmark), 'icon' = only the U mark */
  variant?: 'completa' | 'icon';
}

export function Logo({ className, variant = 'completa' }: LogoProps) {
  const src = variant === 'icon' ? logoIcon : logoCompleta;

  return (
    <Link to="/" className={cn('inline-flex shrink-0 items-center', className)} aria-label="Única Promotora">
      <img
        src={src}
        alt="Única Promotora"
        className={cn('w-auto', variant === 'icon' ? 'h-12' : 'h-11 md:h-12')}
        width={variant === 'icon' ? 80 : 281}
        height={variant === 'icon' ? 82 : 87}
      />
    </Link>
  );
}
