
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Container, SocialLink, tokens } from './ReusableComponents';

const bounce = keyframes`
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(5px); }
`;

const FooterWrapper = styled.div`
  display: flex;
  background: ${tokens.colors.charcoalLight};
  justify-content: center;
  padding: ${tokens.spacing[6]} 0;
  border-top: 1px solid ${tokens.colors.paperBorder};
  position: relative;
`;

const NextPageLink = styled(NavLink)`
  position: absolute;
  
  right: ${tokens.spacing[8]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[3]};
  text-decoration: none !important;
  color: ${tokens.colors.paper} !important;
  transition: color ${tokens.transitions.base};

  span {
    font-family: ${tokens.fonts.mono};
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    transition: color ${tokens.transitions.base};
  }

  svg {
    transition: color ${tokens.transitions.base};
  }

  &:hover span,
  &:hover svg {
    color: ${tokens.colors.rust} !important;

    svg {
      animation: ${bounce} 0.6s ease infinite;
    }
  }

  &:hover svg {
    animation: ${bounce} 0.6s ease infinite;
  }

  @media (max-width: 768px) {
    right: ${tokens.spacing[4]};
  }
`;

const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[4]};
`;
const FooterSocialLink = styled(SocialLink)`
  color: ${tokens.colors.paper};
  border-color: ${tokens.colors.paper};

  &:hover {
    color: ${tokens.colors.rustLight};
    border-color: ${tokens.colors.rustLight};
  }
`;

const SocialLinksRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${tokens.spacing[6]};
`;

const socialLinks = [
  { icon: Github,   href: 'https://github.com/kylecenatie',            label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kyle-sjoberg/',  label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:sjobergky@gmail.com',                 label: 'Email' },
];

const PageFooter = ({ nextLabel, nextTo }) => (
  <FooterWrapper>
    <Container>
      <FooterInner>
        <SocialLinksRow>
          {socialLinks.map((s) => (
            <FooterSocialLink
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={s.label}
            >
              <s.icon size={18} />
            </FooterSocialLink>
          ))}
        </SocialLinksRow>
      </FooterInner>
    </Container>

    {nextTo && (
      <NextPageLink to={nextTo}>
        <span>{nextLabel || 'Continue'}</span>
        <ArrowRight size={16} />
      </NextPageLink>
    )}
  </FooterWrapper>
);

export default PageFooter;