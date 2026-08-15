import styled from '@emotion/styled';

export const CandidatesListContainer = styled.section`
  grid-area: candidates-list;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 68vh;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const CandidatesListCard = styled.ul`
  /* overflow: scroll; */
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CandidatesListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;
