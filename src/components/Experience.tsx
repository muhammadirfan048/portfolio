import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "NorthCodex",
      location: "Gilgit, PK",
      position: "Senior Full Stack Developer",
      period: "May 2025 – Present",
      description: "Led development of cloud-based SaaS platform supporting 100K+ users",
      achievements: [
        "Designed microservices architecture using Node.js, Koa, and MongoDB",
        "Developed responsive UIs with React, Tailwind, and TypeScript",
        "Improved security with JWT and Passport.js implementation",
        "Optimized APIs improving response times by 35%"
      ]
    },
    {
      company: "Genesis Engineering",
      location: "Rawalpindi, PK",
      position: "Software Developer",
      period: "Dec 2023 – May 2025",
      description: "Developed real-time collaboration tool for global communication",
      achievements: [
        "Built front-end with Vue.js, improving UI responsiveness by 40%",
        "Integrated real-time updates using Socket.io",
        "Managed secure authentication with JWT and Passport.js",
        "Achieved 99.9% uptime using Docker and AWS CloudWatch"
      ]
    },
    {
      company: "Youmi Tech",
      location: "Metro Manila, Philippines (Remote)",
      position: "Senior Front-End Developer",
      period: "Dec 2024 – Jul 2025",
      description: "Led front-end development of high-traffic e-commerce platform",
      achievements: [
        "Built responsive UIs with React and Redux, increasing retention by 20%",
        "Reduced page load times by 40% through optimizations",
        "Increased conversion rates by 15% through A/B testing",
        "Integrated secure payment processing systems"
      ]
    },
    {
      company: "NorthCodex",
      location: "Gilgit, PK",
      position: "Front-End Developer",
      period: "Mar 2020 – July 2023",
      description: "Contributed to social networking platform development",
      achievements: [
        "Developed reusable components with AngularJS and Bootstrap",
        "Integrated real-time messaging using Socket.io",
        "Optimized performance reducing load times by 35%",
        "Enhanced user engagement with real-time notifications"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">My professional journey</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-8 items-center animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-effect z-10" />

                  <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <div className="glass-effect rounded-2xl p-6 hover:bg-card/80 transition-all hover:scale-[1.02]">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="mb-4 text-muted-foreground">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">▹</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
