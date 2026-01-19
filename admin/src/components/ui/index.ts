/**
 * UI Components - Shared primitive components for admin console
 *
 * Reusable components following style-guide.md
 * These components form the design system foundation for the admin app.
 *
 * @module components/ui
 */

// Button components
export { Button } from './Button';
export type { ButtonProps } from './Button';

// Card components
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  StatCard,
} from './Card';
export type { CardProps } from './Card';

// Input components
export { Input, Textarea, Select } from './Input';
export type { InputProps, TextareaProps, SelectProps } from './Input';

// Badge components
export { Badge, StatusBadge, CountBadge, RoleBadge } from './Badge';
export type { BadgeProps, BadgeVariant } from './Badge';

// Table components
export { Table, TablePagination } from './Table';
export type { TableProps, Column, TablePaginationProps } from './Table';

// Modal components
export { Modal, ConfirmModal } from './Modal';
export type { ModalProps, ConfirmModalProps } from './Modal';
