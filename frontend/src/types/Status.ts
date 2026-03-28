export interface ApplicationStatus {
  id: string;
  vacancyId: string;
  logo: string;
  company: string;
  status: "Pending" | "Approved" | "Rejected" | "Not Applied";
  color: string;
}