import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 24px;
`;

export const ListVacancy = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  animation: ${fadeIn} 500ms ease forwards;
`;

  // export const ListVacancy = styled.ul<{ $isExiting: boolean }>`
  // display: flex;
  // flex-direction: column;
  // gap: 10px;

  // animation: ${({ $isExiting }) =>
  //   $isExiting ? fadeOut : fadeIn}
  //   500ms ease forwards;
