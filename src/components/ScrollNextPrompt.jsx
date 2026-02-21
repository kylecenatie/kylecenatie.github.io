// src/components/ScrollNextPrompt.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import styled, { keyframes } from 'styled-components';
import { ArrowRight } from 'lucide-react';
import { tokens } from './ReusableComponents';

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(5px); }
`;

const Prompt = styled.div`
  position: fixed;
  bottom: ${tokens.spacing[8]};
  right: ${tokens.spacing[8]};
  z-index: 50;
  animation: ${fadeSlideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @media (max-width: 640px) {
    bottom: ${tokens.spacing[4]};
    right: ${tokens.spacing[4]};
  }
`;

const PromptLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[3]};
  padding: ${tokens.spacing[3]} ${tokens.spacing[5]};
  background: ${tokens.colors.rust};
  color: ${tokens.colors.paperLight} !important;
  border-radius: ${tokens.radius.sm};
  font-family: ${tokens.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none !important;
  box-shadow: 0 4px 20px rgba(181, 86, 58, 0.35);
  transition: background ${tokens.transitions.fast}, transform ${tokens.transitions.fast};

  &:hover {
    background: ${tokens.colors.rustDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(181, 86, 58, 0.45);

    svg {
      animation: ${bounce} 0.6s ease infinite;
    }
  }
`;

const ScrollNextPrompt = ({ label, to }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
      setVisible(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <Prompt>
      <PromptLink to={to}>
        {label}
        <ArrowRight size={16} />
      </PromptLink>
    </Prompt>
  );
};

export default ScrollNextPrompt;