import { useContext } from 'react';
import { VacanciesContext } from '@/utils/VacanciesContext';

import { VacanciesListContainer, Title } from './VacanciesList.styled';
import { VacanciesCard } from '../VacanciesCard.tsx/VacanciesCard';

type VacanciesListProps = {
  recruiterId: string;
};

export const VacanciesList = ({ recruiterId }: VacanciesListProps) => {
  const context = useContext(VacanciesContext);

  if (!context) {
    throw new Error('VacanciesList must be used within VacanciesProvider');
  }

  const { vacancies, setVacancies } = context;

  const recruitersVacancies = vacancies.filter(
    (vacancy) => vacancy.recruiterId === recruiterId,
  );

  const handleDeleteVacancy = (vacancyId: string) => {
    setVacancies((prevVacancies) =>
      prevVacancies.filter(
        (vacancy) =>
          vacancy.id !== vacancyId || vacancy.recruiterId !== recruiterId,
      ),
    );
  };

  const handlePublishVacancy = (vacancyId: string) => {
    setVacancies((prevVacancies) =>
      prevVacancies.map((vacancy) =>
        vacancy.id === vacancyId && vacancy.recruiterId === recruiterId
          ? { ...vacancy, status: 'published' }
          : vacancy,
      ),
    );
  };

  return (
    <VacanciesListContainer>
      <Title>Vacancies List</Title>
      {recruitersVacancies.map((vacancy) => (
        <VacanciesCard
          key={vacancy.id}
          vacancy={vacancy}
          onDeleteVacancy={handleDeleteVacancy}
          onPublishVacancy={handlePublishVacancy}
        />
      ))}
    </VacanciesListContainer>
  );
};
