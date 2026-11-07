import {
  ActionContainer,
  ActionItem,
  ActionList,
  // ActionButton,
} from './HeaderNav.styled';
import { ActionButton } from '@/components/ui/Button/ActionButton';

type HeaderNavProps = {
  onLogin: () => void;
  onRegister: () => void;
};

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onLogin,
  onRegister,
}) => {
  return (
    <ActionContainer>
      <ActionList>
        <ActionItem>
          <ActionButton type={'button'} variant={'signIn'} onClick={onLogin}>
            {'Sign in'}
          </ActionButton>
          {/* <ActionButton onClick={onLogin}>Sign in</ActionButton> */}
        </ActionItem>
        <ActionItem>
          <ActionButton
            type={'button'}
            variant={'signUp'}
            onClick={onRegister}
          >
            {'Sign up'}
          </ActionButton>
          {/* <ActionButton onClick={onRegister}>Sign up</ActionButton> */}
        </ActionItem>
      </ActionList>
    </ActionContainer>
  );
};
