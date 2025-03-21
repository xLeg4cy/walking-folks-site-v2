
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <h1 className="text-4xl font-bold mb-6 text-foreground">Our Blog</h1>
        
        <Alert className="bg-brand-purple-light/20 border-brand-purple-medium mb-12">
          <AlertTitle className="text-brand-purple-dark text-lg font-bold">Coming Soon!</AlertTitle>
          <AlertDescription className="text-brand-purple-medium">
            Our blog is currently under development. Stay tuned for insightful articles and updates!
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground hover:text-brand-blue transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-muted-foreground mb-4">
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
    </div>
  );
};

export default Blog;
