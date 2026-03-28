import {
  Card,
  LogoCompany,
  NameCompany,
  StatusBadge,
} from './ApplicationStatusCard.styled';

import type { applicationStatus } from '@/types/Status';

type ApplicationStatusCardProps = {
  statusCard: applicationStatus;
};
export const ApplicationStatusCard: React.FC<ApplicationStatusCardProps> = ({
  statusCard,
}) => {
  const { company, logo, status } = statusCard;
  return (
    <Card>
      <LogoCompany src={logo} alt="Company Logo" />
      <NameCompany>{company}</NameCompany>
      <StatusBadge>{status}</StatusBadge>
    </Card>
  );
};
