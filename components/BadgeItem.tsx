import React from 'react';
import { Badge } from '../types';
import { ExternalLink, Info } from 'lucide-react';

interface BadgeItemProps {
  badge: Badge;
  onDetailsClick: (badge: Badge) => void;
}

export const BadgeItem: React.FC<BadgeItemProps> = ({ badge, onDetailsClick }) => {
  return (
    <div className="group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] items-start sm:items-center gap-x-4 gap-y-3 sm:gap-6 p-4 sm:p-5 border-b border-[var(--border-color)] hover:bg-[var(--hover-bg)] transition-all duration-200 last:border-0">
      
      {/* COLUMN 1: Logo/Image (Left side of Row 1 on Mobile) */}
      <div className="flex shrink-0">
        <img 
          src={badge.image} 
          alt={badge.name} 
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-[3px] object-cover shadow-sm ring-1 ring-[var(--ring-color)]"
        />
      </div>

      {/* COLUMN 2: Content (Right side of Row 1 on Mobile) */}
      <div className="flex flex-col gap-1.5 sm:gap-2 min-w-0">
        <div className="flex items-center flex-wrap gap-y-1 sm:gap-y-2">
          <h3 className="font-extrabold text-[var(--text-primary)] text-base sm:text-lg leading-tight mr-2 sm:mr-3">
            {badge.name}
          </h3>
          
          <div className="flex items-center gap-2">
            {/* Tag */}
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-[3px] border border-[var(--border-highlight)] bg-[var(--bg-secondary)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              {badge.tag}
            </span>

            {/* Details Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation(); 
                onDetailsClick(badge);
              }}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[var(--bg-secondary)] hover:bg-yellow-100 hover:text-yellow-800 text-[var(--text-secondary)] text-[10px] font-bold rounded-[3px] transition-colors cursor-pointer"
              title="View details"
            >
              <Info size={10} />
              <span className="hidden sm:inline">Details</span>
            </button>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
          {badge.description}
        </p>
      </div>

      {/* COLUMN 3: Action Buttons (Row 2 on Mobile, Col 3 on Desktop) */}
      <div className="col-span-2 sm:col-span-1 flex flex-wrap sm:flex-col gap-2 w-full sm:w-auto items-center sm:items-end justify-start sm:justify-end mt-1 sm:mt-0">
        <div className="flex flex-wrap sm:flex-col gap-2 w-full sm:w-auto sm:items-end justify-start">
          {badge.links && badge.links.length > 0 ? (
            badge.links.slice(0, 2).map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[var(--btn-primary)] text-[var(--btn-text)] border border-[var(--btn-primary)] hover:opacity-90 text-xs font-bold rounded-[3px] transition-all shadow-sm active:translate-y-0.5 w-auto flex-1 sm:flex-initial"
              >
                {link.label}
                <ExternalLink size={10} className="opacity-70" />
              </a>
            ))
          ) : (
            <span className="hidden sm:block text-xs text-[var(--text-secondary)] italic pr-2">No links</span>
          )}
          
          {/* Overflow indicator for links */}
          {badge.links && badge.links.length > 2 && (
             <a 
               href={badge.links[0].url} 
               target="_blank"
               rel="noreferrer"
               className="text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium inline-flex items-center gap-0.5 px-2 py-1"
             >
               +{badge.links.length - 2} more
             </a>
          )}
        </div>
      </div>

    </div>
  );
};