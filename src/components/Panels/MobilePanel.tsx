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
import { useState } from "react";
import { MyTabs } from "@components/Tabs/Tabs";
import Box from "@mui/material/Box";
import Account from "@components/Account/Account";
import ContactMe from "@components/ContactMe/ContactMe";
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from "@components/Icons/Arrow";

export function MobilePanel() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return(
        <Box>
            <Box className="bg-dark-purple-850 rounded-3xl overflow-hidden w-auto fixed z-999
            outline-3 outline-dark-purple-650 drop-shadow-[0_0_1rem_var(--color-dark-purple-800)]
            top-[15px] left-[10px] right-[10px]">
                <Box className="flex justify-between items-center p-3">
                    <Account />
                    <motion.div
                        animate={{ rotate: isOpen ? 270 : 90 }}
                        transition={{ duration: 0.3 }}
                        onClick={togglePanel}
                        className="h-12 w-12 fill-dark-purple-600 cursor-pointer" 
                    >
                        <Arrow className="h-full w-full" />
                    </motion.div>
                </Box>

                <AnimatePresence initial={false}>
                    {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }} 
                        className="contact-content" 
                    >
                        {isOpen ? ( <ContactMe/> ) : ( null )}
                    </motion.div>
                    )}
                </AnimatePresence>
            </Box>


            <MyTabs className="fixed z-999 w-auto outline-3 outline-dark-purple-650 drop-shadow-[0_0_1rem_var(--color-dark-purple-750)]
            bottom-[15px] left-[10px] right-[10px] p-2"/>
        </Box>
    )
}

export default MobilePanel;