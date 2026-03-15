import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSubmitContactForm, contactFormSchema, type ContactFormData } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContactForm();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    }
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data, {
      onSuccess: (res) => {
        toast({
          title: "Success!",
          description: res.message,
          variant: "default",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try calling us instead.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch for a free quote or site inspection."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you need residential tank cleaning or industrial housekeeping, our team is ready to assist you 24/7.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Head Office</h4>
                    <p className="text-muted-foreground text-sm">
                      108, Pankaja Mill Road,<br />
                      Ramanathapuram,<br />
                      Coimbatore - 641045
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                    <a href="tel:9655933484" className="block text-muted-foreground text-sm hover:text-primary transition-colors">+91 96559 33484</a>
                    <a href="tel:04222324330" className="block text-muted-foreground text-sm hover:text-primary transition-colors">0422 - 2324330</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@eurocleantech.in" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                      info@eurocleantech.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground text-sm">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                    <p className="text-primary text-sm font-semibold mt-1">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border">
                <h4 className="font-bold text-foreground mb-3">Our Branches</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold">Tirupur</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold">Trichy</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold">Mettupalayam</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border/50">
                <h3 className="text-2xl font-bold font-display mb-6">Request a Free Quote</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-muted/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" className="bg-muted/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="bg-muted/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Required *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-muted/50">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="water_tank">Water Tank Cleaning</SelectItem>
                                <SelectItem value="underground_sump">Underground Sump Cleaning</SelectItem>
                                <SelectItem value="overhead_tank">Overhead Tank Cleaning</SelectItem>
                                <SelectItem value="industrial">Industrial Tank Cleaning</SelectItem>
                                <SelectItem value="housekeeping">Mechanized Housekeeping</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Details (Address, Tank Capacity etc.)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us more about your requirement..." 
                              className="min-h-[120px] bg-muted/50 resize-y" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/25"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Sending Request..." : (
                        <>
                          <Send className="mr-2 w-5 h-5" /> Send Request
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-muted">
        {/* Placeholder iframe for Google Maps */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.592318728956!2d76.98402431480062!3d10.994060992174397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b9fa139885%3A0xc3c942e20b388b13!2sPankaja%20Mill%20Rd%2C%20Ramanathapuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641045!5e0!3m2!1sen!2sin!4v1647890123456!5m2!1sen!2sin" 
          className="w-full h-full border-0" 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Euro Clean Tech Location"
        ></iframe>
      </section>
    </div>
  );
}
