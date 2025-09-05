import { motion } from "framer-motion";
import Box from "@mui/material/Box";

import { MyTabs } from '@components/Tabs/Tabs';
import Account from "@components/Account/Account";
import ContactMe from "@components/ContactMe/ContactMe";
import ContentBox from "@components/ContentBox/ContentBox";

export function MainLayout() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex justify-center items-center"
        >
            <Box className="bg-dark-purple-850 h-[80vh] w-[min(40vw,350px)] mr-8.5 ml-10 overflow-hidden rounded-3xl
            outline-3 outline-dark-purple-650 drop-shadow-[0_0_1rem_var(--color-dark-purple-800)] items-center flex flex-col justify-between">
                <Account />

                <Box className="flex items-center justify-center -mt-12 w-full drop-shadow-[0_0_1rem_var(--color-dark-purple-750)]">
                    <MyTabs className="w-[90%] outline-3 outline-dark-purple-650" />
                </Box>

                <ContactMe />
            </Box>

            <ContentBox/>
        </motion.div>
    );
}

export default MainLayout;