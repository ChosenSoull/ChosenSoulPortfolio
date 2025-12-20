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
import { motion } from "framer-motion";
import { useChangeLocale, useNextLang } from "@locale/locale";

const TranslationButton: React.FC = () => {
    let name = useNextLang();
    const handleChangeLocale = useChangeLocale(name);

    return (
        <motion.button className="w-12 iconLANG top-3 right-3 bg-dark-purple-800 text-white p-[9px] shadow-lg rounded-2xl
                drop-shadow-[0_0_1rem_var(--color-dark-purple-800)] outline-3 outline-dark-purple-650 z-999"
            onClick={() => {
                handleChangeLocale(); 
            }}
    
            whileHover={{ scale: 1.1 }}

            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
        >
            {name.toUpperCase()}
        </motion.button>
    )
}

export default TranslationButton;