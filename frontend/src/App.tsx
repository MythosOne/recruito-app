import { useState } from 'react';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { AuthModal } from '@/components/auth/AuthModal/AuthModal';

import './App.styled';
import { HomePage } from './pages/HomePage/HomePage';
// import { AuthPage } from './pages/AuthPage/AuthPage';

function App() {
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);

  return (
    <>
      <Header
        onLogin={() => setAuthMode('login')}
        onRegister={() => setAuthMode('register')}
      />
      <HomePage onLogin={() => setAuthMode('login')} />
      <AuthModal isOpen={!!authMode} mode={authMode} onClose={() => setAuthMode(null)} />
      <Footer />
    </>
  );
}

export default App;
