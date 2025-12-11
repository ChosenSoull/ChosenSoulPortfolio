import React from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import i18n from "@locale/i18n";

export const defaultLanguage = "en";
export const supportedLocales = ['en', 'ru', 'uk'];

const LOCALE_STORAGE_KEY = 'Locale';

const getSavedLocale = (): string | null => {
    if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(LOCALE_STORAGE_KEY);
    }
    return null;
};

export const useInitLocale = () => {
    const targetLanguage = getSavedLocale() || defaultLanguage;

    React.useEffect(() => {
        if (i18n.language !== targetLanguage) {
            i18n.changeLanguage(targetLanguage);
        }
        
    }, [targetLanguage, i18n]);
};

export const useNextLang = (): string => {
    let { i18n } = useTranslation();
    const currentLang = i18n.language;

    const nextLangF = useMemo(() => {
        const currentIndex = supportedLocales.indexOf(currentLang);
        const nextIndex = (currentIndex + 1) % supportedLocales.length; 
        return supportedLocales[nextIndex];
    }, [currentLang]);

    return nextLangF;
}

export const useChangeLocale = (name: string) => {
    let { i18n } = useTranslation();

    const changeLocale = () => { 
        i18n.changeLanguage(name); 

        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem(LOCALE_STORAGE_KEY, name);
        }
    };

    return changeLocale;
};

export const useLocale = (): [TFunction, string] => {
    const { t, i18n } = useTranslation();
    return [t, i18n.language];
};