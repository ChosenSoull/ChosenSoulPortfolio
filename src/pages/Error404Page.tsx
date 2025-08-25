import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container"

import { motion } from "framer-motion"

export function Error404() {
    return (
        <Container className="w-screen h-screen flex items-center justify-center flex-col">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="font-jeko text-[min(100vw,100vh)] text-white/30 absolute inset-0 flex items-center justify-end pointer-events-none"
            >
                :(
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [.26,-0.01,.35,1] }}
                className="text-center z-10 p-4"
            >
                <Typography variant="h1" className="font-jeko text-[min(20vw,20vh)] text-dark-purple-650 drop-shadow-lg drop-shadow-dark-purple-600/50">404</Typography>
                <Typography variant="body1" className="font-jeko text-[min(3.5vw,3.5vh)] mt-2 mb-12 text-white">
                    Oops! It seems that the page you are looking for is not available.
                </Typography>
                <Button variant="contained" className="font-jeko bg-dark-purple-700 hover:bg-dark-purple-750 p-4 text-[min(3vw,2vh)]
                    rounded-4xl drop-shadow-lg drop-shadow-dark-purple-600/50" onClick={() => window.location.href = '/'}>
                    Back to main page
                </Button>
            </motion.div>
        </Container>
    )
}
export default Error404;