import { CandidateCard } from '@/components/CandidateCard/CandidateCard';
import type { Candidate } from '@/types/Candidate';

import {
  CandidatesListContainer,
  CandidatesListCard,
  CandidatesListTitle,
} from './CandidatesList.styled';

type CandidatesListProps = {
  candidates: Candidate[];
};

export const CandidatesList = ({ candidates }: CandidatesListProps) => {
  return (
    <CandidatesListContainer>
      <CandidatesListTitle>Candidates List</CandidatesListTitle>
      <CandidatesListCard>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </CandidatesListCard>
    </CandidatesListContainer>
  );
};
