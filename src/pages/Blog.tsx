
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BlogPost, getAllPosts } from "@/lib/blog";
import { motion } from "framer-motion";

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const allPosts = await getAllPosts();
      setPosts(allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7E69AB] to-[#D6BCFA]">
            Our Blog
          </h1>
          <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team of experts
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-800 h-48 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-2"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-brand-blue font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-brand-blue dark:hover:text-brand-blue transition-colors">
                    <button onClick={() => navigate(`/blog/${post.slug}`)}>
                      {post.title}
                    </button>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <button 
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="inline-flex items-center text-brand-navy dark:text-brand-blue hover:text-brand-blue transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
