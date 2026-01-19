/**
 * Button Component
 *
 * Primary, secondary, ghost, and danger button variants for admin console.
 * Follows style-guide.md patterns with Tailwind CSS.
 *
 * @module components/ui/Button
 */

import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button content */
  children: ReactNode;
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Loading state - shows spinner and disables interaction */
  loading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Optional icon to show before text */
  icon?: ReactNode;
  /** Optional icon to show after text */
  iconRight?: ReactNode;
}

/**
 * Reusable button component with multiple variants.
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleSubmit}>
 *   Save Changes
 * </Button>
 *
 * <Button variant="secondary" loading>
 *   Processing...
 * </Button>
 *
 * <Button variant="danger" icon={<TrashIcon />}>
 *   Delete
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      fullWidth = false,
      icon,
      iconRight,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    // Base classes for all buttons
    const baseClasses = `
      inline-flex items-center justify-center gap-2
      font-semibold transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:cursor-not-allowed
      active:scale-[0.98]
    `;

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm rounded-xl',
      md: 'px-4 py-2.5 text-sm rounded-2xl',
      lg: 'px-6 py-4 text-base rounded-2xl',
    };

    // Variant classes
    const variantClasses = {
      primary: `
        bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)]
        text-white shadow-lg
        hover:shadow-xl hover:brightness-105
        focus:ring-[var(--chart-1)]
        disabled:from-gray-200 disabled:to-gray-200 disabled:text-gray-400 disabled:shadow-none
      `,
      secondary: `
        bg-white text-[var(--text-secondary)]
        border-2 border-[var(--border-strong)]
        shadow-sm
        hover:bg-gray-50 hover:border-gray-300
        focus:ring-[var(--chart-1)]
        disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200
        dark:bg-[var(--surface)] dark:hover:bg-[var(--surface-muted)]
      `,
      ghost: `
        bg-transparent text-[var(--primary)]
        hover:bg-gray-100
        focus:ring-[var(--chart-1)]
        disabled:text-gray-400 disabled:hover:bg-transparent
        dark:hover:bg-[var(--surface-muted)]
      `,
      danger: `
        bg-[var(--danger)] text-white
        shadow-sm
        hover:brightness-110
        focus:ring-[var(--danger)]
        disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none
      `,
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={`
          ${baseClasses}
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${widthClass}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {loading ? (
          <>
            <Spinner size={size} />
            <span>{children}</span>
          </>
        ) : (
          <>
            {icon && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
            {iconRight && <span className="shrink-0">{iconRight}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * Internal spinner component for loading state
 */
function Spinner({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <svg
      className={`animate-spin ${sizeClasses[size]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default Button;
