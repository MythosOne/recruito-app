import {
  Section,
  Container,
  Title,
  Text,
  NavContainer,
  NavItem,
  NavLink,
} from './HeroSection.styled';
export const HeroSection = () => {

  return (
    <Section id="heroSection">
      <Container>
        <Title>Join Recruito and discover new opportunities for growth and success!</Title>
        <Text>
          Recruito helps companies find top talent quickly and efficiently, while connecting candidates with opportunities that perfectly match their skills and interests. We create intuitive and accessible interfaces focused on a seamless user experience.
        </Text>
        <NavContainer>
          <NavItem>
            <NavLink href="#signUpSection">Sign Up</NavLink>
          </NavItem>
        </NavContainer>
      </Container>
    </Section>
  );
};