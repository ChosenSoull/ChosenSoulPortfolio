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
import { useLocale } from '@locale/locale';
import { enqueueSnackbar, useSnackbar } from 'notistack';

export const useInteractiveNotification = () => {
    const { closeSnackbar } = useSnackbar();
    const [ t ] = useLocale();

    const showNotify = (message: string | React.ReactNode, YesOption: () => void, NoOption?: () => void) => {
        const content = typeof message === 'string' ? t(message) : message;
        
        enqueueSnackbar(content, {
            persist: true,
            action: (key) => (
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                        className="px-6 py-1 bg-dark-purple-600 rounded-lg text-dark-purple-800"
                        onClick={() => { 
                            YesOption(); 
                            closeSnackbar(key); 
                        }}
                    >
                        {t("Yes")}
                    </button>
                    <button
                        className="px-6 py-1 border border-dark-purple-400 rounded-lg"
                        onClick={() => {
                            NoOption?.();
                            closeSnackbar(key);
                        }}
                    >
                        {t("No")}
                    </button>
                </div>
            ),
        });
    };

    return showNotify;
}

