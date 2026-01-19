/**
 * Card Component
 *
 * Soft-first surface cards for admin console.
 * Follows style-guide.md patterns with Tailwind CSS.
 *
 * @module components/ui/Card
 */

import { type ReactNode, type HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: ReactNode;
  /** Card style variant */
  variant?: 'default' | 'muted' | 'bordered';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Additional className */
  className?: string;
}

/**
 * Reusable card component with multiple variants.
 *
 * @example
 * ```tsx
 * <Card padding="md">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * <Card variant="muted" padding="lg">
 *   <p>Subtle background card</p>
 * </Card>
 * ```
 */
export function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  // Base classes
  const baseClasses = 'rounded-3xl transition-all duration-200';

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6',
  };

  // Variant classes
  const variantClasses = {
    default: `
      bg-white dark:bg-[var(--surface)]
      border border-[var(--border-default)]
      shadow-sm
    `,
    muted: `
      bg-[var(--surface-muted)]
      border border-[var(--border-default)]
    `,
    bordered: `
      bg-white dark:bg-[var(--surface)]
      border-2 border-[var(--border-strong)]
    `,
  };

  return (
    <div
      className={`
        ${baseClasses}
        ${paddingClasses[padding]}
        ${variantClasses[variant]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card Header - For consistent card title sections
 */
export function CardHeader({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex items-center justify-between mb-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card Title - For card headings
 */
export function CardTitle({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-lg font-semibold text-[var(--text-primary)] ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * Card Description - For card subtitles/descriptions
 */
export function CardDescription({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-sm text-[var(--text-muted)] ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Card Content - For main card body
 */
export function CardContent({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

/**
 * Card Footer - For card action areas
 */
export function CardFooter({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex items-center justify-end gap-3 mt-4 pt-4 border-t border-[var(--border-default)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Stat Card - Pre-configured card for dashboard statistics
 */
export function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  className = '',
}: {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}) {
  return (
    <Card padding="md" className={className}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-[var(--text-muted)]">{title}</p>
          <p className="text-2xl font-bold text-[var(--text-primary)]">
            {value}
          </p>
          {description && (
            <p className="text-xs text-[var(--text-muted)]">{description}</p>
          )}
          {trend && (
            <p
              className={`text-xs font-medium ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {trend.isPositive ? '+' : ''}
              {trend.value}%
            </p>
          )}
        </div>
        {icon && (
          <div className="p-2 rounded-xl bg-[var(--surface-muted)]">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

export default Card;
