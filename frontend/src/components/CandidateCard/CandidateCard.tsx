import type { Candidate } from '@/types/Candidate';

import {
  CandidateCardContainer,
  Avatar,
  CandidateInfo,
  StatusBlock,
  ExpandedInfo,
  ViewDetailsIcon,
  ApproveButton,
  RejectButton,
} from './CandidateCard.styled';

type CandidateCardProps = {
  candidate: Candidate;
};

export const CandidateCard = ({ candidate }: CandidateCardProps) => {
  const {
    avatarUrl,
    candidateInfo: { firstName, lastName, position },
    expandedInfo: { experience, location },
    status,
  } = candidate;
  return (
    <CandidateCardContainer>
      <Avatar alt={`${firstName} ${lastName}`} src={avatarUrl} />
      <CandidateInfo>
        <strong>{firstName} {lastName}</strong>
        <span>{position}</span>
        <span>{experience} years of experience, located in {location}</span>
      </CandidateInfo>
      <StatusBlock>{status}</StatusBlock>
      <ExpandedInfo>
        <ViewDetailsIcon aria-hidden="true">⌄</ViewDetailsIcon>
        View details
      </ExpandedInfo>
      <ApproveButton type="button">Approve</ApproveButton>
      <RejectButton type="button">Reject</RejectButton>
    </CandidateCardContainer>
  );
};
