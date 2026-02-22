// src/components/PageFooter.jsx
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import {
  Section,
  Container,
  SocialLink,
  tokens,
  slideUp,
} from './ReusableComponents';

/* ==========================================================================
   STYLES
   ========================================================================== */
const FooterWrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[4]};
  padding-top: ${tokens.spacing[6]};
  padding-bottom: ${tokens.spacing[6]};
`;

const NextPageLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[3]};
  color: ${tokens.colors.textMuted};
  text-decoration: none;
  cursor: none;

  span {
    font-family: ${tokens.fonts.mono};
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    transition: color ${tokens.transitions.fast};
  }

  svg {
    animation: bounce 2s infinite;
    transition: color ${tokens.transitions.fast};
  }

  &:hover span,
  &:hover svg {
    color: ${tokens.colors.rust};
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(6px); }
    60% { transform: translateY(3px); }
  }

  @media (max-width: 768px) {
    cursor: auto;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background: ${tokens.colors.paperBorder};
`;

const SocialLinksRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${tokens.spacing[4]};
`;

/* ==========================================================================
   CURSOR
   ========================================================================== */
const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: ${tokens.colors.rust};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  will-change: transform;
`;

const CursorRing = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 1.5px solid ${tokens.colors.rust};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition:
    width 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.2s ease;
  will-change: transform;
`;

/* ==========================================================================
   COMPONENT
   ========================================================================== */
const socialLinks = [
  { icon: Github,   href: 'https://github.com/kylecenatie',          label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kyle-sjoberg/', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:sjobergky@gmail.com',               label: 'Email' },
];

const PageFooter = ({ nextLabel, nextTo }) => {
  const dotRef  = React.useRef(null);
  const ringRef = React.useRef(null);
  const [cursorVisible, setCursorVisible] = React.useState(false);

  const handleMouseMove = (e) => {
    dotRef.current.style.left  = `${e.clientX}px`;
    dotRef.current.style.top   = `${e.clientY}px`;
    ringRef.current.style.left = `${e.clientX}px`;
    ringRef.current.style.top  = `${e.clientY}px`;
  };

  return (
    <>
      <CursorDot  ref={dotRef}  style={{ opacity: cursorVisible ? 1 : 0 }} />
      <CursorRing ref={ringRef} style={{ opacity: cursorVisible ? 1 : 0 }} />

      <FooterWrapper $tight>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: tokens.spacing[8] }}>
            
            {/* Next page prompt */}
            {nextTo && (
              <NextPageLink
                to={nextTo}
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                onMouseMove={handleMouseMove}
              >
                <span>{nextLabel || 'Continue'}</span>
                <ArrowDown size={16} />
              </NextPageLink>
            )}

            <Divider />

            {/* Social icons */}
            <SocialLinksRow>
              {socialLinks.map((s) => (
                <SocialLink
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </SocialLink>
              ))}
            </SocialLinksRow>

          </div>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default PageFooter;