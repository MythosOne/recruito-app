import { Logo } from '@/components/Header/Logo/Logo';
import { HeaderNav } from '@/components/Header/HeaderNav/HeaderNav';
import { Section } from './Header.styled';

type HeaderProps = {
  onLogin: () => void;
  onRegister: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onLogin, onRegister }) => {
  //!Сделать плавный scroll
  return (
    <Section>
      <Logo />
      <HeaderNav onLogin={onLogin} onRegister={onRegister} />
    </Section>
  );
};
