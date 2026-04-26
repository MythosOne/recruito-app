import { useState } from 'react';

import { AppRoutes } from './AppRoutes';
import { AuthModal } from '@/components/auth/AuthModal/AuthModal';

import './App.styled';

function App() {
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);

  return (
    <>
      <AppRoutes setAuthMode={setAuthMode} />
      <AuthModal
        isOpen={!!authMode}
        mode={authMode}
        onClose={() => setAuthMode(null)}
      />
    </>
  );
}

export default App;
