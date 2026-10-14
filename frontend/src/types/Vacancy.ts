export interface Vacancy {
  id: string;
  recruiterId: string;
  position: string;
  company: string;
  location: string;
  employmentType: string;
  description: string;
  tags: string[];
  createdAt: string;
  variant?: "main" | "profile"
  status: 'draft' | 'published';
}