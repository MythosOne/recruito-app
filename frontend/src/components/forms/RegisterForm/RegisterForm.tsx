import { useFormik } from 'formik';
import { Input } from '@/components/forms/ui/Input/Input';
import * as Yup from 'yup';

import { RegisterFormContainer, HeadForm, SubmitButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .max(15, 'Username must be 15 characters or less')
        .required('Username is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  return (
    <RegisterFormContainer noValidate onSubmit={formik.handleSubmit}>
      <HeadForm>Register</HeadForm>
      <Input
        id="username"
        name="username"
        autoComplete="username"
        type="text"
        label='Username'
        placeholder='Enter your username'
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.username}
        touched={formik.touched.username}
      />

      <Input
        id="email"
        name="email"
        autoComplete="email"
        type="email"
        label='Email'
        placeholder='Enter your email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <Input
        id="password"
        name="password"
        autoComplete="new-password"
        type="password"
        label='Password'
        placeholder='Enter your password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
        touched={formik.touched.password}
      />
      <SubmitButton type="submit" disabled={!formik.isValid || formik.isSubmitting}>Register</SubmitButton>
    </RegisterFormContainer>
  );
};
