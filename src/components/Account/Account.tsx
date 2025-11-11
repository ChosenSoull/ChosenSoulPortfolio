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
import Avatar from "@mui/material/Avatar"
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import getGithubUserInfo from '@hooks/getGithubUserInfo';

export function Account() {
    const { user } = getGithubUserInfo('chosensoull');
    if (!user) {
        return <div className="w-screen h-screen text-dark-purple-600 justify-center items-center">User not found</div>
    }

    return (
        <Box className="flex sm:justify-center items-center gap-4 sm:mt-12 sm:w-full drop-shadow-[0_0_2rem_var(--color-dark-purple-750)]">
            <motion.div whileHover={{ scale: 1.1 }} >
                <Avatar className="w-[50px] h-[50px] sm:w-[min(6vw,100px)] sm:h-[min(6vw,100px)] outline-3 outline-dark-purple-700" alt={user.login} src={user.avatarUrl} />
            </motion.div>
            <Typography variant="body1" className="text-2xl sm:text-[min(2vw,24px)] text-dark-purple-600">{user.name}</Typography>
        </Box>
    )
}

export default Account;