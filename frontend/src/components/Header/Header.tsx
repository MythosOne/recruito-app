import { Logo } from '@/components/Header/Logo/Logo';
import { HeaderNav } from '@/components/Header/HeaderNav/HeaderNav';
import { UserMenu } from '@/components/UserMenu/UserMenu';
import { Section } from './Header.styled';

type HeaderProps = {
  onLogin: () => void;
  onRegister: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onLogin, onRegister }) => {
  //!Сделать плавный scroll
  const isLoggedIn = location.pathname === '/recruito-app/candidate'; //TODO: Получать из контекста авторизации

  return (
    <Section>
      <Logo />
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <HeaderNav onLogin={onLogin} onRegister={onRegister} />
      )}
      {/* <HeaderNav onLogin={onLogin} onRegister={onRegister} /> */}
    </Section>
  );
};
