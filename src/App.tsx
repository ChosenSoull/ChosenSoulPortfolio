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