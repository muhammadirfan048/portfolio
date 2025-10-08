import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills: [
        "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind", "Bootstrap",
        "React", "Angular", "Next.js", "Redux", "Styled-Components"
      ]
    },
    {
      category: "Back-End",
      skills: [
        "Node.js", "Express.js", "Koa", "MongoDB", "PostgreSQL", "GraphQL",
        "JWT", "Passport.js", "Socket.io", "Swagger"
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS EC2", "AWS S3", "AWS Lambda", "Docker", "CI/CD",
        "AWS CloudWatch", "Microservices"
      ]
    },
    {
      category: "Testing & Tools",
      skills: [
        "Jest", "Mocha", "Cypress", "Git", "Jira", "Agile",
        "Scrum", "TDD", "Webpack", "Babel"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:bg-card/80 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
