import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { shadows } = theme;

export const NavContainer = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
`;
export const NavItem = styled.li``;

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  background-color: #f4e041;

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #f5cc66;
    box-shadow: ${shadows.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
  }
`;
