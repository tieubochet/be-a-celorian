import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-[var(--bg-card)] rounded-[3px] border border-[var(--border-color)] p-5 shadow-sm ${className}`}>
      {title && (
        <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-3">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};