import type { Vacancy } from '@/types/Vacancy';

import {
  Card,
  Title,
  Location,
  Description,
  Tags,
  Tag,
} from './VacancyCard.styled';
import { Tooltip } from '@mui/material';

type VacancyCardProps = {
  vacancy: Vacancy;
};

export const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  const { title, location, employmentType, description, tags } = vacancy;
  return (
    <Card>
      <Title>{title}</Title>
      <Location>
        {location} • {employmentType}
      </Location>
      <Tooltip title={description}>
        <Description >{description}</Description>
      </Tooltip>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </Card>
  );
};
