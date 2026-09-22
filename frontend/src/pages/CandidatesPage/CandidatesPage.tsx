import { useState } from 'react';
import { type FiltersState, initialFiltersState } from '@/types/Filters';
import { candidates as initialCandidates } from '@/data/dataCandidates';
import type { Candidate } from '@/types/Candidate';

import { HRFilters } from '@/components/HRFilters/HRFilters';
import { CandidatesList } from '@/components/CandidatesList/CandidatesList';
import { PaginationControls } from '@/components/PaginationControls/PaginationControls';

const ITEMS_PER_PAGE = 7;

const CandidatesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FiltersState>(initialFiltersState);
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
//   console.log(candidates);

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

  const handleStatusChange = (
    candidateId: string,
    newStatus: 'approved' | 'rejected',
  ) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, status: newStatus }
          : candidate,
      ),
    );
  };

  return (
    <>
      <HRFilters
        filters={filters}
        onFiltersChange={handleFiltersChange}
        availablePositions={dataCandidatesPosition}
      />
      <CandidatesList
        candidates={paginatedCandidates}
        onStatusChange={handleStatusChange}
      />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default CandidatesPage;
