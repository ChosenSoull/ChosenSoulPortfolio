import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
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

const ProjectCards = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <Box
      className="gap-12 p-4 lg:p-10"
      sx={{
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
      }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative rounded-4xl bg-dark-purple-900 p-6 flex flex-col items-center justify-between"
          onMouseEnter={() => setIsHovered(project.id)}
          onMouseLeave={() => setIsHovered(null)}
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
    </Box>
  );
};

export default ProjectCards;