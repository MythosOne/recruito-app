import { useState, useLayoutEffect } from 'react';

import { LoginForm } from '@/components/forms/LoginForm/LoginForm';
import { RegisterForm } from '@/components/forms/RegisterForm/RegisterForm';

import { Overlay, Modal } from './AuthModal.styled';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register' | null;
  onSwitchMode?: (mode: 'login' | 'register') => void;
};

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose: closeModal,
  mode,
  //   onSwitchMode,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentMode, setCurrentMode] = useState<'login' | 'register' | null>(
    null,
  );

  useLayoutEffect(() => {
    if (isOpen) {
      setCurrentMode(mode);
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
      setCurrentMode(null);
    }
  };

  if (!isMounted) return null;

  return (
    <Overlay
      visible={isVisible}
      onClick={closeModal}
      onTransitionEnd={handleTransitionEnd}
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        {currentMode === 'login' && <LoginForm />}
        {currentMode === 'register' && <RegisterForm />}
      </Modal>
    </Overlay>
  );
};
