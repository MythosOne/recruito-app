import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const LogoCompany = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const NameCompany = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const StatusBadge = styled.span`
  font-size: 16px;
  color: #555;
`;
