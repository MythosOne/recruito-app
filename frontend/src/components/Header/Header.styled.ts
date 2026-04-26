import styled from '@emotion/styled';

import { theme } from '@/theme/theme';

const { colors, breakpoints } = theme;

export const Section = styled.header`
  box-sizing: border-box;
  position: sticky;
  z-index: 1001;
  width: 100%;
  left: 0;
  top: 0;

  /* width: 1240px; */
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;

  background-color: ${colors.white};

  /* @media screen and (min-width: ${breakpoints.tablet}) {
    width: 768px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
  width: 1240px;
  } */
`;
