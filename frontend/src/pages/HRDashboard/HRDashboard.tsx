import { useState } from 'react';
import { type FiltersState, initialFiltersState } from '@/types/Filters';

import { Sidebar } from '@/components/Sidebar/Sidebar';
import { HRFilters } from '@/components/HRFilters/HRFilters';
import { CandidatesList } from '@/components/CandidatesList/CandidatesList';
import { PaginationControls } from '@/components/PaginationControls/PaginationControls';
import { candidates } from '@/data/dataCandidates';

import { HRDashboardContainer, Title } from './HRDashboard.styled';

const ITEMS_PER_PAGE = 7;

export const HRDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FiltersState>(initialFiltersState);

  const dataCandidatesPosition = [
    ...new Set(candidates.map((el) => el.candidateInfo.position)),
  ];
  const filteredCandidates = candidates.filter((candidate) => {
    return (
      (candidate.candidateInfo.position === filters.position ||
        !filters.position) &&
      (candidate.status === filters.status || !filters.status) &&
      (`${candidate.candidateInfo.firstName} ${candidate.candidateInfo.lastName}`
        .toLowerCase()
        .trim()
        .includes(filters.search.toLowerCase().trim()) ||
        !filters.search)
    );
  });

  const totalPages = Math.ceil(filteredCandidates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCandidates = filteredCandidates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  // Reset to the first page when filters change
  const handleFiltersChange = (newFilters: FiltersState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <HRDashboardContainer>
      <Title>HR Dashboard Page</Title>
      <Sidebar />
      <HRFilters
        filters={filters}
        onFiltersChange={handleFiltersChange}
        availablePositions={dataCandidatesPosition}
      />
      <CandidatesList candidates={paginatedCandidates} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </HRDashboardContainer>
  );
};
