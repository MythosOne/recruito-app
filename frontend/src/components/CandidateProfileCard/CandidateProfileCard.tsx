import { Avatar } from '@mui/material';
import {
  CandidateProfileSection,
  SectionTitle,
  ProfileInfo,
  Name,
  Email,
  Phone,
  EditButton,
} from './CandidateProfileCard.styled';

type ProfileCardProps = {
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  onEdit: () => void;
};

export const CandidateProfileCard: React.FC<ProfileCardProps> = ({
  name = 'Name not provided',
  email = 'Email not provided',
  phone = 'Phone not provided',
  avatarUrl,
  onEdit,
}) => {
  return (
    <CandidateProfileSection>
      <SectionTitle>Profile Information</SectionTitle>
      {/* <figure><img src={avatarUrl} alt="User Avatar" /></figure> */}
      <Avatar alt="User Avatar" src={avatarUrl} />
      <ProfileInfo>
        <Name>{name}</Name>
        <Email>{email}</Email>
        <Phone>{phone}</Phone>
      </ProfileInfo>
      <EditButton onClick={onEdit}>Edit Profile</EditButton>
    </CandidateProfileSection>
  );
};
