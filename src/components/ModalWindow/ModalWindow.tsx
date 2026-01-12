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
import React from 'react';
import { Modal, Box } from '@mui/material';
import { StyledModal } from '@components/ModalWindow/Styles';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@hooks/useIsMobile';

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string | number;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ 
    isOpen, 
    onClose, 
    children, 
    maxWidth = 500 
}) => {
		const isMobile = useIsMobile(); 
		const StylesModal = StyledModal();

    return (
        <Modal
            open={isOpen} 
            onClose={onClose}
            closeAfterTransition
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <AnimatePresence>
                {isOpen && (
                    <Box
                        key="modal-content"
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2,
                            type: "spring", 
                            stiffness: 250, 
                            damping: 20,
                            mass: 3
                        }}
                        sx={{
                            ...StylesModal,
                            position: 'relative',
                            width: isMobile ? '70%': '100%',
                            maxWidth: maxWidth,
                        }}
                    >
                        {children}
                    </Box>
                )}
            </AnimatePresence>
        </Modal>
    );
};
