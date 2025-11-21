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
  description: string;
  links: BadgeLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
}