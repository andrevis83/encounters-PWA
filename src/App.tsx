import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { initDB } from 'react-indexed-db-hook';
import '@assets/style.scss';
import Header from '@components/Header';
import Navbar from '@components/Navbar';
import { DBConfig } from '@config/db.config';
import { alignments } from '@config/alignments';
import { pgClasses } from '@config/classes';
import { useInitDb } from '@hooks/useInitDb';
import AppRoutes from '@routes';
import EncountersTheme from '@theme';

initDB(DBConfig);

function App() {
  useInitDb<Alignment>('alignments', alignments);
  useInitDb<PGClass>('pgClasses', pgClasses);

  return (
    <EncountersTheme>
      <React.Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Header />
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </React.Suspense>
    </EncountersTheme>
  );
}

export default App;
