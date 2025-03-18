
import { BookOpen } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
      date: "Mar 15, 2024",
      category: "Technology",
      image: "/placeholder.svg"
    },
    {
      title: "Optimizing React Applications",
      excerpt: "Best practices and techniques for building high-performance React applications.",
      date: "Mar 12, 2024",
      category: "Development",
      image: "/placeholder.svg"
    },
    {
      title: "Understanding Cloud Security",
      excerpt: "A comprehensive guide to securing your cloud infrastructure and applications.",
      date: "Mar 10, 2024",
      category: "Security",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-black/5 rounded-full px-6 py-2 text-sm font-medium mb-8">
            <BookOpen size={16} className="mr-2" />
            Latest Insights
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest trends, insights, and updates from our team
          </p>
        </div>

        <Alert className="bg-brand-purple-light/20 border-brand-purple-medium mb-12 max-w-2xl mx-auto">
          <AlertTitle className="text-brand-purple-dark text-lg font-bold">Coming Soon!</AlertTitle>
          <AlertDescription className="text-brand-purple-medium">
            Our blog is currently under development. Stay tuned for insightful articles and updates!
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-brand-blue transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-brand-navy hover:text-brand-blue transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
