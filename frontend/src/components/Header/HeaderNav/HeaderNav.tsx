import { ActionContainer, ActionItem, ActionList, ActionButton } from './HeaderNav.styled';

type HeaderNavProps = {
  onLogin: () => void;
  onRegister: () => void;
};

export const HeaderNav: React.FC<HeaderNavProps> = ({ onLogin, onRegister }) => {
  return (
    <ActionContainer>
      <ActionList>
        <ActionItem>
          <ActionButton onClick={onLogin}>Sign in</ActionButton>
        </ActionItem>
        <ActionItem>
          <ActionButton onClick={onRegister}>Sign up</ActionButton>
        </ActionItem>
      </ActionList>
    </ActionContainer>
  );
};
