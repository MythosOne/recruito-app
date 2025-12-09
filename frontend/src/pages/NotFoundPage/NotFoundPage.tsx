import {
  NotFoundPageContainer,
  Header,
  Message,
  HomeLink,
} from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <Header>404</Header>
      <Message>Oops… The page you're looking for doesn't exist.</Message>
      <HomeLink href="/" aria-label="Return to homepage">
        Go back home
      </HomeLink>
    </NotFoundPageContainer>
  );
};
