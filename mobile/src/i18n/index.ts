/**
 * i18n - Internationalization setup
 * 
 * Supports EN and KR (per PRD bilingual requirement)
 * 
 * Usage:
 *   import { t, setLanguage } from '@/i18n';
 *   const label = t('welcome.title');
 */

import { Language } from './types';

// Language type
export type { Language };

// Current language state (will be moved to context/store)
let currentLanguage: Language = 'en';

// Get current language
export const getLanguage = (): Language => currentLanguage;

// Set language
export const setLanguage = (lang: Language): void => {
  currentLanguage = lang;
};

// Translation keys will be added as screens are implemented
// For now, just export the structure
export const translations = {
  en: {
    common: {
      continue: 'Continue',
      skip: 'Skip',
      next: 'Next',
      back: 'Back',
      cancel: 'Cancel',
      save: 'Save',
      done: 'Done',
    },
    tabs: {
      home: 'Home',
      guides: 'Guides',
      discover: 'Discover',
      events: 'Events',
      community: 'Community',
    },
  },
  ko: {
    common: {
      continue: '계속',
      skip: '건너뛰기',
      next: '다음',
      back: '뒤로',
      cancel: '취소',
      save: '저장',
      done: '완료',
    },
    tabs: {
      home: '홈',
      guides: '가이드',
      discover: '발견',
      events: '이벤트',
      community: '커뮤니티',
    },
  },
} as const;

// Simple translation function
type TranslationKey = keyof typeof translations.en.common | keyof typeof translations.en.tabs;

export const t = (key: string): string => {
  const keys = key.split('.');
  let value: unknown = translations[currentLanguage];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      // Fallback to English if key not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = (value as Record<string, unknown>)[fallbackKey];
        } else {
          // If any segment in the fallback path is missing, treat the whole key as missing.
          // This prevents partial traversal where later segments accidentally resolve on a previous object.
          value = undefined;
          break;
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
};
