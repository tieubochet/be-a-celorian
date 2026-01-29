import React from 'react';
import { Badge } from '../types';
import { ExternalLink, Info, Check, Lock } from 'lucide-react';

interface BadgeItemProps {
  badge: Badge;
  isCompleted?: boolean;
  onDetailsClick: (badge: Badge) => void;
}

export const BadgeItem: React.FC<BadgeItemProps> = ({ badge, isCompleted = false, onDetailsClick }) => {
  return (
    <div 
      className={`
        group relative grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] 
        items-start sm:items-center gap-x-4 gap-y-3 sm:gap-6 p-4 sm:p-5 
        border-b border-[var(--border-color)] transition-all duration-200 
        last:border-0
        ${isCompleted ? 'bg-green-50/40 dark:bg-green-900/10' : 'hover:bg-[var(--hover-bg)]'}
      `}
    >
      
      {/* CỘT 1: Logo/Image & Trạng thái Checkmark */}
      <div className="relative flex shrink-0">
        <img 
          src={badge.image} 
          alt={badge.name} 
          className={`
            w-12 h-12 sm:w-16 sm:h-16 rounded-[8px] object-cover shadow-sm 
            ring-1 ring-[var(--ring-color)] transition-all duration-300
            ${!isCompleted ? 'grayscale opacity-90' : 'grayscale-0'}
          `}
        />
        
        {/* Icon Overlay: Chỉ hiện khi hoàn thành hoặc chưa hoàn thành (tùy chọn) */}
        <div className={`
          absolute -bottom-2 -right-2 rounded-full p-1 border-2 border-[var(--bg-card)] shadow-sm flex items-center justify-center
          ${isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500 hidden'}
        `}>
           {isCompleted ? <Check size={12} strokeWidth={3} /> : <Lock size={12} />}
        </div>
      </div>

      {/* CỘT 2: Nội dung chính */}
      <div className="flex flex-col gap-1.5 sm:gap-2 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-extrabold text-[var(--text-primary)] text-base sm:text-lg leading-tight">
            {badge.name}
          </h3>
          
          {/* Nhãn EARNED */}
          {isCompleted && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 border border-green-200">
              Earned
            </span>
          )}

          {/* Nút Details nhỏ */}
          <button 
            onClick={(e) => {
              e.stopPropagation(); 
              onDetailsClick(badge);
            }}
            className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[var(--bg-secondary)] hover:bg-yellow-100 hover:text-yellow-800 text-[var(--text-secondary)] text-[10px] font-bold rounded-[4px] transition-colors cursor-pointer ml-auto sm:ml-0"
            title="View details"
          >
            <Info size={10} />
            <span>Details</span>
          </button>
        </div>

        <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2 sm:line-clamp-none pr-0 sm:pr-4">
          {badge.description}
        </p>
      </div>

      {/* CỘT 3: Các nút hành động (Links) */}
      <div className="col-span-2 sm:col-span-1 flex flex-wrap sm:flex-col gap-2 w-full sm:w-auto items-center sm:items-end justify-start sm:justify-end mt-1 sm:mt-0">
        <div className="flex flex-wrap sm:flex-col gap-2 w-full sm:w-auto sm:items-end justify-start">
          {badge.links && badge.links.length > 0 ? (
            badge.links.slice(0, 2).map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[var(--btn-primary)] text-[var(--btn-text)] border border-[var(--btn-primary)] hover:opacity-90 text-xs font-bold rounded-[4px] transition-all shadow-sm active:translate-y-0.5 w-auto flex-1 sm:flex-initial"
              >
                {link.label}
                <ExternalLink size={10} className="opacity-70" />
              </a>
            ))
          ) : (
            <span className="hidden sm:block text-xs text-[var(--text-secondary)] italic pr-2">No links</span>
          )}
          
          {/* Link ẩn nếu quá nhiều */}
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