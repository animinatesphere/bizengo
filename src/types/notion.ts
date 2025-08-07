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

// Use the actual Notion API types
export type NotionPage = {
  id: string;
  properties: Record<string, any>;
  [key: string]: any;
};
