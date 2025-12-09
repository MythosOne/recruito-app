import { Header } from '@/components/Header/Header';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { VacancyList } from '@/components/VacancyList/VacancyList';
import { Footer } from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <VacancyList />
      <Footer />
    </>
  );
}

export default App;
