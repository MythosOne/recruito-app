import styled from '@emotion/styled';
import { theme } from '@/theme/theme';


const { shadows } = theme;

export const ModalOverlay = styled.div<{visible: boolean}>`
  position: fixed;
  inset: 0;
  z-index: 1001;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 300ms ease-out;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #f5cc66;
  border-radius: 16px;

  box-shadow: ${shadows.hoverShadow};
`;

export const ModalHeader = styled.h2`
  margin-bottom: 16px;
`;

export const CandidateDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

// export const CandidateName = styled.h3`
//   margin-bottom: 8px;
// `;

export const CandidatePosition = styled.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`;

export const CandidateEmail = styled.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`;

export const CandidatePhone = styled.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`;

export const CandidateExperience = styled.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`;

export const CandidateSkills = styled.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`;

export const CandidateLocation = styled.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`;

export const CandidateSummary = styled.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`;

export const CloseButton = styled.button`
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: #f4e041;
  margin: 10px auto 0;

  cursor: pointer;

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #f5cc66;
    box-shadow: ${shadows.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:disabled:hover,
  &:disabled:focus-visible {
    transform: none;
  }
`;
