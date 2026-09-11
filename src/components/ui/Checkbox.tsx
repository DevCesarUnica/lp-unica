import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, id, className, ...rest }, ref) => {
    const checkboxId = id ?? 'checkbox';

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={checkboxId} className="group flex cursor-pointer items-start gap-3 text-sm text-secondary-400">
          <span className="relative mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-surface-borderMuted bg-white transition-colors group-has-[:checked]:border-primary group-has-[:checked]:bg-primary">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              aria-invalid={Boolean(error)}
              className={cn('peer absolute inset-0 h-full w-full cursor-pointer opacity-0', className)}
              {...rest}
            />
            <Check size={14} className="hidden text-white peer-checked:block" aria-hidden="true" />
          </span>
          <span>{label}</span>
        </label>
        {error && (
          <p role="alert" className="text-xs font-medium text-primary-600">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
