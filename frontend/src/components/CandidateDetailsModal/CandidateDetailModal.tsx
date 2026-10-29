import { useState, useLayoutEffect } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CandidateDetails,
  // CandidateName,
  CandidatePosition,
  CandidateEmail,
  CandidatePhone,
  CandidateExperience,
  CandidateSkills,
  CandidateLocation,
  CandidateSummary,
  CloseButton,
} from './CandidateDetailModal.styled';

type CandidateDetailModalProps = {
  isOpen: boolean;
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
  isOpen,
  setIsOpen,
}: CandidateDetailModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isVisible) {
      setIsMounted(false);
    }
  };

  if (!isMounted) return null;

  const {
    candidateInfo: { firstName, lastName, position },
    expandedInfo: { email, phone, experience, skills, location, summary },
  } = candidate;
  return (
    <ModalOverlay visible={isVisible} onTransitionEnd={handleTransitionEnd}>
      <ModalContainer
        role="dialog"
        aria-modal="true"
        aria-labelledby="candidate-detail-modal"
      >
        <ModalHeader>
          View details about {firstName} {lastName}
        </ModalHeader>
        <CandidateDetails>
          {/* <CandidateName>
            {firstName} {lastName}
          </CandidateName> */}
          <CandidatePosition>Position: {position}</CandidatePosition>
          <CandidateEmail>Email: {email}</CandidateEmail>
          <CandidatePhone>Phone: {phone}</CandidatePhone>
          <CandidateExperience>
            Experience: {experience} years
          </CandidateExperience>
          <CandidateSkills>Skills: {skills.join(', ')}</CandidateSkills>
          <CandidateLocation>Location: {location}</CandidateLocation>
          <CandidateSummary>Summary: {summary}</CandidateSummary>
        </CandidateDetails>
        <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};
