import { FormActions, FormField, FormSubmit, VacancyFormElement } from './VacancyForm.styled';

export const VacancyForm = () => {
  return (
    <VacancyFormElement>
      <FormField>
        Title
        <input name="title" type="text" />
      </FormField>
      <FormField>
        Description
        <textarea name="description" rows={5} />
      </FormField>
      <FormField>
        Requirements
        <textarea name="requirements" rows={4} />
      </FormField>
      <FormActions>
        <FormSubmit type="button">Create vacancy</FormSubmit>
      </FormActions>
    </VacancyFormElement>
  );
};
