import styled, { css, keyframes } from 'styled-components';

/* ==========================================================================
   DESIGN TOKENS (JS)
   Warm Paper Theme - Light beige with charcoal and rust
   ========================================================================== */
export const tokens = {
  colors: {
    // Paper backgrounds
    paper: '#f7f3ed',
    paperLight: '#fffdf9',
    paperDark: '#ebe5db',
    paperBorder: '#e0d8cb',
    
    // Charcoal text
    charcoal: '#2d2a26',
    charcoalLight: '#4a4540',
    charcoalMuted: '#6b655d',
    
    // Rust accent
    rust: '#b5563a',
    rustLight: '#c9705a',
    rustDark: '#964530',
    
    // Warm grays
    warmGray: '#8a8279',
    warmGrayLight: '#a69f96',
    
    // Extras
    accentSubtle: '#d4c4b0',
    ink: '#1a1815',
    
    // Semantic
    textPrimary: '#2d2a26',
    textSecondary: '#6b655d',
    textMuted: '#8a8279',
  },
  
  fonts: {
    display: "'Libre Baskerville', Georgia, serif",
    body: "'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
  
  radius: {
    sm: '3px',
    md: '6px',
    lg: '10px',
  },
  
  transitions: {
    fast: '150ms ease',
    base: '250ms ease',
    slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

/* ==========================================================================
   KEYFRAMES
   ========================================================================== */
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

/* ==========================================================================
   LAYOUT COMPONENTS
   ========================================================================== */
export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${tokens.colors.paper};
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
   TYPOGRAPHY COMPONENTS
   ========================================================================== */
export const DisplayTitle = styled.h1`
  font-family: ${tokens.fonts.display};
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${tokens.colors.charcoal};
  
  em, i {
    font-style: italic;
    color: ${tokens.colors.rust};
  }
`;

export const Heading1 = styled.h1`
  font-family: ${tokens.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: ${tokens.colors.charcoal};
`;

export const Heading2 = styled.h2`
  font-family: ${tokens.fonts.display};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  line-height: 1.2;
  color: ${tokens.colors.charcoal};
`;

export const Heading3 = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.3;
  color: ${tokens.colors.charcoal};
`;

export const Heading4 = styled.h4`
  font-family: ${tokens.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${tokens.colors.charcoal};
`;

export const BodyLarge = styled.p`
  font-family: ${tokens.fonts.body};
  font-size: 1.125rem;
  line-height: 1.7;
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
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${props => props.$accent ? tokens.colors.rust : tokens.colors.textMuted};
`;

/* ==========================================================================
   CARD COMPONENTS
   ========================================================================== */
export const Card = styled.div`
  background: ${tokens.colors.paperLight};
  border: 1px solid ${tokens.colors.paperBorder};
  border-radius: ${tokens.radius.md};
  padding: ${props => props.$padding || tokens.spacing[8]};
  transition: all ${tokens.transitions.base};
  
  ${props => props.$hoverable && css`
    &:hover {
      border-color: ${tokens.colors.accentSubtle};
      box-shadow: 0 4px 20px rgba(45, 42, 38, 0.08);
      transform: translateY(-2px);
    }
  `}
`;

export const CardAccent = styled(Card)`
  border-left: 3px solid ${tokens.colors.rust};
`;

export const CardSubtle = styled(Card)`
  background: ${tokens.colors.paper};
  border-color: ${tokens.colors.paperDark};
`;

/* ==========================================================================
   BUTTON COMPONENTS
   ========================================================================== */
export const Button = styled.button`
  font-family: ${tokens.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: ${tokens.spacing[3]} ${tokens.spacing[6]};
  border-radius: ${tokens.radius.sm};
  border: none;
  cursor: pointer;
  transition: all ${tokens.transitions.base};
  display: inline-flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
  
  ${props => props.$primary && css`
    background: ${tokens.colors.rust};
    color: ${tokens.colors.paperLight};
    
    &:hover {
      background: ${tokens.colors.rustDark};
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(181, 86, 58, 0.25);
    }
  `}
  
  ${props => props.$secondary && css`
    background: transparent;
    color: ${tokens.colors.charcoal};
    border: 1px solid ${tokens.colors.paperBorder};
    
    &:hover {
      border-color: ${tokens.colors.charcoal};
      background: ${tokens.colors.paperDark};
    }
  `}
  
  ${props => props.$ghost && css`
    background: transparent;
    color: ${tokens.colors.textSecondary};
    padding: ${tokens.spacing[2]} ${tokens.spacing[3]};
    
    &:hover {
      color: ${tokens.colors.rust};
    }
  `}
`;

/* ==========================================================================
   DECORATIVE COMPONENTS
   ========================================================================== */
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${tokens.colors.paperBorder};
  margin: ${props => props.$spacing || tokens.spacing[12]} 0;
`;

export const AccentLine = styled.div`
  width: ${props => props.$width || '50px'};
  height: 2px;
  background: ${tokens.colors.rust};
`;

export const Tag = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: ${tokens.spacing[1]} ${tokens.spacing[3]};
  border-radius: ${tokens.radius.sm};
  background: ${tokens.colors.paperDark};
  color: ${tokens.colors.textSecondary};
  border: 1px solid ${tokens.colors.paperBorder};
  transition: all ${tokens.transitions.fast};
  
  &:hover {
    background: ${tokens.colors.accentSubtle};
    color: ${tokens.colors.charcoal};
  }
`;

/* ==========================================================================
   LINK COMPONENTS
   ========================================================================== */
export const LinkUnderline = styled.a`
  position: relative;
  display: inline-block;
  color: ${tokens.colors.charcoal};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${tokens.colors.rust};
    transition: width ${tokens.transitions.base};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.colors.textSecondary};
  border: 1px solid ${tokens.colors.paperBorder};
  border-radius: ${tokens.radius.sm};
  transition: all ${tokens.transitions.base};
  
  &:hover {
    color: ${tokens.colors.rust};
    border-color: ${tokens.colors.rust};
    background: rgba(181, 86, 58, 0.05);
  }
`;

/* ==========================================================================
   BACKGROUND COMPONENTS
   ========================================================================== */
export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 60% 40% at 10% 0%, rgba(181, 86, 58, 0.04) 0%, transparent 50%),
    radial-gradient(ellipse 50% 30% at 90% 100%, rgba(212, 196, 176, 0.15) 0%, transparent 50%);
  pointer-events: none;
`;

/* ==========================================================================
   ANIMATION WRAPPERS
   ========================================================================== */
export const AnimateOnScroll = styled.div`
  opacity: 0;
  animation: ${slideUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: ${props => props.$delay || '0s'};
`;

export const FadeIn = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${props => props.$delay || '0s'};
`;

/* ==========================================================================
   SPECIAL COMPONENTS
   ========================================================================== */
export const ProfileImage = styled.div`
  position: relative;
  width: ${props => props.$size || '200px'};
  height: ${props => props.$size || '200px'};
  border: 3px solid ${tokens.colors.charcoal};
  border-radius: 14px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    transition: all ${tokens.transitions.base};
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(181, 86, 58, 0.08) 0%,
      transparent 50%
    );
    border-radius: 10px;
    pointer-events: none;
  }
  
  &:hover img {
    transform: scale(1.02);
  }
`;
export const TimelineItem = styled.div`
  position: relative;
  padding-left: ${tokens.spacing[8]};
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 10px;
    height: 10px;
    background: ${tokens.colors.rust};
    border-radius: 50%;
    border: 2px solid ${tokens.colors.paper};
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 22px;
    width: 2px;
    height: calc(100% - 14px);
    background: ${tokens.colors.paperBorder};
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
    font-weight: 400;
    color: ${tokens.colors.charcoal};
    line-height: 1;
    margin-bottom: ${tokens.spacing[2]};
  }
  
  .stat-label {
    font-family: ${tokens.fonts.mono};
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: ${tokens.colors.textMuted};
  }
`;