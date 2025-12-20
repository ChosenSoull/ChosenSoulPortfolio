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
import HTMLIcon from '@components/Icons/HTML';
import CSSIcon from '@components/Icons/CSS';
import JavaScriptIcon from '@components/Icons/JavaScript';
import TypeScriptIcon from '@components/Icons/TypeScript';
import ReactIcon from '@components/Icons/React';
import TailwindCssIcon from '@components/Icons/TailwindCss';
import MUIIcon from '@components/Icons/MUI';
import CPPIcon from '@components/Icons/C++';
import CIcon from '@components/Icons/C';
import FramerMotionIcon from '@components/Icons/FramerMotion';

const icons = {
  html: <HTMLIcon className="fill-dark-purple-600"/>,
  css: <CSSIcon className="fill-dark-purple-600"/>,
  js: <JavaScriptIcon className="fill-dark-purple-600"/>,
  ts: <TypeScriptIcon className="fill-dark-purple-600"/>,
  react: <ReactIcon className="fill-dark-purple-600"/>,
  tailwind: <TailwindCssIcon className="fill-dark-purple-600"/>,
  mui: <MUIIcon className="fill-dark-purple-600"/>,
  framerMotion: <FramerMotionIcon className="fill-dark-purple-600"/>,
  c: <CIcon mainColor="#5A199B" darkColor="#541d82" lightColor="#6a27a1" textColor="#E0AAFE"/>,
  cpp: <CPPIcon mainColor="#5A199B" darkColor="#541d82" lightColor="#6a27a1" textColor="#E0AAFE"/>,
};

export const Skills = [
  { name: 'HTML', icon: icons.html },
  { name: 'CSS', icon: icons.css },
  { name: 'JS', icon: icons.js },
  { name: 'TS', icon: icons.ts },
  { name: 'React', icon: icons.react },
  { name: 'Tailwind', icon: icons.tailwind },
  { name: 'MUI', icon: icons.mui },
  { name: 'Motion', icon: icons.framerMotion },
  { name: 'C', icon: icons.c },
  { name: 'C++', icon: icons.cpp },
];