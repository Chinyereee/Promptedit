// types/index.ts

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isFeatured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Tool {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  number: string;
  label: string;
}

export interface FormData {
  email: string;
  name: string;
}

export interface FormState {
  email: string;
  name: string;
}

export interface FormErrors {
  email: string[];
  name: string[];
}

export interface AnalyticsEvent {
  eventName: string;
  timestamp: Date;
  userData?: {
    email: string;
    name: string;
  };
  planSelected?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface PricingCalculation {
  monthlySpend: number;
  annualSavings: number;
  comparisonMetrics: {
    withPromptEdit: number;
    withoutPromptEdit: number;
  };
}

export interface User {
  email: string;
  name: string;
  joinedAt: Date;
  selectedPlan: 'payAsYouGo' | 'monthly';
}

export interface PageMetrics {
  totalVisits: number;
  conversionRate: number;
  averageTimeOnPage: number;
  topCta: string;
}
