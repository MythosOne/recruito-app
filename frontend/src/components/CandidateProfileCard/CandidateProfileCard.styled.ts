import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { /*breakpoints*/ shadows } = theme;

export const CandidateProfileSection = styled.section`
  grid-area: profile-card;
  /* width: 400px; */
  
  border: 2px solid #f5cc66;
  border-radius: 8px;
  box-shadow: ${shadows.hoverShadow};
`;

export const SectionTitle = styled.h2`
  border-bottom: 2px solid #f5cc66;
  background-color: #f4e041;
  margin: 0;
  padding: 8px;
`;
export const ProfileInfo = styled.ul``;
export const Name = styled.li``;
export const Email = styled.li``;
export const Phone = styled.li``;
export const EditButton = styled.button``;
