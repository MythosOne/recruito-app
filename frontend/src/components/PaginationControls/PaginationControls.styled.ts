import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const {
  colors: { primary, secondary },
} = theme;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  
  .Mui-selected {
    background-color: ${primary} !important;
  }

  .MuiPaginationItem-root:hover {
    background-color: ${secondary};
  }
`;
