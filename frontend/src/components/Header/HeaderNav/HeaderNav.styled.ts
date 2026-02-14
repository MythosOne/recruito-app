import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { shadows, colors } = theme;

export const ActionContainer = styled.div``;

export const ActionList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
`;
export const ActionItem = styled.li``;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: ${colors.primary};

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: ${colors.secondary};
    box-shadow: ${shadows.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
  }
`;
