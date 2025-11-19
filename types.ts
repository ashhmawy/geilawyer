import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  id: PageId;
}

export enum PageId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}