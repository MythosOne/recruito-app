import styled from '@emotion/styled';

import { theme } from '@/theme/theme';
import bgMobile1x from '@/assets/background/img_1@1x_sm_360.jpg';
import bgMobile2x from '@/assets/background/img_1@2x_sm_360.jpg';
import bgTablet1x from '@/assets/background/img_1@1x_md_768.jpg';
import bgTablet2x from '@/assets/background/img_1@2x_md_768.jpg';
import bgDesktop1x from '@/assets/background/img_1@1x_lg_1024.jpg';
import bgDesktop2x from '@/assets/background/img_1@2x_lg_1024.jpg';

const { breakpoints, shadows } = theme;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${bgMobile1x});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 500px;

  @media (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x});
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    background-image: url(${bgTablet1x});

    @media (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${bgTablet2x});
    }
    height: 600px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    background-image: url(${bgDesktop1x});

    @media (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${bgDesktop2x});
    }
    height: 650px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 328px;
  height: 389px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 380px;
    height: 323px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 21px 0;
  text-align: center;

  color: #fff;
`;

export const Text = styled.p`
  margin: 0 0 32px 0;
  text-align: center;

  color: #fff;
`;

export const NavContainer = styled.nav``;

export const NavItem = styled.div``;

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  background-color: #f4e041;

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
`;
