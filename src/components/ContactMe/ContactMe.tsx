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
import { useMemo } from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import { useLocale } from "@locale/locale";
import { ContactData } from "@components/ContactMe/ContactData";

export function ContactMe() {
    const [ t ] = useLocale();

    const renderedLinks = useMemo(() => {
        return ContactData.map(({ id, href, Icon: ComponentIcon }) => (
            <Link 
                key={id} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={id}
            >
                <motion.div whileHover={{ scale: 1.3 }}>
                    <Icon>
                        <ComponentIcon className="fill-dark-purple-600" />
                    </Icon>
                </motion.div>
            </Link>
        ));
    }, []);

    return (
        <Box className="flex items-center justify-between sm:block sm:justify-normal sm:items-stretch p-3 sm:p-0 sm:w-[90%] sm:mb-7">
            <motion.div whileHover={{ scale: 1.1 }} >
                <Typography variant="body1" className="flex text-[min(5vw,18px)] sm:text-[min(2vw,18px)] text-dark-purple-600 
                    justify-center sm:mb-4 drop-shadow-[0_0_1rem_var(--color-dark-purple-700)]">{t("Contact me")}</Typography>
            </motion.div>
            <Box className="flex justify-center gap-3 sm:gap-[min(1vw,16px)]">
                {renderedLinks}
            </Box>
        </Box>
    )
}

export default ContactMe;