import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Briefcase,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import upworkImg from "@/assets/download.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-primary opacity-30" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium mb-4">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            Hi, I'm <span className="gradient-text">Muhammad Irfan</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building scalable web applications with 3+ years of expertise in
            React, Node.js, and cloud technologies
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gradient-primary hover:opacity-90 transition-opacity group"
              onClick={() => {
                const element = document.querySelector("#projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect hover:bg-card/80"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Muhammad_Irfan_CV.pdf";
                link.download = "Muhammad_Irfan_CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="mailto:muhammadirfaan048@gmail.com"
              className="p-3 glass-effect rounded-full hover:bg-card/80 transition-all hover:scale-110 hover:glow-effect"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0198e443080bd92b02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-card/80 transition-all hover:scale-110 hover:glow-effect"
            >
              <img src={upworkImg} alt="upwork" className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/muhammadirfan048"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-card/80 transition-all hover:scale-110 hover:glow-effect"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-irfan445/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-card/80 transition-all hover:scale-110 hover:glow-effect"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
