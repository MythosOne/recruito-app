import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import {
  VacanciesFormContainer,
  HeadForm,
  TextFieldStyled,
} from './VacanciesForm.styled';
import { SubmitButton } from '../ui/Button/SubmitButton';
import type { Vacancy } from '@/types/Vacancy';

// type CreateVacancyData = {
//   position: string;
//   company: string;
//   location: string;
//   employmentType: string;
//   description: string;
//   tags: string[];
// };
type VacanciesFormProps = {
  onCreateVacancy: (newVacancy: Vacancy) => void;
};

export const VacanciesForm = ({ onCreateVacancy }: VacanciesFormProps) => {
  const formik = useFormik({
    initialValues: {
      position: '',
      company: '',
      location: '',
      employmentType: '',
      description: '',
      tags: [],
    },
    validationSchema: Yup.object().shape({
      position: Yup.string().min(3).max(50).required('Position is required'),
      company: Yup.string().min(3).max(50).required('Company is required'),
      location: Yup.string().min(3).max(50).required('Location is required'),
      employmentType: Yup.string()
        .min(3)
        .max(50)
        .required('Employment Type is required'),
      description: Yup.string()
        .min(3)
        .max(200)
        .required('Description is required'),
      tags: Yup.array()
        .of(Yup.string())
        .min(1, 'At least one tag is required')
        .required('Tags are required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const newVacancy: Vacancy = {
        id: nanoid(),
        ...values,
        createdAt: new Date().toISOString(),
      };
      onCreateVacancy(newVacancy);
      resetForm();
    },
  });

  return (
    <VacanciesFormContainer onSubmit={formik.handleSubmit}>
      <HeadForm>Vacancies Form</HeadForm>
      <TextFieldStyled
        name="position"
        label="Position"
        placeholder="Enter position"
        value={formik.values.position}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.position && Boolean(formik.errors.position)}
        helperText={formik.touched.position && formik.errors.position}
      />
      <TextFieldStyled
        name="company"
        label="Company"
        placeholder="Enter company name"
        value={formik.values.company}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.company && Boolean(formik.errors.company)}
        helperText={formik.touched.company && formik.errors.company}
      />
      <TextFieldStyled
        name="location"
        label="Location"
        placeholder="Enter location"
        value={formik.values.location}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.location && Boolean(formik.errors.location)}
        helperText={formik.touched.location && formik.errors.location}
      />
      <TextFieldStyled
        name="employmentType"
        label="Employment Type"
        placeholder="Enter employment type"
        value={formik.values.employmentType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.employmentType && Boolean(formik.errors.employmentType)
        }
        helperText={
          formik.touched.employmentType && formik.errors.employmentType
        }
      />
      <TextFieldStyled
        name="description"
        label="Description"
        placeholder="Enter job description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextFieldStyled
        name="tags"
        label="Tags"
        placeholder="Enter tags (comma separated)"
        value={formik.values.tags.join(', ')}
        onChange={(e) => {
          const tags = e.target.value
            .split(',')
            .map((tag) => tag.trim().toLowerCase())
            .filter(Boolean);
          formik.setFieldValue('tags', tags);
        }}
        onBlur={formik.handleBlur}
        error={formik.touched.tags && Boolean(formik.errors.tags)}
        helperText={formik.touched.tags && formik.errors.tags}
      />
      <SubmitButton type="submit" variant="submit" disabled={!formik.isValid || !formik.dirty}>
        Submit
      </SubmitButton>
    </VacanciesFormContainer>
  );
};
