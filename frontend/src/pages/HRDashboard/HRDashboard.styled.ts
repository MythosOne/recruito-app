import { theme } from '@/theme/theme';
import styled from '@emotion/styled';
const { breakpoints } = theme;

export const HRDashboardContainer = styled.main`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  box-sizing: border-box;

  grid-template-areas:
      'title'
      'hr-filters'
      'candidates-list'
      'pagination';

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-areas:
      'title title'
      'sidebar hr-filters'
      'sidebar candidates-list'
      'sidebar pagination';
  }
`;

export const Title = styled.h1`
  grid-area: title;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
