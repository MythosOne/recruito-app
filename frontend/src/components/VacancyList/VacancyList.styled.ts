import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '@/theme/theme';

const { breakpoints, shadows } = theme;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// const fadeOut = keyframes`
//   from {
//     opacity: 1;
//     transform: translateY(0);
//   }
//   to {
//     opacity: 0;
//     transform: translateY(-8px);
//   }
// `;

export const VacancySection = styled.section`
  grid-area: vacancy-list;
  /* overflow: auto; */
  height: 440px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid #f5cc66;
  border-radius: 8px;
  box-shadow: ${shadows.hoverShadow};
`;

export const VacancySectionHeader = styled.div`
  width: 100%;
  border-bottom: 2px solid #f5cc66;
  background-color: #f4e041;
`;

export const VacancySectionTitle = styled.h2`
  /* border-bottom: 2px solid #f5cc66;
  background-color: #f4e041; */
  margin: 0;
  padding: 8px;
`;

export const VacancyListContainer = styled.ul<{ variant?: 'main' | 'profile' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  height: ${({ variant }) => (variant === 'profile' ? '350px' : 'auto')};
  overflow: scroll;

  animation: ${fadeIn} 500ms ease forwards;
`;

export const VacancyListItem = styled.li``;

// export const ListVacancy = styled.ul<{ $isExiting: boolean }>`
// display: flex;
// flex-direction: column;
// gap: 10px;

// animation: ${({ $isExiting }) =>
//   $isExiting ? fadeOut : fadeIn}
//   500ms ease forwards;
