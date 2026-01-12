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
import { ModalWindow } from '@components/ModalWindow/ModalWindow';
import type { ProjectModalProps } from '@components/ProjectCards/ProjectModal/ProjectModalProps';
import { AnimatePresence, motion } from 'framer-motion';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <ModalWindow 
      isOpen={!!project} 
      onClose={onClose}
    >
      <AnimatePresence mode="wait">
        {project && (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box className="flex flex-col gap-4">
              <img 
                src={project.image} 
                className="w-full rounded-xl object-cover max-h-[300px]" 
                alt={project.title}
              />

              <Typography variant="h4" className="text-dark-purple-600 
							text-[23px] sm:text-4xl">
                {project.title}
              </Typography>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 sm:px-3 py-1 bg-dark-purple-800 text-dark-purple-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <Typography className="text-dark-purple-650 text-[14px] sm:text-lg leading-relaxed">
                {project.description}
              </Typography>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalWindow>
  );
};

export default ProjectModal;
