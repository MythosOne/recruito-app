// import { useState } from 'react';
import { CandidateProfileCard } from '@/components/CandidateProfileCard/CandidateProfileCard';
// import { EditProfileForm } from '@/components/forms/ProfileForm/EditProfileForm';
import { VacancyList } from '@/components/VacancyList/VacancyList';
import { ApplicationStatusList } from '@/components/ApplicationStatusList/ApplicationStatusList';

import { ProfilePageContainer,  TitlePage} from './CandidateProfilePage.styled';

import { vacancies } from '@/data/dataVacancies';
import { applicationStatus } from '@/data/dataApplicationStatus';

const defaultUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1234567890',
  avatarUrl: '/path/to/avatar.jpg',
};

export const CandidateProfilePage = () => {
  // const [isEditing, setIsEditing] = useState(false);
  // console.log(isEditing)
  return (
    <ProfilePageContainer>
      <TitlePage>Candidate Profile</TitlePage>
      <CandidateProfileCard /*onEdit={() => setIsEditing(!isEditing)}*/ user={defaultUser}/>
      {/* {isEditing && <EditProfileForm onEdit={() => setIsEditing(false)} />} */}
      <VacancyList vacancies={vacancies} variant="profile" />
      <ApplicationStatusList applicationStatus={applicationStatus} />
    </ProfilePageContainer>
  );
};
