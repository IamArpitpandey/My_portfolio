import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Zenher – AI Health Tracker",
    description:
      "AI-powered women’s health tracker for period prediction, symptoms logging, mood insights, and personalized recommendations using Gemini API.",
    image: "/projects/project2.png",
    tags: ["Next.js", "React", "Tailwind", "MongoDB", "Firebase"],
    demoUrl: "https://zenher.in",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Shiksharthi – EdTech Platform",
    description:
      "Ed-Tech platform offering notes, tests, doubts, and AI-assisted study support. Built with React, Node.js, MySQL & Firebase Authentication.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express", "MySQL", "Firebase"],
    demoUrl: "coming-soon",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Indyns Store – E-Commerce Platform",
    description:
      "A fully responsive and modern e-commerce platform with dynamic product pages, smooth UI, and fast loading experience.",
    image: "/projects/project3.png",
    tags: ["Next.js", "React", "TailwindCSS"],
    demoUrl: "https://indyns-store.vercel.app/",
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my latest real-world projects built with modern
          full-stack technologies and clean UI.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">

                    {/* Live Button */}
                    {project.demoUrl === "coming-soon" ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 font-medium">
                        Coming Soon
                      </span>
                    ) : (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {/* GitHub Button */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/IamArpitpandey"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
