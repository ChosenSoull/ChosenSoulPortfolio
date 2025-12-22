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
import React from "react";
import { useEffect, useRef, Suspense } from "react";
import { useInView } from 'react-intersection-observer';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocale } from "@locale/locale";
import { useInteractiveNotification } from "@hooks/Notifications/useInteractiveNotification";
import { useStaticNotification } from "@hooks/Notifications/useStaticNotification";
import { initGA } from "@hooks/useGoogleAnalytics";
import { AutoTrigger } from "../AutoTrigger/AutoTrigger";

const ProjectCards = React.lazy(() => import("@components/ProjectCards/ProjectCards"));
const SkillsGrid = React.lazy(() => import("@components/SkillsGrid/SkillsGrid"));
const Calendar = React.lazy(() => import("@components/Calendar/Calendar"));

export function ContentBox() {
    const currentDate = new Date();
    const currentYear: number = currentDate.getFullYear();
    const [ t ] = useLocale();
    const { ref, inView } = useInView({ triggerOnce: true });

    const ShowIntNotification = useInteractiveNotification();
    const ShowStaticNotification = useStaticNotification();

    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) return;
        isMounted.current = true;

        const cookie = localStorage.getItem('cookie');

        if (cookie == "yes") {
            initGA("G-S4GHYFJXNE");
        } else if (cookie == "no") {

        } else {
            ShowIntNotification("Cookie", 
            () => {
                localStorage.setItem("cookie", "yes");
                initGA("G-S4GHYFJXNE");
            }, 
            () => {
                localStorage.setItem("cookie", "no");
            }
            );
        }
    }, []);

    const PutStarrGithubRepo = () => {
        ShowStaticNotification(
            <div>
                <p className="text-[14px] sm:text-auto">{t("PutStarrGithub")} 
                <a className="text-dark-purple-700 ml-1" href="https://github.com/ChosenSoull/ChosenSoulPortfolio">{t("repo")}</a>
								</p>	
            </div>
        )
    }

    return (
        <Container className="h-[80vh] w-screen overflow-auto no-scrollbar relative" >
            <Typography id="hello" className="top-0"></Typography>
            <Box
                className="sticky top-0 left-0 w-full h-1/4 z-997 pointer-events-none"
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
                 drop-shadow-[0_0_1.4rem_var(--color-dark-purple-850)] text-[clamp(2rem,12vw,6rem)]">{t('hello')}</Typography>
                <Typography variant="h1" className="text-dark-purple-600 sm:mt-2 
                drop-shadow-[0_0_1.4rem_var(--color-dark-purple-850)] text-[clamp(2rem,12vw,6rem)]">{t("Glad to see you")}</Typography>
                <Typography variant="h3" className="text-dark-purple-600 mb-[12rem] sm:mb-[20rem]
                 drop-shadow-[0_0_1.4rem_var(--color-dark-purple-850)] text-[clamp(1rem,4vw,4rem)]">{t("Now I'll tell you more about myself")}</Typography>

                <Typography id="about-me" variant="h3" className="text-dark-purple-600 mb-4 text-[clamp(1rem,8vw,3rem)]">{t("tabs.About Me")}</Typography>
                <Typography  variant="body1" className="text-dark-purple-600 p-6">{t("paragraph1")}</Typography>
                <Typography variant="body1" className="text-dark-purple-600 p-6">{t("paragraph2")}</Typography>
                <Typography variant="body1" className="text-dark-purple-600 p-6">{t("paragraph3")}</Typography>

                <Typography id="skills" variant="h3" className="text-dark-purple-600 mb-6 text-[clamp(1rem,8vw,3rem)]">{t("My Skils")}</Typography>
                <SkillsGrid/>

                <Typography variant="h4" className="text-dark-purple-600 p-6 text-[clamp(1rem,8vw,2rem)]">{t("My activity github")}</Typography>
                <div ref={ref} className="flex flex-col">
                    {inView && (
                        <Suspense fallback={
                            <div className="flex-1 w-full flex items-center justify-center text-center text-dark-purple-600 text-[clamp(1rem,8vw,2rem)]">
                                {t("Loading")}
                            </div>
                        }>
                            <Calendar username="chosensoull" year={currentYear}/>
                        </Suspense>
                    )}
                </div>

                <Typography id="projects" variant="h3" className="text-dark-purple-600 mt-6 sm:mb-6 text-[clamp(1rem,8vw,3rem)]">{t("tabs.Projects")}</Typography>
                <ProjectCards/>

                <AutoTrigger variant="infinity" minH="1px" onVisible={PutStarrGithubRepo}>
                    <div></div>
                </AutoTrigger>
            </Box>

            <Box
                className="sticky bottom-0 left-0 w-full h-1/4 z-997 m-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to top, var(--color-dark-purple-950), transparent)',
                }}
            ></Box>
        </Container>
    )
}

export default ContentBox;
