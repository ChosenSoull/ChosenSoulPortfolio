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
import { MaterialDesignContent } from 'notistack';
import { styled } from '@mui/material/styles';

export const StyledNotifications = styled(MaterialDesignContent)(({ theme: _ }) => ({
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'flex-start',
  gap: '12px',
  padding: '16px 24px',
  fontSize: '18px',
  outline: '3px solid var(--color-dark-purple-650)',
  filter: 'drop-shadow(0 0 1rem var(--color-dark-purple-750))',
  backgroundColor: 'var(--color-dark-purple-850)',
  borderRadius: '24px',
  color: 'var(--color-dark-purple-600)',
}));