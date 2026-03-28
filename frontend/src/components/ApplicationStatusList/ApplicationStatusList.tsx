import { ApplicationStatusCard } from '@/components/ApplicationStatusCard/ApplicationStatusCard';
import type { ApplicationStatus } from '@/types/Status';

import {
  ApplicationContainer,
  Title,
  StatusList,
} from './ApplicationStatusList.styled';

type ApplicationStatusListProps = {
  applicationStatus: ApplicationStatus[];
};

export const ApplicationStatusList: React.FC<ApplicationStatusListProps> = ({
  applicationStatus,
}) => {

  return (
    <ApplicationContainer>
      <Title>Application Status List</Title>
      <StatusList>
        {applicationStatus.map((statusCard) => (
          <ApplicationStatusCard key={statusCard.id} statusCard={statusCard} />
        ))}
      </StatusList>
    </ApplicationContainer>
  );
};
