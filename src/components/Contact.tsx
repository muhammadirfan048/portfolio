import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Briefcase } from "lucide-react";
import upworkImg from "@/assets/download.png";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-t from-primary to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss your next project
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 md:p-12 hover:bg-card/80 transition-all animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:muhammadirfaan048@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      muhammadirfaan048@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Connect With Me</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-effect"
                      onClick={() =>
                        window.open(
                          "https://www.upwork.com/freelancers/~0198e443080bd92b02",
                          "_blank"
                        )
                      }
                    >
                      <img
                        src={upworkImg}
                        alt="upwork"
                        className="h-5 w-5 mr-2"
                      />
                      Upwork
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-effect"
                      onClick={() =>
                        window.open(
                          "https://github.com/muhammadirfan048",
                          "_blank"
                        )
                      }
                    >
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-effect col-span-2"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/muhammad-irfan445/",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-4">
                    Open to freelance opportunities and full-time positions
                  </p>
                  <Button
                    className="w-full gradient-primary hover:opacity-90"
                    onClick={() =>
                      (window.location.href =
                        "mailto:muhammadirfaan048@gmail.com")
                    }
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>© 2025 Muhammad Irfan. All rights reserved.</p>
                <p>Built with React, TypeScript & Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
