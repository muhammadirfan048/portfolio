import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Captionate",
      description:
        "AI-powered caption generation platform with advanced natural language processing",
      url: "https://captionate.app/",
      tags: ["React", "AI/ML", "Node.js"],
    },
    {
      title: "Trakking Master",
      description:
        "Application to manage the trucks import and export, their reports, records, trakking, loading etc",
      url: "https://trakkingmaster.vercel.app",
      tags: ["React.js", "PostgreSQL", "TailwindCSS"],
    },
    {
      title: "MusicArt",
      description:
        "Music streaming and discovery platform with social features",
      url: "https://musicart.io",
      tags: ["React", "Socket.io", "MongoDB"],
    },
    {
      title: "SyntaxRoot",
      description:
        "Developer tools and resources platform for modern web development",
      url: "https://www.syntaxroot.com/",
      tags: ["TypeScript", "React", "Node.js"],
    },
    {
      title: "Canulo Admin",
      description:
        "Comprehensive admin dashboard with analytics and management tools",
      url: "https://canulo.vercel.app/admin/default",
      tags: ["React", "Redux", "Chart.js"],
    },
    {
      title: "Canulo Web",
      description:
        "Business management platform with CRM and workflow automation",
      url: "https://canuloweb.vercel.app/",
      tags: ["Next.js", "TypeScript", "AWS"],
    },
    {
      title: "Broshall Associates",
      description:
        "Professional services firm website with modern design and animations",
      url: "https://broshall-associates-wine.vercel.app/",
      tags: ["React", "Tailwind", "Framer Motion"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,hsl(var(--secondary))_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-effect border-border/50 p-6 hover:bg-card/80 transition-all hover:scale-[1.02] hover:glow-effect animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group/btn"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    Visit
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
