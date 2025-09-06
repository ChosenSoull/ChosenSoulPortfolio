import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Calendar from "@components/Calendar/Calendar";
import SkillsGrid from "@components/SkillsGrid/SkillsGrid";

export function ContentBox() {
    return (
        <Container className="h-[80vh] w-screen overflow-auto no-scrollbar relative" >
            <Box
                className="sticky top-0 left-0 w-full h-1/4 z-999 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, var(--color-dark-purple-950), transparent)',
                }}
            ></Box>
            
            <Box
                style={{
                    marginTop: '-10%',
                    marginBottom: '-10%'
                }}
            >
                
                <Typography id="hello" variant="h1" className="text-dark-purple-600 mt-[min(15vh,14rem)]
                 drop-shadow-[0_0_1.4rem_var(--color-dark-purple-850)]">Hello !</Typography>
                <Typography variant="h1" className="text-dark-purple-600 mt-2 
                drop-shadow-[0_0_1.4rem_var(--color-dark-purple-850)]">Glad to see you</Typography>
                <Typography variant="h3" className="text-dark-purple-600 mb-[20rem]
                 drop-shadow-[0_0_1.4rem_var(--color-dark-purple-850)]">Now I'll tell you more about myself</Typography>

                <Typography id="about-me" variant="h4" className="text-dark-purple-600 mb-4">About Me</Typography>
                <Typography  variant="body1" className="text-dark-purple-600 p-6">I'm an ordinary programming enthusiast, a 
                    frontend/embedded systems developer. I started in 2024. I love to delve into deep topics like algorithms and 
                    operating systems, but I mainly publish school projects, which are for learning, on my GitHub account. I'm 
                    currently in college and don't have enough time for my own projects all my time goes to studying.</Typography>
                <Typography variant="body1" className="text-dark-purple-600 p-6">I'm studying to be a software developer.
                    As I said, I enjoy creating apps and websites, and I also like to understand low-level systems.</Typography>

                <Typography id="skills" variant="h4" className="text-dark-purple-600 mb-6">My Skils</Typography>
                <SkillsGrid/>
                <Typography variant="h5" className="text-dark-purple-600  p-6">My activity github</Typography>
                <Calendar username="chosensoull" year={2025}/>

                <Typography id="projects" variant="h4" className="text-dark-purple-600 mt-6 mb-6">Projects</Typography>
            </Box>

            <Box
                className="sticky bottom-0 left-0 w-full h-1/4 z-999 m-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to top, var(--color-dark-purple-950), transparent)',
                }}
            ></Box>
        </Container>
    )
}

export default ContentBox;