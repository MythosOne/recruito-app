import {
  Section,
  Container,
  Title,
  Text,
  ActionContainer,
  ActionItem,
  ActionButton,
} from './HeroSection.styled';

type HeroSectionProps = {
  onLogin: () => void;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onLogin }) => {
  return (
    <Section id="heroSection">
      <Container>
        <Title>
          Join Recruito and discover new opportunities for growth and success!
        </Title>
        <Text>
          Recruito helps companies find top talent quickly and efficiently,
          while connecting candidates with opportunities that perfectly match
          their skills and interests. We create intuitive and accessible
          interfaces focused on a seamless user experience.
        </Text>
        <ActionContainer>
          <ActionItem>
            <ActionButton onClick={onLogin}>Get Started</ActionButton>
          </ActionItem>
        </ActionContainer>
      </Container>
    </Section>
  );
};
