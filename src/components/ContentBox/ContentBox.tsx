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
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Calendar from "@components/Calendar/Calendar";
import SkillsGrid from "@components/SkillsGrid/SkillsGrid";
import ProjectCards from "@components/ProjectCards/ProjectCards";

export function ContentBox() {
    const currentDate = new Date();
    const currentYear: number = currentDate.getFullYear();

    return (
        <Container className="h-[80vh] w-screen overflow-auto no-scrollbar relative" >
            <Typography id="hello" className="top-0"></Typography>
            <Box
                className="sticky top-0 left-0 w-full h-1/4 z-998 pointer-events-none"
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
                
                <Typography variant="h1" className="text-dark-purple-600 sm:mt-[min(15vh,14rem)]
                 drop-shadow-[0_0_1.4rem_var(--color-dark-purple-850)] text-[clamp(2rem,12vw,6rem)]">Hello !</Typography>
                <Typography variant="h1" className="text-dark-purple-600 sm:mt-2 
                drop-shadow-[0_0_1.4rem_var(--color-dark-purple-850)] text-[clamp(2rem,12vw,6rem)]">Glad to see you</Typography>
                <Typography variant="h3" className="text-dark-purple-600 mb-[12rem] sm:mb-[20rem]
                 drop-shadow-[0_0_1.4rem_var(--color-dark-purple-850)] text-[clamp(1rem,4vw,4rem)]">Now I'll tell you more about myself</Typography>

                <Typography id="about-me" variant="h3" className="text-dark-purple-600 mb-4 text-[clamp(1rem,8vw,3rem)]">About Me</Typography>
                <Typography  variant="body1" className="text-dark-purple-600 p-6">I'm an ordinary programming enthusiast, a 
                    frontend/embedded systems developer. I started in 2024. I love to delve into deep topics like algorithms and 
                    operating systems, but I mainly publish school projects, which are for learning, on my GitHub account. I'm 
                    currently in college and don't have enough time for my own projects all my time goes to studying.</Typography>
                <Typography variant="body1" className="text-dark-purple-600 p-6">I'm studying to be a software developer in college.
                As I said, I enjoy building apps and websites and understanding low-level systems.</Typography>
                <Typography variant="body1" className="text-dark-purple-600 p-6">I was programming before, I remember how in 2023
                I made my first website using HTML and CSS for a computer science homework assignment in 7th grade. Back then, I 
                think I got an 11 for the work, and I liked it, so I started learning programming on my own, well specifically 
                frontend development. When I was learning, I didn’t know what directions existed, so I studied frontend and in 
                2024 I first learned about Git and GitHub, and that’s when I created my account chosensoull, but I had nothing to upload.</Typography>

                <Typography id="skills" variant="h3" className="text-dark-purple-600 mb-6 text-[clamp(1rem,8vw,3rem)]">My Skils</Typography>
                <SkillsGrid/>
                <Typography variant="h4" className="text-dark-purple-600 p-6 text-[clamp(1rem,8vw,2rem)]">My activity github</Typography>
                <Calendar username="chosensoull" year={currentYear}/>
                

                <Typography id="projects" variant="h3" className="text-dark-purple-600 mt-6 mb-6 text-[clamp(1rem,8vw,3rem)]">Projects</Typography>
                <ProjectCards/>
            </Box>

            <Box
                className="sticky bottom-0 left-0 w-full h-1/4 z-998 m-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to top, var(--color-dark-purple-950), transparent)',
                }}
            ></Box>
        </Container>
    )
}

export default ContentBox;