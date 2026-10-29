import { useState } from 'react';
// import { createPortal } from 'react-dom';
import type { Candidate } from '@/types/Candidate';

import { CandidateDetailModal } from '../CandidateDetailsModal/CandidateDetailModal';

import {
  CandidateCardContainer,
  CandidateMainInfo,
  AvatarWrapper,
  Avatar,
  CandidateName,
  CandidatePosition,
  CandidateExperience,
  CandidateLocation,
  CandidateInfo,
  StatusBlock,
  CandidateActions,
  ExpandedInfo,
  ViewDetailsIcon,
  ApproveButton,
  RejectButton,
} from './CandidateCard.styled';

type CandidateCardProps = {
  candidate: Candidate;
  onStatusChange: (
    candidateId: string,
    newStatus: 'Approved' | 'Rejected',
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
      <CandidateMainInfo>
        <AvatarWrapper>
          <Avatar alt={`${firstName} ${lastName}`} src={avatarUrl} />
        </AvatarWrapper>
        <CandidateInfo>
          <CandidateName>
            {firstName} {lastName}
          </CandidateName>
          <CandidatePosition>{position}</CandidatePosition>
          <CandidateExperience>
            {experience} years of experience
          </CandidateExperience>
          <CandidateLocation>Located in {location}</CandidateLocation>
        </CandidateInfo>
        <StatusBlock>{status}</StatusBlock>
      </CandidateMainInfo>

      <CandidateActions>
        <ExpandedInfo
          type="button"
          aria-label={`View details of ${firstName} ${lastName}`}
          onClick={() => setIsOpenInfo(true)}
        >
          <ViewDetailsIcon aria-hidden="true">⌄</ViewDetailsIcon>
          View details
        </ExpandedInfo>

        <CandidateDetailModal
          candidate={candidate}
          isOpen={isOpenInfo}
          setIsOpen={setIsOpenInfo}
        />

        <ApproveButton
          type="button"
          aria-label={`Approve ${firstName} ${lastName}`}
          onClick={() => onStatusChange(candidate.id, 'Approved')}
        >
          Approve
        </ApproveButton>
        <RejectButton
          type="button"
          aria-label={`Reject ${firstName} ${lastName}`}
          onClick={() => onStatusChange(candidate.id, 'Rejected')}
        >
          Reject
        </RejectButton>
      </CandidateActions>
    </CandidateCardContainer>
  );
};
