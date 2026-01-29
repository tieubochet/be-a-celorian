import React from 'react';
import { Badge } from '../types';
import { ExternalLink, Info, CheckCircle2, Lock } from 'lucide-react'; // Import thêm icon

interface BadgeItemProps {
  badge: Badge;
  isCompleted?: boolean; // [MỚI] Prop tùy chọn
  onDetailsClick: (badge: Badge) => void;
}

export const BadgeItem: React.FC<BadgeItemProps> = ({ badge, isCompleted = false, onDetailsClick }) => {
  return (
    <div className={`group grid ... ${isCompleted ? 'bg-green-50/50 dark:bg-green-900/10' : ''}`}> 
      {/* COLUMN 1: Logo/Image */}
      <div className="flex shrink-0 relative">
        <img 
          src={badge.image} 
          alt={badge.name} 
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-[3px] object-cover shadow-sm ring-1 ring-[var(--ring-color)] ${!isCompleted ? 'grayscale opacity-80' : ''}`}
        />
        {/* [MỚI] Overlay Icon trạng thái */}
        <div className="absolute -bottom-1 -right-1 bg-[var(--bg-card)] rounded-full p-0.5 shadow-sm">
           {isCompleted ? (
             <CheckCircle2 size={20} className="text-green-500 fill-green-100" />
           ) : (
             <div className="w-5 h-5" /> // Placeholder hoặc icon Lock
           )}
        </div>
      </div>

      {/* COLUMN 2: Content */}
      <div className="flex flex-col gap-1.5 sm:gap-2 min-w-0">
        <div className="flex items-center flex-wrap gap-y-1 sm:gap-y-2">
          <h3 className="font-extrabold text-[var(--text-primary)] text-base sm:text-lg leading-tight mr-2 sm:mr-3">
            {badge.name}
          </h3>
          
          {/* [MỚI] Badge Label trạng thái */}
          {isCompleted && (
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wide rounded-[3px]">
              Earned
            </span>
          )}
          
          <div className="flex items-center gap-2">
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
              <span>Details</span>
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