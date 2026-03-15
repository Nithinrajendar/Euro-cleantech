import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Mock hook since this is a static frontend without a backend
export function useSubmitContactForm() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Validate data
      contactFormSchema.parse(data);
      // Simulate network request
      await delay(1200);
      
      // In a real app, you'd fetch() here
      console.log("Form submitted successfully:", data);
      
      return { success: true, message: "We have received your message and will contact you shortly." };
    }
  });
}
