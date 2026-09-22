import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Loader } from './pages/HRDashboardPage/HRDashboardPage.styled';

type AppRoutesProps = {
  setAuthMode: (mode: 'login' | 'register') => void;
};

const CandidateProfilePageLazy = lazy(
  () => import('@/pages/CandidateProfilePage/CandidateProfilePage'),
);
const HRDashboardLazy = lazy(
  () => import('@/pages/HRDashboardPage/HRDashboardPage'),
);

export const AppRoutes: React.FC<AppRoutesProps> = ({ setAuthMode }) => {
  return (
    <>
      <Header
        onLogin={() => setAuthMode('login')}
        onRegister={() => setAuthMode('register')}
      />
      <Suspense fallback={<Loader>Loading...</Loader>}>
      <Routes>
        <Route
          path="/"
          element={<HomePage onLogin={() => setAuthMode('login')} />}
        />
        <Route path="/candidate" element={<CandidateProfilePageLazy />} />
        <Route path="/hr-dashboard/*" element={<HRDashboardLazy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Suspense>
      <Footer />
    </>
  );
};
