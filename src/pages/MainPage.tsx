import { motion } from "framer-motion";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import getGithubUserInfo from '@hooks/getGithubUserInfo';
import { MyTabs } from '@components/Tabs/Tabs'; 

import GithubIcon from '@components/Icons/Github';
import TelegramIcon from '@components/Icons/Telegram';
import GmailIcon from '@components/Icons/Gmail';
import DiscordIcon from '@components/Icons/Discord';
import LeetCodeIcon from '@components/Icons/Leetcode';


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

                    <Box className="flex justify-center items-center gap-4 mt-12 w-full drop-shadow-[0_0_2rem_var(--color-dark-purple-750)]">
                        <motion.div whileHover={{ scale: 1.1 }} >
                            <Avatar className="w-[min(6vw,100px)] h-[min(6vw,100px)] outline-3 outline-dark-purple-700" alt={user.login} src={user.avatarUrl} />
                        </motion.div>
                        <Typography variant="body1" className="font-jeko text-[min(2vw,24px)] text-dark-purple-600">{user.name}</Typography>
                    </Box>

                    <Box className="flex items-center justify-center -mt-12 w-full drop-shadow-[0_0_1rem_var(--color-dark-purple-750)]">
                        <MyTabs className="w-[90%] outline-3 outline-dark-purple-650" />
                    </Box>

                    <Box className="w-[90%] mb-7">
                        <motion.div whileHover={{ scale: 1.1 }} >
                            <Typography variant="body1" className="flex font-jeko text-[min(2vw,18px)] text-dark-purple-600 
                            justify-center mb-4 drop-shadow-[0_0_1rem_var(--color-dark-purple-700)]">Contact me</Typography>
                        </motion.div>
                        <Box className="flex justify-center gap-[min(1vw,16px)]">
                            <Link href="https://t.me/ChosenS0ul" target="_blank" rel="noopener noreferrer">
                                <motion.div whileHover={{ scale: 1.3 }} >    
                                    <Icon>
                                        <TelegramIcon className="fill-dark-purple-600"/>
                                    </Icon>
                                </motion.div>
                            </Link>
                            <Link href="https://github.com/ChosenSoull" target="_blank" rel="noopener noreferrer">
                                <motion.div whileHover={{ scale: 1.3 }} >
                                    <Icon>
                                        <GithubIcon className="fill-dark-purple-600"/>
                                    </Icon>
                                </motion.div>
                            </Link>
                            <Link href="https://discordapp.com/users/912451953106255894" target="_blank" rel="noopener noreferrer">
                                <motion.div whileHover={{ scale: 1.3 }} >
                                    <Icon>
                                        <DiscordIcon className="fill-dark-purple-600" />
                                    </Icon>
                                </motion.div>
                            </Link>
                            <Link href="mailto:chosensouldev@gmail.com" target="_blank" rel="noopener noreferrer">
                                <motion.div whileHover={{ scale: 1.3 }} >
                                    <Icon>
                                        <GmailIcon className="fill-dark-purple-600"/>
                                    </Icon>
                                </motion.div>
                            </Link>
                            <Link href="https://leetcode.com/u/chosensoull" target="_blank" rel="noopener noreferrer">
                                <motion.div whileHover={{ scale: 1.3 }} >
                                    <Icon>
                                        <LeetCodeIcon className="fill-dark-purple-600"/>
                                    </Icon>
                                </motion.div>
                            </Link>
                        </Box>
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