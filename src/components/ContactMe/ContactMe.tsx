import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";

import GithubIcon from '@components/Icons/Github';
import TelegramIcon from '@components/Icons/Telegram';
import GmailIcon from '@components/Icons/Gmail';
import DiscordIcon from '@components/Icons/Discord';
import LeetCodeIcon from '@components/Icons/Leetcode';

export function ContactMe() {

    return (
        <Box className="w-[90%] mb-7">
            <motion.div whileHover={{ scale: 1.1 }} >
                <Typography variant="body1" className="flex font-jeko text-[min(2vw,18px)] text-dark-purple-600 
                    justify-center mb-4 drop-shadow-[0_0_1rem_var(--color-dark-purple-700)]">Contact me</Typography>
            </motion.div>
            <Box className="flex justify-center gap-[min(1vw,16px)]">
                <Link href="https://t.me/ChosenS0ul" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.3 }} >
                        <Icon>
                            <TelegramIcon className="fill-dark-purple-600" />
                        </Icon>
                    </motion.div>
                </Link>
                <Link href="https://github.com/ChosenSoull" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.3 }} >
                        <Icon>
                            <GithubIcon className="fill-dark-purple-600" />
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
                            <GmailIcon className="fill-dark-purple-600" />
                        </Icon>
                    </motion.div>
                </Link>
                <Link href="https://leetcode.com/u/chosensoull" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.3 }} >
                        <Icon>
                            <LeetCodeIcon className="fill-dark-purple-600" />
                        </Icon>
                    </motion.div>
                </Link>
            </Box>
        </Box>
    )
}

export default ContactMe;