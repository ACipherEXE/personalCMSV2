export interface ModelInterface {
  uuid: string;
  entryName: string;
  lastUpdated: string;
  created: string;
  fields?: fields[];
}

export interface fields {
  title: string;
  slug: string;
  body: string;
  publishedDate?: string;
  author?: string;
  thumbnail?: string;
  tags?: string[];
  id: string;
  name: string;
  type: string;
  required: boolean;
  localized: boolean;
  linkType?: string;
}
