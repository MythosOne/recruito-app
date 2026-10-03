import { useContext } from 'react';
import { VacanciesContext } from '@/utils/VacanciesContext';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { VacancyList } from '@/components/VacancyList/VacancyList';

import { HomePageContainer } from './HomePage.styled';

type HomePageProps = {
  onLogin: () => void;
};

export const HomePage: React.FC<HomePageProps> = ({ onLogin }) => {
  const context = useContext(VacanciesContext);

  if (!context) {
  throw new Error('HomePage must be used within VacanciesProvider');
}

const { vacancies } = context;
console.log("Vacancies", vacancies)

  return (
    <HomePageContainer>
      <HeroSection onLogin={onLogin} />
      <VacancyList vacancies={vacancies} />
    </HomePageContainer>
  );
};
