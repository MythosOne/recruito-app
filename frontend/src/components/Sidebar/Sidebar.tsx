import { dataRecruiter } from '@/data/dataRecruiter';
import {
  SidebarContainer,
  SidebarUserInfo,
  UserAvatar,
  AvatarImg,
  UserName,
  SidebarNav,
  SidebarList,
  SidebarListItem,
  SidebarLink,
  ButtonLogout,
} from './Sidebar.styled';

export const Sidebar = () => {
  const navItems = [
    { label: 'Candidates', to: '/hr/candidates' },
    { label: 'Vacancies', to: '/hr/vacancies' },
    { label: 'Applications', to: '/hr/applications' },
    { label: 'Settings', to: '/hr/settings' },
  ];

  return (
    <SidebarContainer>
      <SidebarUserInfo>
        <UserAvatar>
          <AvatarImg src={dataRecruiter[0].avatarUrl} alt="user avatar" />
        </UserAvatar>
        <UserName>{dataRecruiter[0].name}</UserName>
      </SidebarUserInfo>
      <SidebarNav aria-label="HR sections">
        <SidebarList>
          {navItems.map(({ label, to }) => (
            <SidebarListItem key={to}>
              <SidebarLink to={to}>{label}</SidebarLink>
            </SidebarListItem>
          ))}
        </SidebarList>
      </SidebarNav>
      <ButtonLogout
        type="button"
        onClick={() => {
          console.log('Logout button clicked');
        }}
      >
        Logout
      </ButtonLogout>
    </SidebarContainer>
  );
};
