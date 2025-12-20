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
export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

export const Projects: Project[] = [
  {
    id: 1,
    image: "/assets/images/myjourneyprogramming.png",
    title: 'My Informatics journal',
    description: 'My computer science project is 09.05.25, where I share what I\'ve learned during this school year about programming and tell you more about myself.',
    technologies: ['Vite', 'React', 'TypeScript', 'CSS', 'PHP', 'MySQL'],
  },
  {
    id: 2,
    image: "/assets/images/example.png",
    title: 'Image and videos on ASCII',
    description: 'Convert images and videos to ASCII with colors.',
    technologies: ['C', 'FFmpeg'],
  },
  {
    id: 3,
    image: "/assets/images/gameswords.png",
    title: 'Sword clicker',
    description: 'All in all, this was the third project I ever made. I didn\'t know a lot back then, and that\'s why it turned out poorly.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    id: 4,
    image: "/assets/images/portfolio.png",
    title: 'My Portfolio',
    description: 'the project was initially for familiarization with new libraries for me tailwind css, MUI, Framer motion. But eventually it grew into my portfolio :)',
    technologies: ['Vite', 'React', 'Tailwind', 'TypeScript', 'MUI', 'Framer Motion'],
  },
];