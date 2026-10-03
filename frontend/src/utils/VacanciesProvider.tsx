import { useState, useEffect, type ReactNode } from 'react';
import { vacancies as initialVacancies } from '@/data/dataVacancies';
import type { Vacancy } from '@/types/Vacancy';

import { VacanciesContext } from './VacanciesContext';

type VacanciesProviderProps = {
  children: ReactNode;
};

export const VacanciesProvider = ({ children }: VacanciesProviderProps) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>(() => {
    const storedVacancies = localStorage.getItem('vacancies');
    return storedVacancies ? JSON.parse(storedVacancies) : initialVacancies;
  });

  useEffect(() => {
    localStorage.setItem('vacancies', JSON.stringify(vacancies));
  }, [vacancies]);

  return (
    <VacanciesContext.Provider value={{ vacancies, setVacancies }}>
      {children}
    </VacanciesContext.Provider>
  );
};
