import {
  VacanciesCardContainer,
  VacancyTitle,
  Position,
  Company,
  Location,
  EmploymentType,
  Description,
  CreatedAt,
  ClearVacanciesButton,
  PublishVacanciesButton,
} from './VacanciesCard.styled';
import type { Vacancy } from '@/types/Vacancy';

type VacancyCardProps = {
  vacancy: Vacancy;
  onDeleteVacancy: (id: string) => void;
  onPublishVacancy: (id: string) => void;
};

export const VacanciesCard: React.FC<VacancyCardProps> = ({
  vacancy,
  onDeleteVacancy,
  onPublishVacancy,
}) => {
  const {
    position,
    company,
    location,
    employmentType,
    description,
    createdAt,
  } = vacancy;
  return (
    <VacanciesCardContainer>
      <VacancyTitle>Vacancy Title</VacancyTitle>
      <Position>{position}</Position>
      <Company>{company}</Company>
      <Location>{location}</Location>
      <EmploymentType>{employmentType}</EmploymentType>
      <Description>{description}</Description>
      <CreatedAt>Created At: {createdAt}</CreatedAt>
      <ClearVacanciesButton onClick={() => onDeleteVacancy(vacancy.id)}>
        Clear Vacancies
      </ClearVacanciesButton>
      <PublishVacanciesButton
        onClick={() => onPublishVacancy(vacancy.id)}
        disabled={vacancy.status === 'published'}
      >
        {vacancy.status === 'published' ? 'Published' : 'Publish Vacancy'}
      </PublishVacanciesButton>
    </VacanciesCardContainer>
  );
};
