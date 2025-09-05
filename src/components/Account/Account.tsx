import Avatar from "@mui/material/Avatar"
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import getGithubUserInfo from '@hooks/getGithubUserInfo';

export function Account() {
    const { user } = getGithubUserInfo('chosensoull');
    if (!user) {
        return <div className="w-screen h-screen font-jeko text-dark-purple-600 justify-center items-center">User not found</div>
    }

    return (
        <Box className="flex justify-center items-center gap-4 mt-12 w-full drop-shadow-[0_0_2rem_var(--color-dark-purple-750)]">
            <motion.div whileHover={{ scale: 1.1 }} >
                <Avatar className="w-[min(6vw,100px)] h-[min(6vw,100px)] outline-3 outline-dark-purple-700" alt={user.login} src={user.avatarUrl} />
            </motion.div>
            <Typography variant="body1" className="font-jeko text-[min(2vw,24px)] text-dark-purple-600">{user.name}</Typography>
        </Box>
    )
}

export default Account;