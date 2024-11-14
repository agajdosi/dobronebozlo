// src/lib/i18n.ts
import { init, register, locale } from 'svelte-i18n';

// Register language files
register('en', () => import('../locales/en.json'));
register('cs', () => import('../locales/cs.json'));

// Set default locale (English)
init({
    fallbackLocale: 'cs',
    initialLocale: 'cs'
});

// Helper function to change locale
export function changeLocale(lang: string) {
    locale.set(lang);
}

locale.set('cs');
