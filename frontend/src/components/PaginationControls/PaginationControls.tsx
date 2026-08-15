import Pagination from '@mui/material/Pagination';

import { PaginationContainer } from './PaginationControls.styled';
import type { ChangeEvent } from 'react';

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) => {
  const handleChange = (_event:ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <PaginationContainer aria-label="Candidates pagination">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        shape="rounded"
        color="primary"
      ></Pagination>
    </PaginationContainer>
  );
};
