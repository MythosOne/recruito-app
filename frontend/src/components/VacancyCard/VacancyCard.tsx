import type { Vacancy } from '@/types/Vacancy';

import {
  Card,
  Logo,
  Title,
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
  const { title, company, location, employmentType, description, tags } =
    vacancy;
  return (
    <Card variant={variant}>
      {variant === 'profile' && <Logo src="/logo.png" alt="Company Logo" />}
      <Title>{title}</Title>
      <Company>{company}</Company>
      <Location>
        {location} • {employmentType}
      </Location>
      <Tooltip title={description}>
        <Description>{description}</Description>
      </Tooltip>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      {variant === 'profile' && <RespondedButton>Responded</RespondedButton>}
    </Card>
  );
};
