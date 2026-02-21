import { useState } from 'react';
import { CandidateProfileCard } from '@/components/CandidateProfileCard/CandidateProfileCard';
import { EditProfileForm } from '@/components/forms/ProfileForm/EditProfileForm';
import { AvailableJobsList } from '@/components/AvailableJobsList/AvailableJobsList';
import { ApplicationStatusList } from '@/components/ApplicationStatusList/ApplicationStatusList';

import { ProfilePageContainer } from './CandidateProfilePage.styled';

export const CandidateProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ProfilePageContainer>
      <CandidateProfileCard onEdit={() => setIsEditing(true)} />
      {isEditing && <EditProfileForm />}
      <AvailableJobsList />
      <ApplicationStatusList />
    </ProfilePageContainer>
  );
};
