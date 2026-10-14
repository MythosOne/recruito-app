import { useContext } from 'react';
import { VacanciesForm } from '@/components/forms/VacanciesForm/VacanciesForm';
import { VacanciesList } from '@/components/VacanciesList/VacanciesList';
import { VacanciesContext } from '@/utils/VacanciesContext';
import type { Vacancy } from '@/types/Vacancy';

import { TitlePage } from '../CandidateProfilePage/CandidateProfilePage.styled';

const currentRecruiterId = 'recruiter-123';

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
      <VacanciesForm
        onCreateVacancy={handleCreateVacancy}
        currentRecruiterId={currentRecruiterId}
      />
      <VacanciesList recruiterId={currentRecruiterId} />
    </>
  );
};

export default VacanciesPage;
