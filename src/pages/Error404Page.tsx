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
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";

import { motion } from "framer-motion";

export function Error404() {
    return (
        <Container className="w-screen h-screen flex items-center justify-center flex-col">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="text-[min(100vw,100vh)] text-white/30 absolute inset-0 flex items-center justify-end pointer-events-none"
            > :( </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [.26,-0.01,.35,1] }}
                className="text-center z-10 p-4"
            >
                <Typography variant="h1" className="text-[min(20vw,20vh)] text-dark-purple-650 drop-shadow-lg drop-shadow-dark-purple-600/50">404</Typography>
                <Typography variant="body1" className="text-[min(3.5vw,3.5vh)] mt-2 mb-12 text-white">
                    Oops! It seems that the page you are looking for is not available.
                </Typography>
                <Button variant="contained" className="bg-dark-purple-700 hover:bg-dark-purple-750 p-4 text-[min(3vw,2vh)]
                    rounded-4xl drop-shadow-lg drop-shadow-dark-purple-600/50" onClick={() => window.location.href = '/'}>
                    Back to main page
                </Button>
            </motion.div>
        </Container>
    )
}
export default Error404;