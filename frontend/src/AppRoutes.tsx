import { Routes, Route } from 'react-router-dom';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { CandidateProfilePage } from '@/pages/CandidateProfilePage/CandidateProfilePage';
import { HRDashboard } from './pages/HRDashboard/HRDashboard';

type AppRoutesProps = {
  setAuthMode: (mode: 'login' | 'register') => void;
};

export const AppRoutes: React.FC<AppRoutesProps> = ({ setAuthMode }) => {
  return (
    <>
      <Header
        onLogin={() => setAuthMode('login')}
        onRegister={() => setAuthMode('register')}
      />
      <Routes>
        <Route
          path="/"
          element={<HomePage onLogin={() => setAuthMode('login')} />}
        />
        <Route path="/candidate" element={<CandidateProfilePage />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
};
