import React from 'react';

export interface BadgeLink {
  label: string;
  url: string;
}

export interface Badge {
  id: string;
  image: string;
  name: string;
  tag: string;
  description: string; // Dùng làm fallback hoặc đoạn intro ngắn
  whyItMatters?: string;
  howToProgress?: string[];
  tiers?: string[];
  links: BadgeLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
}