import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { breakpoints, shadows } = theme;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 5px;

  height: 150px;

  border: 1px solid #a2a2a2;
  border-radius: 16px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 2px solid #f4e041;
    box-shadow: ${shadows.hoverShadow};
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  margin: 0;
`;

export const Location = styled.p``;

export const Description = styled.p`
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Tag = styled.span``;
