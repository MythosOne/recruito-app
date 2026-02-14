import styled from '@emotion/styled';

export const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 300ms ease-out;
`;

export const Modal = styled.div`
  background-color: transparent;
`;
