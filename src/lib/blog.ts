
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  author: string;
  category: string;
  image: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all([
    fetch('/content/posts/getting-started-with-web-development.md').then(res => res.text()),
    fetch('/content/posts/cloud-computing-essentials.md').then(res => res.text())
  ]);

  const processedPosts = await Promise.all(posts.map(async (post, index) => {
    const slug = index === 0 ? 'getting-started-with-web-development' : 'cloud-computing-essentials';
    const { data, content } = matter(post);
    const processedContent = await marked(content); // Await the markdown processing
    
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      content: processedContent,
      author: data.author,
      category: data.category,
      image: data.image
    };
  }));

  return processedPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}
