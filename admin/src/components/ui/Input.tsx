/**
 * Input Component
 *
 * Text input with label, error state, and icon support.
 * Follows style-guide.md patterns with Tailwind CSS.
 *
 * @module components/ui/Input
 */

import {
  forwardRef,
  useId,
  type ReactNode,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Input label */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text shown below input */
  helperText?: string;
  /** Icon to show on the left side */
  leadingIcon?: ReactNode;
  /** Icon to show on the right side */
  trailingIcon?: ReactNode;
  /** Full width input */
  fullWidth?: boolean;
}

/**
 * Reusable input component with label and error states.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   error="Invalid email address"
 * />
 *
 * <Input
 *   label="Search"
 *   leadingIcon={<SearchIcon />}
 *   placeholder="Search..."
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leadingIcon,
      trailingIcon,
      fullWidth = true,
      className = '',
      id: providedId,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    const hasError = Boolean(error);

    // Base input classes
    const inputBaseClasses = `
      w-full py-3 text-sm
      bg-white dark:bg-[var(--surface)]
      text-[var(--text-primary)]
      placeholder:text-[var(--text-muted)]
      rounded-2xl
      border-2
      transition-colors duration-200
      focus:outline-none
      disabled:bg-[var(--surface-muted)] disabled:text-[var(--text-muted)] disabled:cursor-not-allowed
    `;

    // Border classes based on state
    const borderClasses = hasError
      ? 'border-[var(--danger)] focus:border-[var(--danger)] focus:ring-2 focus:ring-[var(--danger)]/20'
      : 'border-[var(--border-strong)] focus:border-[var(--chart-1)] focus:ring-2 focus:ring-[var(--chart-1)]/20';

    // Padding classes based on icons
    const paddingClasses = `
      ${leadingIcon ? 'pl-11' : 'px-4'}
      ${trailingIcon ? 'pr-11' : 'px-4'}
    `;

    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leadingIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              {leadingIcon}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            className={`
              ${inputBaseClasses}
              ${borderClasses}
              ${paddingClasses}
            `.trim().replace(/\s+/g, ' ')}
            {...props}
          />
          {trailingIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              {trailingIcon}
            </div>
          )}
        </div>
        {error && (
          <p id={errorId} className="mt-2 text-sm text-[var(--danger)]">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-2 text-sm text-[var(--text-muted)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

/**
 * Textarea Component
 */
export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Textarea label */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text shown below textarea */
  helperText?: string;
  /** Full width textarea */
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = true,
      className = '',
      id: providedId,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    const hasError = Boolean(error);

    // Base textarea classes
    const textareaBaseClasses = `
      w-full px-4 py-3 text-sm
      bg-white dark:bg-[var(--surface)]
      text-[var(--text-primary)]
      placeholder:text-[var(--text-muted)]
      rounded-2xl
      border-2
      transition-colors duration-200
      focus:outline-none
      resize-y min-h-[100px]
      disabled:bg-[var(--surface-muted)] disabled:text-[var(--text-muted)] disabled:cursor-not-allowed
    `;

    // Border classes based on state
    const borderClasses = hasError
      ? 'border-[var(--danger)] focus:border-[var(--danger)] focus:ring-2 focus:ring-[var(--danger)]/20'
      : 'border-[var(--border-strong)] focus:border-[var(--chart-1)] focus:ring-2 focus:ring-[var(--chart-1)]/20';

    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={
            hasError ? errorId : helperText ? helperId : undefined
          }
          className={`
            ${textareaBaseClasses}
            ${borderClasses}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-2 text-sm text-[var(--danger)]">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-2 text-sm text-[var(--text-muted)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

/**
 * Select Component
 */
export interface SelectProps
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select label */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Options */
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  /** Placeholder option */
  placeholder?: string;
  /** Full width select */
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      options,
      placeholder,
      fullWidth = true,
      className = '',
      id: providedId,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    const hasError = Boolean(error);

    // Base select classes
    const selectBaseClasses = `
      w-full px-4 py-3 text-sm
      bg-white dark:bg-[var(--surface)]
      text-[var(--text-primary)]
      rounded-2xl
      border-2
      transition-colors duration-200
      focus:outline-none
      cursor-pointer
      appearance-none
      bg-no-repeat bg-right
      disabled:bg-[var(--surface-muted)] disabled:text-[var(--text-muted)] disabled:cursor-not-allowed
    `;

    // Border classes based on state
    const borderClasses = hasError
      ? 'border-[var(--danger)] focus:border-[var(--danger)] focus:ring-2 focus:ring-[var(--danger)]/20'
      : 'border-[var(--border-strong)] focus:border-[var(--chart-1)] focus:ring-2 focus:ring-[var(--chart-1)]/20';

    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            className={`
              ${selectBaseClasses}
              ${borderClasses}
              pr-10
            `.trim().replace(/\s+/g, ' ')}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          {/* Dropdown chevron */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p id={errorId} className="mt-2 text-sm text-[var(--danger)]">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-2 text-sm text-[var(--text-muted)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Input;
