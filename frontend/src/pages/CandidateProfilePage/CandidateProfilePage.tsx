import { useState } from 'react';
import { CandidateProfileCard } from '@/components/CandidateProfileCard/CandidateProfileCard';
import { EditProfileForm } from '@/components/forms/ProfileForm/EditProfileForm';
import { VacancyList } from '@/components/VacancyList/VacancyList';
import { ApplicationStatusList } from '@/components/ApplicationStatusList/ApplicationStatusList';

import { ProfilePageContainer,  TitlePage} from './CandidateProfilePage.styled';

import { vacancies } from '@/data/dataVacancies';
import { applicationStatus } from '@/data/dataApplicationStatus';

export const CandidateProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  console.log(isEditing)
  return (
    <ProfilePageContainer>
      <TitlePage>Candidate Profile</TitlePage>
      <CandidateProfileCard onEdit={() => setIsEditing(true)} />
      {isEditing && <EditProfileForm onEdit={() => setIsEditing(false)} />}
      <VacancyList vacancies={vacancies} variant="profile" />
      <ApplicationStatusList applicationStatus={applicationStatus} />
    </ProfilePageContainer>
  );
};
