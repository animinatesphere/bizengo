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

export interface NotionPage {
  id: string;
  properties: {
    Title: {
      title: Array<{
        plain_text: string;
      }>;
    };
    Slug: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Published: {
      checkbox: boolean;
    };
    Date: {
      date: {
        start: string;
      } | null;
    };
    Tags: {
      multi_select: Array<{
        name: string;
      }>;
    };
    "Featured Image": {
      files: Array<{
        file?: {
          url: string;
        };
        external?: {
          url: string;
        };
      }>;
    };
  };
}
