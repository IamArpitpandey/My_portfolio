import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:arpitpandey1439@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    arpitpandey1439@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+916307392153"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 6307392153
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Unnao, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-6 justify-center">

                {/* LinkedIn (Official Blue) */}
                <a
                  href="https://www.linkedin.com/in/iamarpitpandey2005"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <FaLinkedin size={32} color="#0A66C2" />
                </a>

                {/* GitHub (Black) */}
                <a
                  href="https://github.com/IamArpitpandey"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <FaGithub size={32} color="#181717" />
                </a>

                {/* Instagram (Official Tone) */}
                <a
                  href="https://https://www.instagram.com/i_am_arpitpandey/"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <FaInstagram size={32} color="#E4405F" />
                </a>

                {/* Twitter (Blue) */}
                <a
                  href="#"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <FaTwitter size={32} color="#1DA1F2" />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Arpit Pandey..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="yourmail@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
