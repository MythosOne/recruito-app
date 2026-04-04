import { ApplicationStatusCard } from '@/components/ApplicationStatusCard/ApplicationStatusCard';
import type { ApplicationStatus } from '@/types/Status';

import {
  ApplicationSection,
  ApplicationSectionHeader,
  ApplicationSectionTitle,
  StatusList,
  ListItem,
} from './ApplicationStatusList.styled';

type ApplicationStatusListProps = {
  applicationStatus: ApplicationStatus[];
};

export const ApplicationStatusList: React.FC<ApplicationStatusListProps> = ({
  applicationStatus,
}) => {
  return (
    <ApplicationSection>
      <ApplicationSectionHeader>
        <ApplicationSectionTitle>Application Status List</ApplicationSectionTitle>
      </ApplicationSectionHeader>
      <StatusList>
        {applicationStatus.map((statusCard) => (
          <ListItem key={statusCard.id}>
            <ApplicationStatusCard statusCard={statusCard} />
          </ListItem>
        ))}
      </StatusList>
    </ApplicationSection>
  );
};
