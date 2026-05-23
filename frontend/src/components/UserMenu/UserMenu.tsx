import { UserMenuContainer, UserName, LogoutButton } from './UserMenu.styled';

const user = {
  name: 'John Doe',
};

export const UserMenu = () => {

  const handleLogout = () => {
    return console.log(`Logout ${user.name}`); //TODO: Реализовать Logout
  };

  return (
    <UserMenuContainer>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutButton type="button" onClick={handleLogout}>
        Logout
      </LogoutButton>
    </UserMenuContainer>
  );
};
