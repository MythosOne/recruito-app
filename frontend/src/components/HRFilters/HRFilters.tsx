import { HRFiltersContainer, HRFiltersTitle } from './HRFilters.styled';

export const HRFilters = () => {
  return (
    <HRFiltersContainer>
      <HRFiltersTitle>HR Filters</HRFiltersTitle>
      <label>
        Position
        <select defaultValue="">
          <option value="">All positions</option>
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="design">UI/UX Designer</option>
        </select>
      </label>
      <label>
        Status
        <select defaultValue="">
          <option value="">All statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </label>
      <label>
        Search candidates
        <input placeholder="Name or position" type="search" />
      </label>
    </HRFiltersContainer>
  );
};
