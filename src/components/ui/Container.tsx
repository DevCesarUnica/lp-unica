import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Container({ as: Tag = 'div', children, className, ...rest }: ContainerProps) {
  return (
    <Tag className={cn('container-app', className)} {...rest}>
      {children}
    </Tag>
  );
}
