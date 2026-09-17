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
import { CandidateDetailModal } from '../CandidateDetailsModal/CandidateDetailModal';
import { useState } from 'react';

type CandidateCardProps = {
  candidate: Candidate;
  onStatusChange: (
    candidateId: string,
    newStatus: 'approved' | 'rejected',
  ) => void;
};

export const CandidateCard = ({
  candidate,
  onStatusChange,
}: CandidateCardProps) => {
  const {
    avatarUrl,
    candidateInfo: { firstName, lastName, position },
    expandedInfo: { experience, location },
    status,
  } = candidate;

    const [isOpenInfo, setIsOpenInfo] = useState(false);
  return (
    <CandidateCardContainer>
      <Avatar alt={`${firstName} ${lastName}`} src={avatarUrl} />
      <CandidateInfo>
        <strong>
          {firstName} {lastName}
        </strong>
        <span>{position}</span>
        <span>
          {experience} years of experience, located in {location}
        </span>
      </CandidateInfo>
      <StatusBlock>{status}</StatusBlock>
      <ExpandedInfo
        type="button"
        aria-label={`View details of ${firstName} ${lastName}`}
        onClick={() => setIsOpenInfo(true)}
      >
        <ViewDetailsIcon aria-hidden="true">⌄</ViewDetailsIcon>
        View details
      </ExpandedInfo>
      {isOpenInfo && <CandidateDetailModal candidate={candidate} setIsOpen={setIsOpenInfo} />}
      <ApproveButton
        type="button"
        onClick={() => onStatusChange(candidate.id, 'approved')}
      >
        Approve
      </ApproveButton>
      <RejectButton
        type="button"
        onClick={() => onStatusChange(candidate.id, 'rejected')}
      >
        Reject
      </RejectButton>
    </CandidateCardContainer>
  );
};
