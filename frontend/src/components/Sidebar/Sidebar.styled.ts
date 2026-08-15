import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '@/theme/theme';
const { breakpoints } = theme;

const {
  colors: { secondary },
} = theme;

export const SidebarContainer = styled.section`
  grid-area: sidebar;
  display: none;
  width: 250px;
  height: 80vh;
  background-color: #f5f5f5;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const SidebarNav = styled.nav``;
export const SidebarList = styled.ul``;
export const SidebarListItem = styled.li``;
export const SidebarLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition:
    font-weight 0.25s,
    color 0.25s,
    text-shadow 0.25s ease-in-out;

  &:hover {
    color: ${secondary};
  }
`;
