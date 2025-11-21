import React from 'react';
import { Badge } from '../types';
import { ExternalLink, Info } from 'lucide-react';

interface BadgeItemProps {
  badge: Badge;
  onDetailsClick: (badge: Badge) => void;
}

export const BadgeItem: React.FC<BadgeItemProps> = ({ badge, onDetailsClick }) => {
  return (
    <div className="group grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-start sm:items-center gap-4 sm:gap-6 p-5 border-b border-gray-100 hover:bg-[#fffdf5] transition-all duration-200 last:border-0">
      
      {/* COLUMN 1: Logo/Image */}
      <div className="flex shrink-0">
        <img 
          src={badge.image} 
          alt={badge.name} 
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-[3px] object-cover shadow-sm ring-1 ring-black/5"
        />
      </div>

      {/* COLUMN 2: Content (Title + Tag + Details Button + Description) */}
      <div className="flex flex-col gap-2 min-w-0">
        <div className="flex items-center flex-wrap gap-y-2">
          <h3 className="font-extrabold text-gray-900 text-base sm:text-lg leading-tight mr-3">
            {badge.name}
          </h3>
          
          <div className="flex items-center gap-2">
            {/* Tag */}
            <span className="inline-flex items-center px-2 py-0.5 rounded-[3px] border border-gray-200 bg-white text-[10px] font-bold uppercase tracking-wider text-gray-500">
              {badge.tag}
            </span>

            {/* Details Button (Next to Tag) */}
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering parent clicks if any
                onDetailsClick(badge);
              }}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 hover:bg-yellow-100 hover:text-yellow-800 text-gray-600 text-[10px] font-bold rounded-[3px] transition-colors cursor-pointer"
              title="View details"
            >
              <Info size={10} />
              Details
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
          {badge.description}
        </p>
      </div>

      {/* COLUMN 3: Action Buttons (External Links Only) */}
      <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto sm:items-end mt-2 sm:mt-0">
        <div className="flex flex-wrap sm:flex-col gap-2 w-full sm:w-auto sm:items-end justify-start">
          {badge.links && badge.links.length > 0 ? (
            badge.links.slice(0, 2).map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-black text-white border border-black hover:bg-gray-800 text-xs font-bold rounded-[3px] transition-all shadow-sm active:translate-y-0.5 w-auto"
              >
                {link.label}
                <ExternalLink size={10} className="opacity-70" />
              </a>
            ))
          ) : (
            // Placeholder to keep layout consistent if needed, or empty
            <span className="hidden sm:block text-xs text-gray-300 italic pr-2">No links</span>
          )}
          
          {/* Overflow indicator for links */}
          {badge.links && badge.links.length > 2 && (
             <a 
               href={badge.links[0].url} // Default to first link or handle a menu
               target="_blank"
               rel="noreferrer"
               className="hidden sm:inline-flex text-[10px] text-gray-400 hover:text-gray-600 font-medium items-center gap-0.5"
             >
               +{badge.links.length - 2} more
             </a>
          )}
        </div>
      </div>

    </div>
  );
};