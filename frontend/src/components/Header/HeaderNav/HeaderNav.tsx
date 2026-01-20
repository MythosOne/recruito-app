import { NavContainer, NavItem, NavList, NavLink } from './HeaderNav.styled';

export const HeaderNav = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink href="#usersSection">Sign in</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#signUpSection">Sign up</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};
