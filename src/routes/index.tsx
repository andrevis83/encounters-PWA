import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

const Encounters = React.lazy(() => import('../pages/encounters'));
const Home = React.lazy(() => import('../pages/home'));
const Characters = React.lazy(() => import('../pages/characters'));
const Monsters = React.lazy(() => import('../pages/monsters'));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/encounters" element={<Encounters />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/monsters" element={<Monsters />} />
    </Routes>
  );
}

export default AppRoutes;
