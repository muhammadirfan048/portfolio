import { Code2, Database, Cloud, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "3+ Years",
      description: "Professional Experience",
    },
    {
      icon: Database,
      title: "100K+",
      description: "Users Served",
    },
    {
      icon: Cloud,
      title: "Cloud Expert",
      description: "AWS & DevOps",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "OAuth & JWT",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Get to know more about my journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg leading-relaxed">
                As a{" "}
                <span className="text-primary font-semibold">
                  Full Stack Developer
                </span>{" "}
                with over five years of experience, I specialize in creating
                large-scale web applications using cutting-edge technologies.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My expertise spans from front-end development with React and
                Next.js to back-end architecture using Node.js and various
                database systems. I've successfully delivered projects that
                serve over 100,000 users, focusing on performance, scalability,
                and security.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Years of freelancing and remote work have equipped me with the
                confidence and expertise needed to deliver excellent results for
                clients worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 hover:bg-card/80 transition-all hover:scale-105 hover:glow-effect"
                  >
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
