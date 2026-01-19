/**
 * i18n Types
 */

// Supported languages
export type Language = 'en' | 'ko';

// Translation structure type (will expand as translations are added)
export interface Translations {
  common: {
    continue: string;
    skip: string;
    next: string;
    back: string;
    cancel: string;
    save: string;
    done: string;
  };
  tabs: {
    home: string;
    guides: string;
    discover: string;
    events: string;
    community: string;
  };
}
