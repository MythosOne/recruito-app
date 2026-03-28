import type { ApplicationStatus } from '@/types/Status';

export const applicationStatus: ApplicationStatus[] = [
  {
    id: '1',
    vacancyId: '1',
    logo: '/src',
    company: 'Tech Solutions Inc.',
    status: 'Pending',
    color: '#b5c9e9',
  },
  {
    id: '2',
    vacancyId: '2',
    logo: '/src',
    company: 'Creative Agency LLC',
    status: 'Approved',
    color: '#a2da99',
  },
  {
    id: '3',
    vacancyId: '3',
    logo: '/src',
    company: 'Innovate Corp.',
    status: 'Rejected',
    color: '#ec6152',
  },
  {
    id: '4',
    vacancyId: '4',
    logo: '/src',
    company: 'Cloud Services Ltd.',
    status: 'Not Applied',
    color: '#f5f244',
  },
  {
    id: '5',
    vacancyId: '5',
    logo: '/src',
    company: 'Project Manager',
    status: 'Approved',
    color: '#a2da99',
  },
  {
    id: '6',
    vacancyId: '6',
    logo: '/src',
    company: 'Quality First LLC',
    status: 'Not Applied',
    color: '#f5f244',
  },
];
