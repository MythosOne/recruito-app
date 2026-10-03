import { useContext } from 'react';
import { VacanciesForm } from '@/components/forms/VacanciesForm/VacanciesForm';
import { VacanciesContext } from '@/utils/VacanciesContext';
import type { Vacancy } from '@/types/Vacancy';

import { TitlePage } from '../CandidateProfilePage/CandidateProfilePage.styled';

const VacanciesPage = () => {
  const context = useContext(VacanciesContext);

  if (!context) {
    throw new Error('VacanciesPage must be used within VacanciesProvider');
  }

  const { setVacancies } = context;

  const handleCreateVacancy = (newVacancy: Vacancy) => {
    setVacancies((prevVacancies) => [...prevVacancies, newVacancy]);
  };

  return (
    <>
      <TitlePage>Vacancies Page</TitlePage>
      <VacanciesForm onCreateVacancy={handleCreateVacancy} />
    </>
  );
};

export default VacanciesPage;
