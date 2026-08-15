import styled from '@emotion/styled';

export const CandidateCardContainer = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 850px;
  max-height: 100px;
`;

export const Avatar = styled.img`
  width: 10%;
  height: auto;
`;

export const CandidateInfo = styled.div`
  margin-top: 8px;
`;

export const StatusBlock = styled.div`
  margin-top: 8px;
`;

export const ExpandedInfo = styled.div`
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
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const RejectButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #da190b;
  }
`;
