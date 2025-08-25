import { motion } from "framer-motion";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

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
                <Box className="bg-dark-purple-850 h-[70vh] w-[min(30vw,350px)] mr-8.5 overflow-hidden
                    rounded-3xl outline-3 outline-dark-purple-650 drop-shadow-[0_0_1rem_var(--color-dark-purple-800)]
                    items-center flex flex-col justify-between">

                    <Box className="flex justify-center items-center gap-4 mt-12 w-full">
                        <Avatar className="w-[min(6vw,100px)] h-[min(6vw,100px)] outline-3 outline-dark-purple-700" alt={user.login} src={user.avatarUrl} />
                        <Typography variant="body1" className="font-jeko text-[min(2vw,24px)] text-dark-purple-600">{user.name}</Typography>
                    </Box>

                    <Box className="flex items-center justify-center -mt-12 w-full">
                        <MyTabs className="w-[90%] outline-3 outline-dark-purple-650" />
                    </Box>

                    <Box className="w-[90%] mb-7 h-8">
                        <Link href="https://github.com/твоё-имя" target="_blank" rel="noopener noreferrer">
                            
                        </Link>
                        <Link href="https://linkedin.com/in/твоё-имя" target="_blank" rel="noopener noreferrer">
                            
                        </Link>
                        <Link href="https://twitter.com/твоё-имя" target="_blank" rel="noopener noreferrer">
                            
                        </Link>
                    </Box>
                </Box>

                <Box className="flex-1 bg-dark-purple-850 h-[70vh] rounded-3xl overflow-hidden
                outline-3 outline-dark-purple-650 drop-shadow-[0_0_1rem_var(--color-dark-purple-800)]">

                </Box>
            </Container>    
        </motion.div>
    )
}
export default MainLayout;