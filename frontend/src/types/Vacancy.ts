export interface Vacancy {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  description: string;
  tags: string[];
  createdAt: string;
  variant?: "main" | "profile"
}