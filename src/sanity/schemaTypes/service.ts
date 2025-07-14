/* eslint-disable */

// src/sanity/schemaTypes/service.ts
export interface Service {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  shortDescription: string;
  hero: {
    image: {
      asset: {
        _ref: string;
        url: string;
      };
      alt?: string;
    };
    overlayText: string;
  };
  content: any[]; // For Portable Text/rich content
  details?: {
    _key: string;
    title?: string;
    description?: string;
    image?: {
      asset: {
        _ref: string;
        url: string;
      };
      alt?: string;
    };
    imagePosition?: 'left' | 'right';
  }[];
  process?: {
    _key: string;
    stepNumber?: string;
    title: string;
    description: string;
    icon?: {
      asset: {
        _ref: string;
        url: string;
      };
    };
  }[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}