// app/page.tsx
import client, { BlogPostFields, BlogPost } from "../lib/contentful";

async function fetchPosts(): Promise<any[]> {
  const res = await client.getEntries<BlogPostFields>({
    content_type: "pageBlogPost",
  });
  // console.log(res);
  return res.items;
}

export default async function HomePage() {
  const posts: any[] = await fetchPosts();

  return (
    <div>
      <h1 className='text-5xl'>Blog Posts</h1>
      <br />
      {posts.map((post) => (
        <div key={post.sys.id}>
          <h2 className='text-2xl'>{post.fields.title}</h2>
          <p>{post.fields.shortDescription}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
