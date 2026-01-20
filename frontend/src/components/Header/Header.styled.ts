import styled from '@emotion/styled';

import { theme } from '@/theme/theme';

const { colors, breakpoints } = theme;

export const Section = styled.header`
  box-sizing: border-box;
  position: sticky;
  z-index: 1001;
  left: 0;
  top: 0;

  /* width: 100%; */
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  /* padding: 0 20px; */

  background-color: ${colors.white};

  /* @media screen and (${breakpoints.tablet}) {
    width: 768px;
  }

  @media screen and (${breakpoints.desktop}) {
  width: 1280px;
  } */
`;
