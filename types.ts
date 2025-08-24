
import type { ReactNode } from 'react';

export interface Course {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatar: string;
}
