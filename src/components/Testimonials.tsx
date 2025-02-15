
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with Walking Folks has been transformative for our business. Their innovative solutions helped us scale rapidly.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content: "The team's technical expertise and attention to detail are unmatched. They delivered beyond our expectations.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emma Williams",
    role: "Founder, DesignPro",
    content: "Exceptional service and outstanding results. Walking Folks truly understands modern web development.",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

const Testimonials = () => {
  return (
    <section className="section py-20 bg-background text-foreground dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with us.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <QuoteIcon className="h-8 w-8 text-brand-blue dark:text-brand-purple-light mb-4" />
                  <p className="text-muted-foreground dark:text-gray-300 mb-6 text-lg italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
