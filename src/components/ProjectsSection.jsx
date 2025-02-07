import { motion } from "framer-motion";

export default function ProjectsSection() {
    const projects = [
      {
        title: "Network Intrusion Detection System",
        description: "Developed a Python-based IDS using machine learning for real-time threat detection and analysis.",
        tech: ["Python", "Scikit-learn", "Wireshark"],
        duration: "3 months"
      },
      {
        title: "Secure File Sharing System",
        description: "Built an end-to-end encrypted file sharing platform with user authentication and access control.",
        tech: ["React", "Node.js", "Cryptography"],
        duration: "2 months"
      },
      {
        title: "Vulnerability Scanner",
        description: "Created an automated tool for identifying security vulnerabilities in web applications.",
        tech: ["Python", "Docker", "OWASP"],
        duration: "4 months"
      },
      {
        title: "Security Awareness Platform",
        description: "Designed an interactive platform for teaching cybersecurity best practices to beginners.",
        tech: ["React", "Firebase", "Tailwind"],
        duration: "2 months"
      }
    ];
  
    return (
      <section className="py-20 px-6" id="projects">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">Duration: {project.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }