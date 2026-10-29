import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const {
  colors,
  shadows: { hoverShadow },
} = theme;

export const CandidateCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  /* margin: 16px; */
  min-width: 625px;
  min-height: 145px;

  transition:
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    border: 1px solid #f5cc66;
    box-shadow: ${hoverShadow};
  }
`;

export const CandidateMainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > :last-child {
    margin-left: auto;
  }
`;

export const AvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CandidateInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* margin-top: 8px; */
`;

export const CandidateName = styled.h3`
  margin: 0;
`;

export const CandidatePosition = styled.p`
  margin: 0;
`;

export const CandidateExperience = styled.p`
  margin: 0;
`;

export const CandidateLocation = styled.p`
  margin: 0;
`;

export const StatusBlock = styled.span`
  font-weight: bold;
  color: ${({ children }) => {
    switch (children) {
      case 'Approved':
        return colors.success;
      case 'Rejected':
        return colors.error;
      case 'Pending':
        return colors.pending;
      default:
        return 'black';
    }
  }};
`;

export const CandidateActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const ExpandedInfo = styled.button`
  background: none;
  border: none;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const ViewDetailsIcon = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const ApproveButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  /* margin-right: 8px; */
  cursor: pointer;

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #45a049;
    box-shadow: ${hoverShadow};
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

export const RejectButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #da190b;
    box-shadow: ${hoverShadow};
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
