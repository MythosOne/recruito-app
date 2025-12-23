import { useState } from 'react';
import { VacancyCard } from '@/components/VacancyCard/VacancyCard';
import type { Vacancy } from '@/types/Vacancy';
import Pagination from '@mui/material/Pagination';

import { Section, SectionTitle, ListVacancy } from './VacancyList.styled';

const ITEMS_PER_PAGE = 6;

type VacancyListProps = {

  vacancies: Vacancy[];
};

export const VacancyList: React.FC<VacancyListProps> = ({ vacancies }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (_ : unknown, page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedVacancies = vacancies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Section>
      <SectionTitle>Open Vacancies</SectionTitle>
      <ListVacancy>
        {selectedVacancies.map((vacancie) => (
          <VacancyCard key={vacancie.id} vacancie={vacancie} />
        ))}
      </ListVacancy>
      <Pagination
        count={Math.ceil(vacancies.length / ITEMS_PER_PAGE)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#f4e041',
            color: '#000',
          },
          '& .MuiPaginationItem-root.Mui-selected:hover': {
            backgroundColor: '#f5cc66',
          },
          marginTop: '10px',
        }}
      />
    </Section>
  );
};
