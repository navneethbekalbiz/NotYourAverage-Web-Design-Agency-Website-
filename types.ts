import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface CardProps extends BaseProps {
  glow?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: ReactNode;
}