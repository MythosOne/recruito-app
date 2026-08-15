import {
  SidebarContainer,
  SidebarTitle,
  SidebarNav,
  SidebarList,
  SidebarListItem,
  SidebarLink,
} from './Sidebar.styled';

export const Sidebar = () => {
  const NavItems = [
    { label: 'Candidates', to: '/hr/candidates' },
    { label: 'Vacancies', to: '/hr/vacancies' },
    { label: 'Applications', to: '/hr/applications' },
    { label: 'Settings', to: '/hr/settings' },
  ];

  return (
    <SidebarContainer>
      <SidebarTitle>HR Workspace</SidebarTitle>
      <SidebarNav aria-label="HR sections">
        <SidebarList>{
          NavItems.map(({label, to}) => (
            <SidebarListItem key={to}>
              <SidebarLink href={to}>{label}</SidebarLink>
            </SidebarListItem>
          ))
        }
        </SidebarList>
      </SidebarNav>
    </SidebarContainer>
  );
};
