import type { Vacancy } from '@/types/Vacancy';

import {
  Card,
  Logo,
  JobInfo,
  Position,
  Company,
  Location,
  Description,
  Tags,
  Tag,
  RespondedButton,
} from './VacancyCard.styled';
import { Tooltip } from '@mui/material';

type VacancyCardProps = {
  vacancy: Vacancy;
  variant?: 'main' | 'profile';
};

export const VacancyCard: React.FC<VacancyCardProps> = ({
  vacancy,
  variant = 'main',
}) => {
  const { position, company, location, employmentType, description, tags } =
    vacancy;

  const content = (
    <>
      <Position>{position}</Position>
      <Company>{company}</Company>
      <Location>
        {location} • {employmentType}
      </Location>
      {variant === 'main' ? (
        <>
          <Description>{description}</Description>
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </>
      ) : (
        <>
          <Tooltip title={description}>
            <Description>Job description...</Description>
          </Tooltip>
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </>
      )}
    </>
  );

  return (
    <Card variant={variant}>
      {variant === 'profile' && <Logo src="/logo.png" alt="Company Logo" />}
      {variant === 'main' ? content : <JobInfo>{content}</JobInfo>}
      {variant === 'profile' && <RespondedButton>Responded</RespondedButton>}
    </Card>
  );
};
