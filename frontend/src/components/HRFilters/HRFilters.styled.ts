import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { shadows } = theme;

export const HRFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100px; */
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const HRFiltersTitle = styled.h2`
  margin: 0 auto;
  font-size: 1.5rem;
  color: #333;
`;

export const FilterBlock = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
`;

export const SearchField = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 14px;
  padding: 4px;

  transition: var(--animation-border-color);

  &:hover,
  &:focus {
    outline: none;
    border: 2px solid var(--pr-color-hover);
  }
`;

export const FilterFieldPosition = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const PositionSelect = styled.select`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 14px;
  color: var(--text-secondary);

  transition: var(--animation-border-color);

  &:hover,
  &:focus {
    outline: none;
    border: 2px solid var(--pr-color-hover);
  }
`;

export const FilterFieldStatus = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const StatusSelect = styled.select`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 14px;
  color: var(--text-secondary);

  transition: var(--animation-border-color);

  &:hover,
  &:focus {
    outline: none;
    border: 2px solid var(--pr-color-hover);
  }
`;

export const ResetFilterButton = styled.button`
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: #f4e041;
  margin: 10px auto 0;

  cursor: pointer;

  transition:
    var(--animation-button);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #f5cc66;
    box-shadow: ${shadows.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:disabled:hover,
  &:disabled:focus-visible {
    transform: none;
  }
`;
