import type React from 'react';
import { Button } from './SubmitButton.styled';

interface SubmitButtonProps {
  type: 'button' | 'submit';
  variant?: 'signUp' | 'login' | 'register';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
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
