export interface Candidate {
  id: string;
  avatarUrl: string;
  candidateInfo: {
    firstName: string;
    lastName: string;
    position: string;
  };
  status: 'Pending' | 'Approved' | 'Rejected';
  expandedInfo: {
    email: string;
    phone: string;
    experience: number;
    skills: string[];
    location: string;
    summary: string;
  };
}
