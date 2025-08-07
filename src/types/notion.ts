// src/types/notion.ts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  date: string;
  tags: string[];
  featuredImage?: string;
  content?: any; // Notion blocks
}
