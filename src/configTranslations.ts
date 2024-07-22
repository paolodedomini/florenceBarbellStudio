import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'it' as const;
export const locales = ['it'] as const;

export const pathnames: Pathnames<typeof locales> = {
    '/': '/',
    '/contatti': {
        it: '/contatti',

    },
    '/area-utenti': {
        it: '/area-utenti',

    },
    '/blog': {
        it: '/blog',
    },
    '/servizi/personal-training': {
        it: '/servizi/personal-training',

    },
    '/servizi/preparazione-atletica': {
        it: '/servizi/preparazione-atletica',
    },
    '/servizi/allenamento-funzionale': {
        it: '/servizi/allenamento-funzionale',
    },
    '/servizi/pesistica-olimpica': {
        it: '/servizi/pesistica-olimpica',
    },
    '/servizi/powerlifting': {
        it: '/servizi/powerlifting',
    },
    '/servizi/riatletizzazione-e-recupero-post-infortunio': {
        it: '/servizi/riatletizzazione-e-recupero-post-infortunio',
    },
    '/servizi/valutazione-della-composizione-corporea': {
        it: '/servizi/valutazione-della-composizione-corporea',
    },
    '/servizi/valutazione-funzionale-e-test-di-performance': {
        it: '/servizi/valutazione-funzionale-e-test-di-performance',
    },
    '/servizi/coaching-online': {
        it: '/servizi/coaching-online',
    },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';//'as-needed' | 'always' | 'never'
