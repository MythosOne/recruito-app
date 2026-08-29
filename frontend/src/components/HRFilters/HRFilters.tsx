import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import type { ChangeEvent } from 'react';
import { HRFiltersContainer, HRFiltersTitle } from './HRFilters.styled';
import { type FiltersState, initialFiltersState } from '@/types/Filters';

type FilterControlsProps = {
  filters: FiltersState;
  onFiltersChange: (filters: FiltersState) => void;
  availablePositions: string[];
};

export const HRFilters = ({
  filters,
  onFiltersChange,
  availablePositions,
}: FilterControlsProps) => {
  const [searchInput, setSearchInput] = useState(filters.search);
  const [debouncedSearch] = useDebounce(searchInput, 300);

  useEffect(() => {
    onFiltersChange({ ...filters, search: debouncedSearch });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]); 
  
  const handleFilterChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    position: string,
  ) => {
    onFiltersChange({ ...filters, [position]: e.target.value });
  };



  return (
    <HRFiltersContainer>
      <HRFiltersTitle>HR Filters</HRFiltersTitle>
      <label>
        Search candidates
        <input
          value={searchInput}
          placeholder="Search candidate..."
          type="search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </label>
      <label>
        Position
        <select
          value={filters.position}
          onChange={(e) => {
            handleFilterChange(e, 'position');
          }}
        >
          <option value="">All positions</option>
          {availablePositions.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
      </label>
      <label>
        Status
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange(e, 'status')}
        >
          <option value="">All statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </label>
      <button
        type="button"
        onClick={() => onFiltersChange(initialFiltersState)}
      >
        Reset filters
      </button>
    </HRFiltersContainer>
  );
};
