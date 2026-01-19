/**
 * UI Components - Shared UI primitives
 * 
 * Reusable components following style-guide.md
 * These components form the design system foundation for the mobile app.
 * 
 * @module components/ui
 */

// Button components
export { Button } from './Button';
export type { ButtonProps } from './Button';

// Card components
export { Card, HeroCard, SelectionCard } from './Card';
export type { CardProps } from './Card';

// Input components
export { Input, OtpInput } from './Input';
export type { InputProps, OtpInputProps } from './Input';

// Badge components
export { Badge, StepBadge, StatusBadge, TranslationBadge } from './Badge';
export type { BadgeProps, BadgeVariant } from './Badge';

// Avatar components
export { Avatar, AvatarGroup } from './Avatar';
export type { AvatarProps, AvatarSize } from './Avatar';

// Spinner and loading components
export {
  Spinner,
  LoadingOverlay,
  LoadingState,
  Skeleton,
  CardSkeleton,
  ListItemSkeleton,
} from './Spinner';
export type { SpinnerProps, SpinnerSize } from './Spinner';
