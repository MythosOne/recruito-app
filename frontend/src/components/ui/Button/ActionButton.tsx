import type React from 'react';
import { Button } from './ActionButton.styled';

interface ActionButtonProps {
  type: 'button' | 'submit';
  variant?: 'signIn' | 'signUp' | 'login' | 'register' | 'submit' | 'logout';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  type,
  variant,
  onClick,
  disabled,
  children,
}) => {
  return (
    <>
      <Button
        type={type}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};
