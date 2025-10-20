import { motion } from "framer-motion";

import useIsMobile from "@hooks/useIsMobile";
import ContentBox from "@components/ContentBox/ContentBox";

import PCpanel from "@components/Panels/PCpanel";
import MobilePanel from "@components/Panels/MobilePanel";

export function MainLayout() {
    const isMobile = useIsMobile(640);

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