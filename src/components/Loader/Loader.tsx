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
import React from "react";

import '@components/Loader/Loader.css';

const Loading: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader4"></div>
      <div className="loading-text-container">
        <span className="loading-text">L</span>
        <span className="loading-text">o</span>
        <span className="loading-text">a</span>
        <span className="loading-text">d</span>
        <span className="loading-text">i</span>
        <span className="loading-text">n</span>
        <span className="loading-text">g</span>
        <span className="loading-text">.</span>
        <span className="loading-text">.</span>
        <span className="loading-text">.</span>
      </div>
    </div>
  );
};

export default Loading;