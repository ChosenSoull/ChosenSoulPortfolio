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
import { useIsMobile } from '@hooks/useIsMobile';

export const StyledModal = () => {
	const Mobile = useIsMobile();
	
	const modalStyle = {
  	position: 'relative' as 'relative',
  	transform: 'translate(-50%, -50%)',
  	width: '90%',
  	maxWidth: '600px',
 		bgcolor: 'var(--color-dark-purple-900)',
  	border: '3px solid var(--color-dark-purple-650)',
  	boxShadow: '0 0 1rem var(--color-dark-purple-800)',
  	borderRadius: '36px',
  	p: Mobile ? 3 : 4,
  	outline: 'none',
	};

	return modalStyle;
}
