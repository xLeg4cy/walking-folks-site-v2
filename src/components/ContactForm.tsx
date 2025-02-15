
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;
  const [submissionCount, setSubmissionCount] = useState(0);

  async function onSubmit(data: FormValues) {
    try {
      if (submissionCount >= 5) {
        toast.error("Too many attempts. Please try again later.");
        return;
      }

      // Simulated API call with rate limiting
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmissionCount(prev => prev + 1);
      
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <div 
      className="max-w-2xl mx-auto p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm"
      role="form"
      aria-label="Contact form"
    >
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-6 animate-fade-in"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-200">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    {...field}
                    className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white transition-all duration-200 focus:ring-2 focus:ring-brand-purple-medium/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-200">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    {...field}
                    className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white transition-all duration-200 focus:ring-2 focus:ring-brand-purple-medium/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-200">Subject</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="What's this about?" 
                    {...field}
                    className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white transition-all duration-200 focus:ring-2 focus:ring-brand-purple-medium/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-200">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Your message..."
                    className="min-h-[120px] bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white transition-all duration-200 focus:ring-2 focus:ring-brand-purple-medium/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting || submissionCount >= 5}
            className="w-full bg-brand-purple-medium hover:bg-brand-purple-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none dark:bg-brand-purple-dark dark:hover:bg-brand-purple-medium"
            aria-label={isSubmitting ? "Sending message..." : "Send message"}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center" role="status">
                <Loader2 className="animate-spin mr-2" size={18} aria-hidden="true" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}
