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
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from '@components/Loader/Loader';
import "./App.css";

const MainPage = React.lazy(() => import('@pages/MainPage'));
const Error404Page = React.lazy(() => import('@pages/Error404Page')); 

function App() {
  return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </Suspense>
      </BrowserRouter>  
  );
}

export default App;