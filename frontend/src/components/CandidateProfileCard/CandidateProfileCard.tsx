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

type User = {
  name: string;
  email: string;
  phone: string;
  avatarUrl: string | null;
};

type ProfileCardProps = {
  user?: User;
  onEdit: () => void;
};

export const CandidateProfileCard: React.FC<ProfileCardProps> = ({
  user,
  onEdit,
}) => {
  const { name, email, phone, avatarUrl } = user || {};

  return (
    <CandidateProfileSection>
      <SectionTitle>Profile Information</SectionTitle>
      {/* <figure><img src={avatarUrl} alt="User Avatar" /></figure> */}
      <Avatar alt={name || 'User Avatar'} src={avatarUrl || undefined} />
      <ProfileInfo>
        <Name>{name}</Name>
        <Email>{email}</Email>
        <Phone>{phone ?? "Not provided"}</Phone>
      </ProfileInfo>
      <EditButton onClick={onEdit}>Edit Profile</EditButton>
    </CandidateProfileSection>
  );
};
