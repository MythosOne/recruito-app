import { useState } from 'react';
import { CandidateProfileCard } from '@/components/CandidateProfileCard/CandidateProfileCard';
import { EditProfileForm } from '@/components/forms/ProfileForm/EditProfileForm';
import { VacancyList } from '@/components/VacancyList/VacancyList';
import { ApplicationStatusList } from '@/components/ApplicationStatusList/ApplicationStatusList';

import { ProfilePageSection,  TitlePage} from './CandidateProfilePage.styled';

import { vacancies } from '@/data/dataVacancies';
import { applicationStatus } from '@/data/dataApplicationStatus';

export const CandidateProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ProfilePageSection>
      <TitlePage>Candidate Profile</TitlePage>
      <CandidateProfileCard onEdit={() => setIsEditing(true)} />
      {isEditing && <EditProfileForm />}
      <VacancyList vacancies={vacancies} variant="profile" />
      <ApplicationStatusList applicationStatus={applicationStatus} />
    </ProfilePageSection>
  );
};
