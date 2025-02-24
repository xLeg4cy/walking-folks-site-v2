
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Check, X } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  phone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AUTOSAVE_DELAY = 1000; // 1 second delay for autosave
const STORAGE_KEY = 'contact-form-draft';

export function ContactForm() {
  const [isAutosaving, setIsAutosaving] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
  });

  const { isSubmitting, isDirty } = form.formState;

  // Load saved form data on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        form.setValue(key as keyof FormValues, parsedData[key]);
      });
    }
  }, [form]);

  // Auto-save form data
  useEffect(() => {
    if (!isDirty) return;

    const timer = setTimeout(() => {
      const formData = form.getValues();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      setIsAutosaving(true);
      setTimeout(() => setIsAutosaving(false), 1000);
    }, AUTOSAVE_DELAY);

    return () => clearTimeout(timer);
  }, [form.watch(), isDirty]);

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    const phone = value.replace(/\D/g, '');
    const match = phone.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return phone;
    
    const parts = [match[1], match[2], match[3]].filter(Boolean);
    return parts.length > 0 ? `(${parts[0]})${parts[1] ? ` ${parts[1]}` : ''}${parts[2] ? `-${parts[2]}` : ''}` : '';
  };

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
      localStorage.removeItem(STORAGE_KEY); // Clear saved form data after successful submission
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <div 
      className="max-w-2xl mx-auto p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm relative"
      role="form"
      aria-label="Contact form"
    >
      {/* Autosave Indicator */}
      <AnimatePresence>
        {isAutosaving && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-4 right-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"
          >
            <span>Saving draft</span>
            <Loader2 className="animate-spin h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>

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
                <div className="relative">
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field}
                      className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white transition-all duration-200 focus:ring-2 focus:ring-brand-purple-medium/20 pr-10"
                    />
                  </FormControl>
                  <ValidationIcon field={field.value} isValid={field.value.length >= 2} />
                </div>
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
                <div className="relative">
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      {...field}
                      className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white transition-all duration-200 focus:ring-2 focus:ring-brand-purple-medium/20 pr-10"
                    />
                  </FormControl>
                  <ValidationIcon 
                    field={field.value} 
                    isValid={/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)} 
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-200">Phone (optional)</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input 
                      placeholder="(123) 456-7890" 
                      {...field}
                      onChange={(e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        onChange(formatted);
                      }}
                      className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white transition-all duration-200 focus:ring-2 focus:ring-brand-purple-medium/20"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-200">Subject</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input 
                      placeholder="What's this about?" 
                      {...field}
                      className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white transition-all duration-200 focus:ring-2 focus:ring-brand-purple-medium/20 pr-10"
                    />
                  </FormControl>
                  <ValidationIcon field={field.value} isValid={field.value.length >= 5} />
                </div>
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
                <div className="relative">
                  <FormControl>
                    <Textarea 
                      placeholder="Your message..."
                      className="min-h-[120px] bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white transition-all duration-200 focus:ring-2 focus:ring-brand-purple-medium/20 pr-10"
                      {...field}
                    />
                  </FormControl>
                  <ValidationIcon field={field.value} isValid={field.value.length >= 10} />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <motion.button
            type="submit"
            disabled={isSubmitting || submissionCount >= 5}
            className="w-full bg-brand-purple-medium hover:bg-brand-purple-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none dark:bg-brand-purple-dark dark:hover:bg-brand-purple-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
          </motion.button>
        </form>
      </Form>
    </div>
  );
}

// Validation icon component
const ValidationIcon = ({ field, isValid }: { field: string; isValid: boolean }) => {
  if (!field) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        {isValid ? (
          <Check className="h-5 w-5 text-green-500" />
        ) : (
          <X className="h-5 w-5 text-red-500" />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
