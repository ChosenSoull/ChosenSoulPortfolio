/*
 / My portfolio site
 / Copyright (C) 2025  ChosenSoul
 /
 / This program is free software: you can redistribute it and/or modify
 / it under the terms of the GNU General Public License as published by
 / the Free Software Foundation, either version 3 of the License, or
 / (at your option) any later version.
 /
 / This program is distributed in the hope that it will be useful,
 / but WITHOUT ANY WARRANTY; without even the implied warranty of
 / MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 / GNU General Public License for more details.
 /
 / You should have received a copy of the GNU General Public License
 / along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
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