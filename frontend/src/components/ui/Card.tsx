import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export const Card = ({ children, className = '', padding = 'md', hover = false }: CardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={`
        bg-[#111] border border-gray-800 rounded-xl
        ${paddingClasses[padding]}
        ${hover ? 'hover:border-gray-700 transition-colors' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};