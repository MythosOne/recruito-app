import { useState } from 'react';
import { CandidateProfileCard } from '@/components/CandidateProfileCard/CandidateProfileCard';
import { EditProfileForm } from '@/components/forms/ProfileForm/EditProfileForm';
import { VacancyList } from '@/components/VacancyList/VacancyList';
import { ApplicationStatusList } from '@/components/ApplicationStatusList/ApplicationStatusList';

import {
  ProfilePageContainer,
  ProfileCardArea,
  AvailableJobsArea,
  ApplicationStatusArea,
} from './CandidateProfilePage.styled';

import { vacancies } from '@/data/dataVacancies';
import { applicationStatus } from '@/data/dataApplicationStatus';

export const CandidateProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ProfilePageContainer>
      <ProfileCardArea>
        <CandidateProfileCard onEdit={() => setIsEditing(true)} />
        {isEditing && <EditProfileForm />}
      </ProfileCardArea>
      <AvailableJobsArea>
        <VacancyList vacancies={vacancies} variant="profile" />
      </AvailableJobsArea>
      <ApplicationStatusArea>
        <ApplicationStatusList applicationStatus={applicationStatus}/>
      </ApplicationStatusArea>
    </ProfilePageContainer>
  );
};
