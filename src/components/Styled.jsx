import styled, { css, keyframes } from 'styled-components';

/* ==========================================================================
   DESIGN TOKENS - Nordic Frost Theme
   ========================================================================== */
export const tokens = {
  colors: {
    void: '#08090b',
    slateDeep: '#0d1017',
    slate: '#131921',
    slateLight: '#1a2332',
    slateLighter: '#243044',
    
    silver: '#e8eaed',
    silverDim: '#b8bfc7',
    silverMuted: '#7d8590',
    
    ice: '#7eb8c9',
    iceLight: '#a3d4e3',
    iceDim: '#5a9aad',
    
    frost: '#4a9ead',
    teal: '#2d8a9c',
    steel: '#4a5568',
    
    textPrimary: '#e8eaed',
    textSecondary: '#9ca3af',
    textMuted: '#5d6878',
  },
  
  fonts: {
    display: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  
  spacing: {
    1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem',
    5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem',
    12: '3rem', 16: '4rem', 20: '5rem', 24: '6rem',
  },
  
  radius: { sm: '4px', md: '6px', lg: '8px' },
  
  transitions: {
    fast: '150ms ease',
    base: '250ms ease',
    slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

/* Keyframes */
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ==========================================================================
   LAYOUT COMPONENTS
   ========================================================================== */
export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${tokens.colors.slateDeep};
  color: ${tokens.colors.textPrimary};
  position: relative;
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${props => props.$wide ? '1400px' : '1200px'};
  margin: 0 auto;
  padding: 0 ${tokens.spacing[6]};
  
  @media (max-width: 768px) {
    padding: 0 ${tokens.spacing[4]};
  }
`;

export const Section = styled.section`
  padding: ${props => props.$tight ? tokens.spacing[16] : tokens.spacing[24]} 0;
  
  @media (max-width: 768px) {
    padding: ${props => props.$tight ? tokens.spacing[12] : tokens.spacing[16]} 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: ${props => props.$gap || tokens.spacing[8]};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  align-items: ${props => props.$align || 'stretch'};
  justify-content: ${props => props.$justify || 'flex-start'};
  gap: ${props => props.$gap || '0'};
  flex-wrap: ${props => props.$wrap ? 'wrap' : 'nowrap'};
`;

/* ==========================================================================
   TYPOGRAPHY
   ========================================================================== */
export const DisplayTitle = styled.h1`
  font-family: ${tokens.fonts.display};
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${tokens.colors.silver};
  
  em, span.accent {
    color: ${tokens.colors.ice};
    font-style: normal;
  }
`;

export const Heading1 = styled.h1`
  font-family: ${tokens.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${tokens.colors.silver};
`;

export const Heading2 = styled.h2`
  font-family: ${tokens.fonts.display};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${tokens.colors.silver};
`;

export const Heading3 = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
  color: ${tokens.colors.silver};
`;

export const Heading4 = styled.h4`
  font-family: ${tokens.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${tokens.colors.silver};
`;

export const BodyLarge = styled.p`
  font-family: ${tokens.fonts.body};
  font-size: 1.125rem;
  line-height: 1.7;
  font-weight: 400;
  color: ${props => props.$muted ? tokens.colors.textSecondary : tokens.colors.textPrimary};
  max-width: ${props => props.$prose ? '60ch' : 'none'};
`;

export const BodyText = styled.p`
  font-family: ${tokens.fonts.body};
  font-size: 1rem;
  line-height: 1.7;
  color: ${props => props.$muted ? tokens.colors.textSecondary : tokens.colors.textPrimary};
`;

export const Label = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${props => props.$accent ? tokens.colors.ice : tokens.colors.textMuted};
`;

/* ==========================================================================
   CARD COMPONENTS
   ========================================================================== */
export const Card = styled.div`
  background: ${tokens.colors.slate};
  border: 1px solid ${tokens.colors.slateLight};
  border-radius: ${tokens.radius.md};
  padding: ${props => props.$padding || tokens.spacing[6]};
  transition: all ${tokens.transitions.base};
  
  ${props => props.$hoverable && css`
    &:hover {
      background: ${tokens.colors.slateLight};
      border-color: ${tokens.colors.slateLighter};
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }
  `}
`;

export const CardAccent = styled(Card)`
  border-left: 2px solid ${tokens.colors.ice};
`;

/* ==========================================================================
   BUTTON COMPONENTS
   ========================================================================== */
export const Button = styled.button`
  font-family: ${tokens.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  padding: ${tokens.spacing[3]} ${tokens.spacing[6]};
  border-radius: ${tokens.radius.sm};
  border: none;
  cursor: pointer;
  transition: all ${tokens.transitions.base};
  display: inline-flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
  
  ${props => props.$primary && css`
    background: ${tokens.colors.ice};
    color: ${tokens.colors.slateDeep};
    
    &:hover {
      background: ${tokens.colors.iceLight};
      transform: translateY(-1px);
    }
  `}
  
  ${props => props.$secondary && css`
    background: transparent;
    color: ${tokens.colors.silver};
    border: 1px solid ${tokens.colors.slateLight};
    
    &:hover {
      border-color: ${tokens.colors.ice};
      color: ${tokens.colors.ice};
    }
  `}
`;

/* ==========================================================================
   DECORATIVE COMPONENTS
   ========================================================================== */
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${tokens.colors.slateLight};
  margin: ${props => props.$spacing || tokens.spacing[12]} 0;
`;

export const AccentLine = styled.div`
  width: ${props => props.$width || '40px'};
  height: 2px;
  background: ${tokens.colors.ice};
`;

export const Tag = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: ${tokens.spacing[1]} ${tokens.spacing[3]};
  border-radius: ${tokens.radius.sm};
  background: ${tokens.colors.slateLight};
  color: ${tokens.colors.textSecondary};
  border: 1px solid ${tokens.colors.slateLighter};
  transition: all ${tokens.transitions.fast};
  
  &:hover {
    border-color: ${tokens.colors.ice};
    color: ${tokens.colors.ice};
  }
`;

/* ==========================================================================
   LINK COMPONENTS
   ========================================================================== */
export const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.colors.textSecondary};
  background: ${tokens.colors.slate};
  border: 1px solid ${tokens.colors.slateLight};
  border-radius: ${tokens.radius.sm};
  transition: all ${tokens.transitions.base};
  
  &:hover {
    color: ${tokens.colors.ice};
    border-color: ${tokens.colors.ice};
    background: rgba(126, 184, 201, 0.1);
  }
`;

/* ==========================================================================
   BACKGROUND
   ========================================================================== */
export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 60% 40% at 10% 20%, rgba(126, 184, 201, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse 50% 50% at 90% 80%, rgba(74, 158, 173, 0.04) 0%, transparent 50%);
  pointer-events: none;
`;

/* ==========================================================================
   ANIMATION WRAPPERS
   ========================================================================== */
export const AnimateOnScroll = styled.div`
  opacity: 0;
  animation: ${slideUp} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: ${props => props.$delay || '0s'};
`;

/* ==========================================================================
   SPECIAL COMPONENTS
   ========================================================================== */
export const ProfileImage = styled.div`
  position: relative;
  width: ${props => props.$size || '200px'};
  height: ${props => props.$size || '200px'};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${tokens.radius.md};
    transition: all ${tokens.transitions.base};
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${tokens.radius.md};
    border: 1px solid ${tokens.colors.slateLight};
    transform: translate(6px, 6px);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${tokens.radius.md};
    border: 1px solid ${tokens.colors.ice};
    opacity: 0;
    transition: opacity ${tokens.transitions.base};
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: ${tokens.spacing[8]};
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    width: 8px;
    height: 8px;
    background: ${tokens.colors.ice};
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 18px;
    width: 2px;
    height: calc(100% - 10px);
    background: ${tokens.colors.slateLight};
  }
  
  &:last-child::after {
    display: none;
  }
`;

export const StatBox = styled.div`
  text-align: ${props => props.$center ? 'center' : 'left'};
  
  .stat-value {
    font-family: ${tokens.fonts.display};
    font-size: 2.5rem;
    font-weight: 700;
    color: ${tokens.colors.silver};
    line-height: 1;
    margin-bottom: ${tokens.spacing[1]};
  }
  
  .stat-label {
    font-family: ${tokens.fonts.mono};
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${tokens.colors.textMuted};
  }
`;