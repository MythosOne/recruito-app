import styled from '@emotion/styled';

import { theme } from '@/theme/theme';
const { breakpoints, shadows } = theme;

export const ProfilePageContainer = styled.section`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  grid-template-areas:
    'profile-card'
    'available-jobs'
    'application-status';

  border: 1px solid #ccc;
  border-radius: 8px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-areas:
      'profile-card available-jobs'
      'profile-card application-status';
  }
`;

export const ProfileCardArea = styled.div`
  grid-area: profile-card;

  border: 2px solid #f5cc66;
  border-radius: 8px;
  box-shadow: ${shadows.hoverShadow};
`;

export const AvailableJobsArea = styled.div`
  grid-area: available-jobs;

  border: 2px solid #f5cc66;
  border-radius: 8px;
  box-shadow: ${shadows.hoverShadow};
`;

export const ApplicationStatusArea = styled.div`
  grid-area: application-status;

  border: 2px solid #f5cc66;
  border-radius: 8px;
  box-shadow: ${shadows.hoverShadow};
`;
