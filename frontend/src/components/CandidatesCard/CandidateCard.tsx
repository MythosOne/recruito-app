import {
  Card,
  Avatar,
  CandidateInfo,
  StatusBlock,
  ExpandedInfo,
  ApproveButton,
  RejectButton,
} from './CandidateCard.styled.ts';

export const CandidateCard = () => {
  return (
    <Card>
      <Avatar alt="Candidate Picture" src="path/to/candidate/picture.jpg" />
      <CandidateInfo> Candidate Info</CandidateInfo>
      <StatusBlock>Candidate status</StatusBlock>
      <ExpandedInfo>Expanded info</ExpandedInfo>
      <ApproveButton>Approve</ApproveButton>
      <RejectButton>Reject</RejectButton>
    </Card>
  );
};
