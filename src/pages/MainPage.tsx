import { motion } from "framer-motion";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography";

import getGithubUserInfo from '@hooks/getGithubUserInfo';
import { MyTabs } from '@components/Tabs/Tabs'; 

export function MainLayout() {  
    const { user } = getGithubUserInfo('chosensoull');
    if (!user) {
        return <div className="font-jeko text-dark-purple-600 justify-center items-center">User not found</div>
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex justify-center items-center"
        >
            <Container maxWidth="xl" className="flex">
                <Box className="bg-dark-purple-850 h-[70vh] w-[min(30vw,350px)] mr-8.5 
                rounded-3xl outline-3 outline-dark-purple-650  drop-shadow-[0_0_1rem_var(--color-dark-purple-800)]">
                    <Box className="flex justify-center items-center gap-4">
                        <Avatar className="w-20 h-20" alt={user.login} src={user.avatarUrl} />
                        <Typography variant="body1" className="font-jeko text-dark-purple-600">{user.name}</Typography>
                    </Box>
                    <Box className="flex justify-center content-center">
                        <MyTabs className="w-[90%]"/>
                    </Box>
                </Box>

                <Box className="flex-1 bg-dark-purple-850 h-[70vh] rounded-3xl
                outline-3 outline-dark-purple-650 drop-shadow-[0_0_1rem_var(--color-dark-purple-800)]">

                </Box>
            </Container>    
        </motion.div>
    )
}
export default MainLayout;