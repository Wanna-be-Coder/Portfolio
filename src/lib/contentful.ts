// lib/contentful.ts
import {
  createClient,
  Entry,
  EntryFields,
  EntrySkeletonType,
  FieldsType,
} from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export default client;

// Define the fields for the BlogPost content type
export interface BlogPostFields {
  fields: {
    title: string;
    slug: string;
    description: string;
    content: string;
    shortDescription: string;
  };
  contentTypeId: EntryFields.Text;
}

// Define BlogPost to match Contentful's EntrySkeletonType
export type BlogPost = Entry<EntrySkeletonType<BlogPostFields, "pageBlogPost">>;
