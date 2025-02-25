
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

  return posts.map((post, index) => {
    const slug = index === 0 ? 'getting-started-with-web-development' : 'cloud-computing-essentials';
    const { data, content } = matter(post);
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      content: marked(content),
      author: data.author,
      category: data.category,
      image: data.image
    };
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}
