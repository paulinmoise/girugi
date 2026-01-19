/**
 * Input Component
 * 
 * Text input with label, error states, and icon support
 * Following style-guide.md patterns
 */

import React, { useState, forwardRef } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { COLORS, LAYOUT } from '@/constants';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  /** Label text above the input */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text below input */
  helperText?: string;
  /** Icon to show at the start of input */
  leadingIcon?: React.ReactNode;
  /** Icon to show at the end of input */
  trailingIcon?: React.ReactNode;
  /** Container style */
  containerStyle?: ViewStyle;
  /** Input style override */
  inputStyle?: ViewStyle;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Text input component with label, validation, and icon support.
 * 
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   placeholder="you@example.com"
 *   keyboardType="email-address"
 *   error={errors.email}
 *   leadingIcon={<MailIcon />}
 * />
 * ```
 */
export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leadingIcon,
      trailingIcon,
      containerStyle,
      inputStyle,
      size = 'lg',
      ...textInputProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const hasError = !!error;

    const getSizeStyles = () => {
      switch (size) {
        case 'sm':
          return {
            paddingVertical: 8,
            paddingHorizontal: 12,
            fontSize: 14,
          };
        case 'md':
          return {
            paddingVertical: 12,
            paddingHorizontal: 14,
            fontSize: 15,
          };
        case 'lg':
        default:
          return {
            paddingVertical: 14,
            paddingHorizontal: 16,
            fontSize: 16,
          };
      }
    };

    const sizeStyles = getSizeStyles();

    return (
      <View style={[styles.container, containerStyle]}>
        {/* Label */}
        {label && (
          <Text style={[styles.label, hasError && styles.labelError]}>
            {label}
          </Text>
        )}

        {/* Input Container */}
        <View
          style={[
            styles.inputContainer,
            isFocused && styles.inputContainerFocused,
            hasError && styles.inputContainerError,
          ]}
        >
          {/* Leading Icon */}
          {leadingIcon && (
            <View style={styles.leadingIconContainer}>{leadingIcon}</View>
          )}

          {/* Text Input */}
          <TextInput
            ref={ref}
            style={[
              styles.input,
              {
                paddingVertical: sizeStyles.paddingVertical,
                paddingHorizontal: leadingIcon ? 0 : sizeStyles.paddingHorizontal,
                fontSize: sizeStyles.fontSize,
              },
              inputStyle,
            ]}
            placeholderTextColor={COLORS.TEXT_MUTED}
            onFocus={(e) => {
              setIsFocused(true);
              textInputProps.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              textInputProps.onBlur?.(e);
            }}
            {...textInputProps}
          />

          {/* Trailing Icon */}
          {trailingIcon && (
            <View style={styles.trailingIconContainer}>{trailingIcon}</View>
          )}
        </View>

        {/* Error Message */}
        {hasError && <Text style={styles.errorText}>{error}</Text>}

        {/* Helper Text */}
        {!hasError && helperText && (
          <Text style={styles.helperText}>{helperText}</Text>
        )}
      </View>
    );
  }
);

Input.displayName = 'Input';

/**
 * OTP Input - Single digit input for verification codes
 */
export interface OtpInputProps {
  /** Number of digits */
  length?: number;
  /** Current value */
  value: string;
  /** Change handler */
  onChangeText: (text: string) => void;
  /** Called when all digits entered */
  onComplete?: (code: string) => void;
  /** Error state */
  error?: string;
  /** Auto focus first input */
  autoFocus?: boolean;
}

export function OtpInput({
  length = 6,
  value,
  onChangeText,
  onComplete,
  error,
  autoFocus = true,
}: OtpInputProps) {
  const inputRefs = React.useRef<(TextInput | null)[]>([]);
  const digits = value.split('').concat(Array(length - value.length).fill(''));

  const handleChange = (text: string, index: number) => {
    // Only allow single digit
    const digit = text.slice(-1);
    if (digit && !/^\d$/.test(digit)) return;

    const newValue = digits.slice(0, index).join('') + digit + digits.slice(index + 1).join('');
    const trimmedValue = newValue.slice(0, length);
    onChangeText(trimmedValue);

    // Auto-advance to next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if complete
    if (trimmedValue.length === length) {
      onComplete?.(trimmedValue);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.otpContainer}>
      <View style={styles.otpInputRow}>
        {digits.slice(0, length).map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
            style={[
              styles.otpDigitInput,
              !!digit && styles.otpDigitFilled,
              error && styles.otpDigitError,
            ]}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={autoFocus && index === 0}
            selectTextOnFocus
          />
        ))}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  // Container
  container: {
    marginBottom: 16,
  },

  // Label
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 8,
  },
  labelError: {
    color: COLORS.DANGER,
  },

  // Input Container
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.BG_SURFACE,
    borderWidth: 2,
    borderColor: COLORS.BORDER_STRONG,
    borderRadius: 16, // rounded-2xl
  },
  inputContainerFocused: {
    borderColor: COLORS.PRIMARY,
  },
  inputContainerError: {
    borderColor: COLORS.DANGER,
  },

  // Icons
  leadingIconContainer: {
    paddingLeft: 16,
  },
  trailingIconContainer: {
    paddingRight: 16,
  },

  // Input
  input: {
    flex: 1,
    color: COLORS.TEXT_PRIMARY,
  },

  // Messages
  errorText: {
    fontSize: 12,
    color: COLORS.DANGER,
    marginTop: 6,
  },
  helperText: {
    fontSize: 12,
    color: COLORS.TEXT_MUTED,
    marginTop: 6,
  },

  // OTP Input
  otpContainer: {
    alignItems: 'center',
  },
  otpInputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  otpDigitInput: {
    width: 48,
    height: 56,
    borderWidth: 2,
    borderColor: COLORS.BORDER_STRONG,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    backgroundColor: COLORS.BG_SURFACE,
  },
  otpDigitFilled: {
    borderColor: COLORS.PRIMARY,
    backgroundColor: COLORS.BG_SURFACE_MUTED,
  },
  otpDigitError: {
    borderColor: COLORS.DANGER,
  },
});

export default Input;
