import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { breakpoints, shadows } = theme;

export const ApplicationSection = styled.section`
  grid-area: application-status;
  /* overflow: auto; */
  height: 440px;

  border: 2px solid #f5cc66;
  border-radius: 8px;
  box-shadow: ${shadows.hoverShadow};
`;

export const ApplicationSectionHeader = styled.div`
  border-bottom: 2px solid #f5cc66;
  background-color: #f4e041;
`;

export const ApplicationSectionTitle = styled.h2`
  /* border-bottom: 2px solid #f5cc66;
  background-color: #f4e041; */
  margin: 0;
  padding: 8px;
`;

export const StatusList = styled.ul`
  overflow: scroll;
  height: 350px;
`;

export const ListItem = styled.li``;
