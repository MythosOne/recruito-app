import { VacancyForm } from '@/components/VacancyForm/VacancyForm';

import { ModalContent, ModalOverlay, ModalTitle } from './CreateVacancyModal.styled';

export const CreateVacancyModal = () => {
  return (
    <ModalOverlay aria-labelledby="create-vacancy-title" role="dialog">
      <ModalContent>
        <ModalTitle id="create-vacancy-title">Create vacancy</ModalTitle>
        <VacancyForm />
      </ModalContent>
    </ModalOverlay>
  );
};
