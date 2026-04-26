import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '@/theme/theme';

const { /*breakpoints,*/ shadows } = theme;

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

export const VacancySection = styled.section<{ variant?: 'main' | 'profile' }>`
  grid-area: vacancy-list;
  /* overflow: auto; */
  height: ${({ variant }) => (variant === 'profile' ? '440px' : null)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border: ${({ variant }) =>
    variant === 'profile' ? '2px solid #f5cc66' : null};
  border-radius: ${({ variant }) => (variant === 'profile' ? '8px' : null)};
  box-shadow: ${({ variant }) =>
    variant === 'profile' ? '${shadows.hoverShadow}' : null};
`;

export const VacancySectionHeader = styled.div<{
  variant?: 'main' | 'profile';
}>`
  width: 100%;
  border-bottom: ${({ variant }) =>
    variant === 'profile' ? '2px solid #f5cc66' : null};
  background-color: ${({ variant }) =>
    variant === 'profile' ? '#f4e041' : null};
`;

export const VacancySectionTitle = styled.h2<{ variant?: 'main' | 'profile' }>`
  /* border-bottom: 2px solid #f5cc66;
  background-color: #f4e041; */
  margin: 0;
  padding: 8px;

  text-align: ${({ variant }) => (variant === 'main' ? 'center' : null)};
`;

export const VacancyListContainer = styled.ul<{ variant?: 'main' | 'profile' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  height: ${({ variant }) => (variant === 'profile' ? '350px' : 'auto')};
  overflow: ${({ variant }) => (variant === 'profile' ? 'scroll' : null)};

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
