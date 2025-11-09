import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

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

const skills = [
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

const SkillsGrid = () => {
  return (
    <Box
      className="gap-12 md:p-4 lg:p-10"
      sx={{
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(6, 1fr)',
        },
      }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.95 }}
          className="bg-dark-purple-900 rounded-4xl p-6 flex flex-col items-center justify-center space-y-4"
        >
          {skill.icon}
          <Typography className='text-dark-purple-600 text-[18px]'>{skill.name}</Typography>
        </motion.div>
        
      ))}
    </Box>
  );
};

export default SkillsGrid;