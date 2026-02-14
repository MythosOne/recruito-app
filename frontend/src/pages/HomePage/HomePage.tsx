import { HeroSection } from '@/components/HeroSection/HeroSection';
import { VacancyList } from '@/components/VacancyList/VacancyList';
import { vacancies } from '@/data/data';

import { HomePageContainer } from './HomePage.styled';

type HomePageProps = {
  onLogin: () => void;
};

export const HomePage: React.FC<HomePageProps> = ({ onLogin }) => {
  return (
    <HomePageContainer>
      <HeroSection  onLogin={onLogin} />
      <VacancyList vacancies={vacancies} />
    </HomePageContainer>
  );
};
