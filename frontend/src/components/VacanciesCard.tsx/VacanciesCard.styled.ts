import styled from '@emotion/styled';

export const VacanciesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 5px;

  width: clamp(320px, 90vw, 880px);
  height: 150px;

  border: 1px solid #a2a2a2;
  border-radius: 16px;

  transition:
    transform 250ms,
    border 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.02);
    border: 2px solid #f5cc66;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

//! export const VacanciesCardContainer = styled.div`
//   display: flex;
//   flex-direction: ${({ variant }) => (variant === 'main' ? 'column' : 'row')};
//   justify-content: center;
//   align-items: center;
//   gap: 6px;
//   padding: 5px;

//   width: ${({ variant }) =>
//     variant === 'main'
//       ? 'clamp(320px, 90vw, 880px)'
//       : 'clamp(320px, 60vw, 680px)'};
//   height: 150px;

//   border: 1px solid #a2a2a2;
//   border-radius: 16px;

//   transition:
//     transform 250ms,
//     border 250ms,
//     box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover,
//   &:focus-visible {
//     ${({ variant }) => variant === 'main' && 'transform: scale(1.02);'}
//     border: 2px solid #f5cc66;
//     box-shadow: ${shadows.hoverShadow};
//   }

//   /* @media screen and (${breakpoints.tablet}) {
//     width: 680px;
//     height: 150px;
//   }

//   @media screen and (${breakpoints.desktop}) {
//     width: 880px;
//     height: 150px;
//   }  */
// `;
// `;

export const VacancyTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

export const Position = styled.p`
  margin: 4px 0;
  font-weight: bold;
`;

export const Company = styled.p`
  margin: 4px 0;
`;

export const Location = styled.p`
  margin: 4px 0;
`;

export const EmploymentType = styled.p`
  margin: 4px 0;
`;

export const Description = styled.p`
  margin: 8px 0;
`;

export const CreatedAt = styled.p`
  margin: 4px 0;
`;

export const ClearVacanciesButton = styled.button`
  padding: 6px 12px;
  background-color: #f5cc66;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #e0b35c;
  }
`;

export const PublishVacanciesButton = styled.button`
  padding: 6px 12px;
  background-color: #4caf50;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
