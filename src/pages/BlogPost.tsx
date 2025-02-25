
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BlogPost as BlogPostType, getPostBySlug } from "@/lib/blog";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    if (!slug) return;
    try {
      const postData = await getPostBySlug(slug);
      if (postData) {
        setPost(postData);
      } else {
        navigate('/blog');
      }
    } catch (error) {
      console.error('Error loading post:', error);
      navigate('/blog');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-background pt-24 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate('/blog')} 
          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-brand-purple-light/10 text-brand-purple-medium rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {post.title}
            </h1>

            <div className="flex items-center mb-8">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Written by</p>
                <p className="font-medium text-gray-900 dark:text-white">{post.author}</p>
              </div>
            </div>

            <div 
              className="prose dark:prose-invert prose-purple max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;
