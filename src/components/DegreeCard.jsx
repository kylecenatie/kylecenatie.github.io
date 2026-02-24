import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Trophy, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Card, tokens } from '../components/ReusableComponents';
import asuSeal from '../images/asu-seal.png';
import asuMascot from '../images/sparky.png';

/* ─────────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────────── */
const mascotReveal = keyframes`
  from { opacity: 0; transform: scale(0.8) rotate(-10deg); }
  to   { opacity: 1; transform: scale(1) rotate(0deg); }
`;

/* ─────────────────────────────────────────────
   CARD SHELL
───────────────────────────────────────────── */
const CardShell = styled(Card)`
  padding: ${tokens.spacing[10]};
  position: relative;
  overflow: hidden;

  /* Rust top bar */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${tokens.colors.rust};
  }

  /* ASU seal watermark — bottom-right corner */
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    right: -16px;
    width: 160px;
    height: 160px;
    background: url(${asuSeal}) center / contain no-repeat;
    /* darker than before: 0.10 base, 0.15 on hover */
    opacity: 0.10;
    pointer-events: none;
    transition: opacity ${tokens.transitions.slow};
  }

  &:hover::after {
    opacity: 0.15;
  }
`;

/* ─────────────────────────────────────────────
   SPARKY MASCOT — top-right, larger, no hover effect
───────────────────────────────────────────── */
const MascotBadge = styled.div`
  position: absolute;
  top: ${tokens.spacing[5]};
  right: ${tokens.spacing[8]};
  /* larger than before (was 56×72) */
  width: 72px;
  height: 92px;
  pointer-events: none;
`;

const MascotImage = styled.img`
  width: 150%;
  height: 150%;
  object-fit: contain;
  mix-blend-mode: multiply;
  animation: ${mascotReveal} 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: ${props => props.$delay || '0.2s'};
  opacity: 0.9;
`;

/* ─────────────────────────────────────────────
   CARD INTERNALS
───────────────────────────────────────────── */
const DegreeType = styled.span`
  display: inline-block;
  font-family: ${tokens.fonts.mono};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${tokens.colors.rust};
  background: rgba(181, 86, 58, 0.1);
  border: 1px solid rgba(181, 86, 58, 0.2);
  padding: ${tokens.spacing[1]} ${tokens.spacing[3]};
  border-radius: ${tokens.radius.sm};
  margin-bottom: ${tokens.spacing[4]};
`;

const DegreeTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.375rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  margin-bottom: ${tokens.spacing[2]};
  /* leave room so text doesn't run under Sparky */
  padding-right: 84px;
`;

const Institution = styled.p`
  font-size: 1rem;
  color: ${tokens.colors.rust};
  font-weight: 500;
  margin-bottom: ${tokens.spacing[4]};
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[4]};
  margin-bottom: ${tokens.spacing[6]};
  padding-bottom: ${tokens.spacing[4]};
  border-bottom: 1px solid ${tokens.colors.paperBorder};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[1]};
  font-size: 0.8rem;
  color: ${tokens.colors.textMuted};
  svg { width: 12px; height: 12px; }
`;

const Description = styled.p`
  font-size: 0.9375rem;
  color: ${tokens.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${tokens.spacing[6]};
`;

const AchievementsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[3]};
`;

const AchievementItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${tokens.spacing[2]};
  font-size: 0.875rem;
  color: ${tokens.colors.textSecondary};
  svg { color: ${tokens.colors.rust}; flex-shrink: 0; margin-top: 2px; }
`;




/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const DegreeCard = ({ edu,  animDelay }) => (
  <CardShell $hoverable>

    {/* Sparky — static, larger, no hover effect */}
    <MascotBadge>
      <MascotImage
        src={asuMascot}
        alt="Arizona State Sun Devils mascot"
        $delay={animDelay}
        onError={e => { e.currentTarget.style.display = 'none'; }}
      />
    </MascotBadge>

    <DegreeType>{edu.type}</DegreeType>
    <DegreeTitle>{edu.title}</DegreeTitle>
    <Institution>{edu.institution}</Institution>

    <MetaRow>
      <MetaItem><MapPin />{edu.location}</MetaItem>
      <MetaItem><Calendar />{edu.period}</MetaItem>
      <MetaItem><Trophy />GPA: {edu.gpa}</MetaItem>
    </MetaRow>

    <Description>{edu.description}</Description>

    <AchievementsList>
      {edu.achievements.map((a, j) => (
        <AchievementItem key={j}>
          <CheckCircle size={14} />{a}
        </AchievementItem>
      ))}
    </AchievementsList>

  </CardShell>
);

export default DegreeCard;