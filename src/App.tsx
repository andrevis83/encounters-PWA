import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@assets/style.scss';
import Navbar from '@components/Navbar';
import AppRoutes from '@routes';
import EncountersTheme from '@theme';

function App() {
  return (
    <EncountersTheme>
      <React.Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </React.Suspense>
    </EncountersTheme>
  );
}

export default App;
