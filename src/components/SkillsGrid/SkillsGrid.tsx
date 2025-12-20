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
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Skills } from './SkillsData';

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
          lg: 'repeat(5, 1fr)',
        },
      }}
    >
      {Skills.map((skill) => (
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