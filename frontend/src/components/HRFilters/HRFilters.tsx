import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import type { ChangeEvent } from 'react';
import { type FiltersState, initialFiltersState } from '@/types/Filters';

import {
  HRFiltersContainer,
  HRFiltersTitle,
  FilterBlock,
  SearchField,
  SearchInput,
  FilterFieldPosition,
  PositionSelect,
  FilterFieldStatus,
  StatusSelect,
  ResetFilterButton,
} from './HRFilters.styled';

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
  // console.log("Filters:", filters);
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

  const handleResetFilters = () => {
    setSearchInput('');
    onFiltersChange(initialFiltersState);
  };

  return (
    <HRFiltersContainer>
      <HRFiltersTitle>HR Filters</HRFiltersTitle>
      <FilterBlock>
        <SearchField>
          Search candidates
          <SearchInput
            name="search"
            value={searchInput}
            placeholder="Search candidate..."
            type="search"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </SearchField>

        <FilterFieldPosition>
          Position
          <PositionSelect
            name="position"
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
          </PositionSelect>
        </FilterFieldPosition>
        <FilterFieldStatus>
          Status
          <StatusSelect
            name="status"
            value={filters.status}
            onChange={(e) => handleFilterChange(e, 'status')}
          >
            <option value="">All statuses</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </StatusSelect>
        </FilterFieldStatus>
        <ResetFilterButton type="button" onClick={handleResetFilters}>
          Reset filters
        </ResetFilterButton>
      </FilterBlock>
    </HRFiltersContainer>
  );
};
