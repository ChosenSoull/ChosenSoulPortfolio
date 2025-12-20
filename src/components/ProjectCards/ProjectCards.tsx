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
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Projects, type Project } from '@components/ProjectCards/ProjectData'
import ProjectModal from '@components/ProjectCards/ProjectModal/ProjectModal';

const ProjectCards = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <Box
      className="gap-12 p-4 lg:p-10"
      sx={{
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
      }}
    >
      {Projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative rounded-4xl bg-dark-purple-900 p-6 flex flex-col items-center justify-between"
          onMouseEnter={() => setIsHovered(project.id)}
          onMouseLeave={() => setIsHovered(null)}
          onClick={() => setSelectedProject(project)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative z-10">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg mb-4" />
            <Typography variant="h5" className="text-dark-purple-600 text-center font-bold mb-2">
              {project.title}
            </Typography>
            <Typography variant="body1" className="text-dark-purple-650 text-center text-[clamp(0.9rem,2vw,1rem)]">
              {project.description}
            </Typography>
          </div>
          {isHovered === project.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full bg-dark-purple-900/70 flex flex-col items-center justify-center p-4 rounded-4xl z-20"
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="bg-dark-purple-800 rounded-4xl p-2">
                    <Typography variant="body2" className="text-dark-purple-600 font-semibold">
                      {tech}
                    </Typography>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </Box>
  );
};

export default ProjectCards;