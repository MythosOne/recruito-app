import styled from "@emotion/styled";
import { theme } from '@/theme/theme';

const { shadows } = theme;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 16px;
  border: 2px solid #f5cc66;
  border-radius: 16px;
  background-color: #f9f9f9;

  box-shadow: ${shadows.hoverShadow};
`;

export const HeadForm = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: #f4e041;
  margin: 10px auto 0;

  cursor: pointer;

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
