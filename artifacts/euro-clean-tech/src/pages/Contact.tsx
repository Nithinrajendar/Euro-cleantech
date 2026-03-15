import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSubmitContactForm, contactFormSchema, type ContactFormData } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Building2 } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>Contact Euro Clean Tech – Book Tank Cleaning Service in Coimbatore</title>
        <meta name="description" content="Contact Euro Clean Tech at 9655933484. 108 Pankaja Mill Road, Coimbatore 641045. Branches in Tirupur, Trichy, Mettupalayam. Book online or WhatsApp." />
        <link rel="canonical" href="https://www.eurocleantech.in/contact" />
      </Helmet>

      {/* Header */}
      <section className="pt-40 pb-16 bg-muted/30 border-b border-border/50 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-block mb-4">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Get in Touch</span>
            <div className="h-1 w-1/2 bg-secondary mt-1 rounded-full mx-auto"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-6">
            We're Here to Help
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a service, request a free quote, or ask for a site inspection. Our team is ready 24/7.
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info & Map */}
            <div className="space-y-12">
              <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full"></div>
                <h3 className="text-3xl font-display font-bold mb-8 relative z-10">Head Office</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">Location</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        108, Pankaja Mill Road,<br />
                        Ramanathapuram,<br />
                        Coimbatore - 641045
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">Call Us</h4>
                      <a href="tel:9655933484" className="block text-muted-foreground hover:text-primary transition-colors text-lg font-medium">+91 96559 33484</a>
                      <a href="tel:04222324330" className="block text-muted-foreground hover:text-primary transition-colors text-lg font-medium">0422 - 2324330</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">Email</h4>
                      <a href="mailto:info@eurocleantech.in" className="block text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                        info@eurocleantech.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">Working Hours</h4>
                      <p className="text-muted-foreground">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                      <div className="inline-block mt-2 px-3 py-1 bg-secondary/10 text-secondary text-sm font-bold rounded-lg">
                        24/7 Emergency Service
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embedded */}
              <div className="rounded-[40px] overflow-hidden shadow-xl border border-border/50 h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.592318728956!2d76.98402431480062!3d10.994060992174397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b9fa139885%3A0xc3c942e20b388b13!2sPankaja%20Mill%20Rd%2C%20Ramanathapuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641045!5e0!3m2!1sen!2sin!4v1647890123456!5m2!1sen!2sin" 
                  className="w-full h-full border-0" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Euro Clean Tech Location"
                ></iframe>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-border/50 sticky top-32">
              <h3 className="text-3xl font-display font-black mb-2">Request a Free Quote</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you within 2 hours.</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-14 rounded-2xl bg-muted/50 border-transparent focus:bg-white transition-colors" {...field} />
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
                          <FormLabel className="font-bold">Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" className="h-14 rounded-2xl bg-muted/50 border-transparent focus:bg-white transition-colors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="h-14 rounded-2xl bg-muted/50 border-transparent focus:bg-white transition-colors" {...field} />
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
                        <FormLabel className="font-bold">Service Required *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 rounded-2xl bg-muted/50 border-transparent focus:bg-white transition-colors">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-2xl">
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

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Additional Details (Address, Tank Capacity etc.)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your requirement..." 
                            className="min-h-[150px] rounded-2xl bg-muted/50 border-transparent focus:bg-white resize-y transition-colors p-4" 
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
                    className="w-full h-16 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all"
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
      </section>

      {/* Branch Offices */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold">Our Branches</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Tirupur", "Trichy", "Mettupalayam"].map((branch) => (
              <div key={branch} className="bg-white p-8 rounded-[32px] border border-border/50 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">{branch}</h3>
                <p className="text-muted-foreground">Serving the entire {branch} district with professional cleaning services.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
