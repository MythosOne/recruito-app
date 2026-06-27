import { CandidateCard } from '@/components/CandidatesCard/CandidateCard';
import { HRDashboardContainer, Title } from './HRDashboard.styled';

export const HRDashboard = () => {
  return (
    <HRDashboardContainer>
      <Title>HR Dashboard Page</Title>
      <CandidateCard />
    </HRDashboardContainer>
  );
};
