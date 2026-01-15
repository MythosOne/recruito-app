import styled from '@emotion/styled';

type ErrorMessageProps = {
  'data-visible': boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

export const Field = styled.input`
  padding: 4px 6px;
  font-size: 14px;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  background-color: inherit;

  &::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

export const ErrorMessage = styled.span<ErrorMessageProps>`
  display: block;
  height: 20px;
  color: red;
  font-size: 12px;

  visibility: ${({ ['data-visible']: visible }) =>
    visible ? 'visible' : 'hidden'};
`;
