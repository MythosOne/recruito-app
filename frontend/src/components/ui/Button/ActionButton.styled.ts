import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { shadows } = theme;

type ButtonProps = {
  variant?: 'signIn' | 'signUp' | 'login' | 'register' | 'submit' | 'logout';
  disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  /* width: ${({ variant }) => (variant === 'signUp' ? '150px' : '100px')}; */
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: #f4e041;
  margin: 10px auto 0;

  cursor: pointer;

  transition: var(--animation-button);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #f5cc66;
    box-shadow: ${shadows.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:disabled:hover,
  &:disabled:focus-visible {
    transform: none;
  }
`;
