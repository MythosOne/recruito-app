type CandidateDetailModalProps = {
  candidate: {
    id: string;
    avatarUrl: string;
    candidateInfo: {
      firstName: string;
      lastName: string;
      position: string;
    };
    expandedInfo: {
      email: string;
      phone: string;
      experience: number;
      skills: string[];
      location: string;
      summary: string;
    };
  };
  setIsOpen: (isOpenInfo: boolean) => void;
};

export const CandidateDetailModal = ({
  candidate,
  setIsOpen,
}: CandidateDetailModalProps) => {
  const {
    candidateInfo: { firstName, lastName, position },
    expandedInfo: { email, phone, experience, skills, location, summary },
  } = candidate;
  return (
    <div className="candidate-detail-modal">
      <button onClick={() => setIsOpen(false)}>Close</button>
      <div className="modal-content">
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Position: {position}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Experience: {experience} years</p>
        <p>Skills: {skills.join(', ')}</p>
        <p>Location: {location}</p>
        <p>Summary: {summary}</p>
      </div>
    </div>
  );
};
