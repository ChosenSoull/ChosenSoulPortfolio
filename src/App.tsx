import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from '@components/Loader/Loader';
import "./App.css";

const MainLayout = React.lazy(() => import('@components/MainLayout'));

const HomePage = React.lazy(() => import('@pages/HomePage'));
{/*const AboutMePage = React.lazy(() => import('@pages/AboutMePage'));
const ProjectsPage = React.lazy(() => import('@pages/ProjectsPage'));
const SkilsPage = React.lazy(() => import('@pages/SkilsPage'));
const Error404Page = React.lazy(() => import('@pages/Error404Page')); */}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
{/*            <Route path="aboutme" element={<AboutMePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="skils" element={<SkilsPage />} />*/}
          </Route>
{/*          <Route path="*" element={<Error404Page />} /> */} 
        </Routes>
      </Suspense>
    </BrowserRouter>  
  );
}

export default App;