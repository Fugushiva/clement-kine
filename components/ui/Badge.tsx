import * as React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'brand' | 'success' | 'muted';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    'bg-[var(--color-surface-muted)] text-[var(--color-text-body)] border border-[var(--color-border-default)]',
  brand:
    'bg-[var(--color-brand-primary)] text-[var(--color-text-on-brand)]',
  success:
    'bg-[var(--color-success)] text-[var(--color-text-on-brand)]',
  muted:
    'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]',
};

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
