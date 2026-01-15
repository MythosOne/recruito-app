import { RegisterForm } from '@/components/forms/RegisterForm/RegisterForm';
import { LoginForm } from '@/components/forms/LoginForm/LoginForm';

import { AuthPageContainer } from './AuthPage.styled';
export const AuthPage = () => {
  return (
    <AuthPageContainer>
      <RegisterForm />
      {/* <LoginForm /> */}
    </AuthPageContainer>
  );
};
