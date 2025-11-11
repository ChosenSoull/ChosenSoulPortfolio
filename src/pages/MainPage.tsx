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

import useIsMobile from "@hooks/useIsMobile";
import ContentBox from "@components/ContentBox/ContentBox";

import PCpanel from "@components/Panels/PCpanel";
import MobilePanel from "@components/Panels/MobilePanel";

export function MainLayout() {
    const isMobile = useIsMobile();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex justify-center items-center"
        >
            {isMobile ? ( <MobilePanel /> ) : ( <PCpanel /> )}

            <ContentBox/>
        </motion.div>
    );
}

export default MainLayout;