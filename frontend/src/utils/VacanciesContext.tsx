import {createContext} from 'react';
import type {Vacancy} from '@/types/Vacancy';

type VacanciesContextType = {
  vacancies: Vacancy[];
  setVacancies: React.Dispatch<React.SetStateAction<Vacancy[]>>;
};

export const VacanciesContext = createContext<VacanciesContextType | null>(null);