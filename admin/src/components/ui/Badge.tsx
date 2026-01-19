/**
 * Badge Component
 *
 * Pill-style badges for status indicators and labels.
 * Follows style-guide.md patterns with Tailwind CSS.
 *
 * @module components/ui/Badge
 */

import { type ReactNode, type HTMLAttributes } from 'react';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge content */
  children: ReactNode;
  /** Style variant */
  variant?: BadgeVariant;
  /** Size variant */
  size?: 'sm' | 'md';
  /** Optional icon before text */
  icon?: ReactNode;
  /** Make badge interactive (clickable) */
  interactive?: boolean;
}

/**
 * Badge component for status indicators and labels.
 *
 * @example
 * ```tsx
 * <Badge variant="success">Verified</Badge>
 * <Badge variant="warning" icon={<ClockIcon />}>Pending</Badge>
 * <Badge variant="danger">Rejected</Badge>
 * ```
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon,
  interactive = false,
  className = '',
  ...props
}: BadgeProps) {
  // Base classes
  const baseClasses = `
    inline-flex items-center gap-1.5
    font-medium rounded-full
    transition-colors duration-200
  `;

  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  };

  // Variant classes
  const variantClasses = {
    default: `
      bg-gray-100 text-gray-700
      dark:bg-gray-800 dark:text-gray-300
    `,
    primary: `
      bg-[var(--chart-1)]/10 text-[var(--chart-1)]
    `,
    success: `
      bg-green-100 text-green-700
      dark:bg-green-900/30 dark:text-green-400
    `,
    warning: `
      bg-amber-100 text-amber-700
      dark:bg-amber-900/30 dark:text-amber-400
    `,
    danger: `
      bg-red-100 text-red-700
      dark:bg-red-900/30 dark:text-red-400
    `,
    info: `
      bg-blue-100 text-blue-700
      dark:bg-blue-900/30 dark:text-blue-400
    `,
  };

  // Interactive classes
  const interactiveClasses = interactive
    ? 'cursor-pointer hover:opacity-80 active:scale-95'
    : '';

  return (
    <span
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${interactiveClasses}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

/**
 * Status Badge - Pre-configured for common admin status types
 */
export function StatusBadge({
  status,
  className = '',
}: {
  status: 'pending' | 'approved' | 'rejected' | 'in_review' | 'active' | 'inactive' | 'dismissed';
  className?: string;
}) {
  const statusConfig: Record<
    string,
    { variant: BadgeVariant; label: string; icon?: ReactNode }
  > = {
    pending: {
      variant: 'warning',
      label: 'Pending',
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    in_review: {
      variant: 'info',
      label: 'In Review',
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    approved: {
      variant: 'success',
      label: 'Approved',
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    rejected: {
      variant: 'danger',
      label: 'Rejected',
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    active: {
      variant: 'success',
      label: 'Active',
      icon: (
        <span className="w-2 h-2 bg-current rounded-full animate-pulse" />
      ),
    },
    inactive: {
      variant: 'default',
      label: 'Inactive',
    },
    dismissed: {
      variant: 'default',
      label: 'Dismissed',
    },
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <Badge variant={config.variant} icon={config.icon} className={className}>
      {config.label}
    </Badge>
  );
}

/**
 * Count Badge - For showing notification counts
 */
export function CountBadge({
  count,
  max = 99,
  variant = 'danger',
  className = '',
}: {
  count: number;
  max?: number;
  variant?: BadgeVariant;
  className?: string;
}) {
  if (count <= 0) return null;

  const displayCount = count > max ? `${max}+` : count.toString();

  return (
    <Badge variant={variant} size="sm" className={`min-w-[20px] justify-center ${className}`}>
      {displayCount}
    </Badge>
  );
}

/**
 * Role Badge - For admin roles
 */
export function RoleBadge({
  role,
  className = '',
}: {
  role: 'admin' | 'super_admin' | 'moderator';
  className?: string;
}) {
  const roleConfig = {
    super_admin: { variant: 'primary' as const, label: 'Super Admin' },
    admin: { variant: 'info' as const, label: 'Admin' },
    moderator: { variant: 'default' as const, label: 'Moderator' },
  };

  const config = roleConfig[role];

  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  );
}

export default Badge;
