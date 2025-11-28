import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE TEXT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack & AI Developer
            </h3>

            <p className="text-muted-foreground">
              I'm Arpit Pandey, a passionate Full Stack & AI Developer focused on
              building real-world applications using React, Next.js, Node.js,
              MongoDB, MySQL and modern AI tools like Gemini/GPT APIs.
            </p>

            <p className="text-muted-foreground">
              I’ve built production-ready projects like Zenher (AI Health Tracker)
              and Shiksharthi (Ed-Tech), combining strong UI/UX with scalable,
              well-structured backend systems. I love transforming ideas into
              fast, efficient, and user-friendly digital products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {/* CARD 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable, responsive, modern web apps using React, Next.js,
                    Node.js, Express, MySQL & MongoDB.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Automation</h4>
                  <p className="text-muted-foreground">
                    Integrating Gemini/GPT APIs to create AI-driven features,
                    chatbots, predictions and automation tools.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Product & Project Flow</h4>
                  <p className="text-muted-foreground">
                    Experience building complete products from idea → UI/UX → backend →
                    deployment using real development workflows.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
