import { useState } from 'react';

import { Sidebar } from '@/components/Sidebar/Sidebar';
import { HRFilters } from '@/components/HRFilters/HRFilters';
import { CandidatesList } from '@/components/CandidatesList/CandidatesList';
import { PaginationControls } from '@/components/PaginationControls/PaginationControls';
import { candidates } from '@/data/dataCandidates';

import { HRDashboardContainer, Title } from './HRDashboard.styled';

const ITEMS_PER_PAGE = 5;

export const HRDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(candidates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCandidates = candidates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <HRDashboardContainer>
      <Title>HR Dashboard Page</Title>
      <Sidebar />
      <HRFilters />
      <CandidatesList candidates={paginatedCandidates} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </HRDashboardContainer>
  );
};
