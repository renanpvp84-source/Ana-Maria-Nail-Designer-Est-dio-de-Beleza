export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  duration: string;
  highlights: string[];
  recommendedFor: string;
}

export interface ReviewItem {
  author: string;
  badge?: string;
  date: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
