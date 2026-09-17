import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '@/theme/theme';

const {
  breakpoints,
  colors: { primary, secondary },
  shadows: { hoverShadow },
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

export const SidebarUserInfo = styled.div`
display: flex;
`;

export const UserAvatar = styled.div``;
export const AvatarImg = styled.img``;
export const UserName = styled.span``;

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

export const ButtonLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: ${primary};

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: ${secondary};
    box-shadow: ${hoverShadow};
  }

  &:active {
    transform: scale(0.95);
  }
`;
