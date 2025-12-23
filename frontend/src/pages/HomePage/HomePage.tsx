import { HeroSection } from '@/components/HeroSection/HeroSection';
import { VacancyList } from '@/components/VacancyList/VacancyList';
import { vacancies } from '@/data/data';

import { HomePageContainer } from './HomePage.styled';


export const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection />
      <VacancyList vacancies={vacancies} />
    </HomePageContainer>
  );
};
