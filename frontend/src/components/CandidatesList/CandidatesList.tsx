import { CandidateCard } from '@/components/CandidateCard/CandidateCard';
import type { Candidate } from '@/types/Candidate';

import {
  CandidatesListContainer,
  CandidatesListCard,
  CandidatesListTitle,
} from './CandidatesList.styled';

type CandidatesListProps = {
  candidates: Candidate[];
  onStatusChange: (candidateId: string, newStatus: "approved" | "rejected") => void;
};

export const CandidatesList = ({ candidates, onStatusChange }: CandidatesListProps) => {
  return (
    <CandidatesListContainer>
      <CandidatesListTitle>Candidates List</CandidatesListTitle>
      <CandidatesListCard>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} onStatusChange={onStatusChange} />
        ))}
      </CandidatesListCard>
    </CandidatesListContainer>
  );
};
