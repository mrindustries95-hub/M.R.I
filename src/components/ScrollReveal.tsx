import React from 'react';
import { motion } from 'motion/react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const animations = {
  'fade-up': {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  },
  'fade-down': {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
  },
  'fade-left': {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
  },
  'fade-right': {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
  },
  'zoom-out': {
    initial: { opacity: 0, scale: 1.2 },
    whileInView: { opacity: 1, scale: 1 },
  },
  'flip-up': {
    initial: { opacity: 0, rotateX: -90 },
    whileInView: { opacity: 1, rotateX: 0 },
  },
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  once = true,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={className}
      style={{ ...style, perspective: '1000px' }}
      data-aos={animation}
      data-aos-delay={Math.floor(delay * 1000)}
      data-aos-duration={Math.floor(duration * 1000)}
      data-aos-once={once}
    >
      {children}
    </div>
  );
};
