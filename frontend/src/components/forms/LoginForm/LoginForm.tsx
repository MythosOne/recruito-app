import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/forms/ui/Input/Input';

export const LoginForm = () => {
  const formik = useFormik ({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
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
    <form onSubmit={formik.handleSubmit}>
      <h2>Login</h2>
      <Input
        id="email"
        name="email"
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
        type="password"
        label='Password'
        placeholder='Enter your password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
        touched={formik.touched.password}
      />
      <button type="submit">Login</button>
    </form>
  );
};
