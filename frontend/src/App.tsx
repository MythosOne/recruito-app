import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

import './App.styled';
import { HomePage } from './pages/HomePage/HomePage';
import { AuthPage } from './pages/AuthPage/AuthPage';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AuthPage />
      <Footer />
    </>
  );
}

export default App;
