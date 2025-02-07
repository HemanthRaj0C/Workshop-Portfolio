import { motion } from "framer-motion";

export default function AboutSection() {
    return (
      <section className="py-20 px-6" id="about">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-8"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-300"
          >
            <p>
              I'm a passionate Cybersecurity student at Chennai Institute of Technology, 
              currently pursuing my B.Tech in Computer Science with specialization in 
              Cybersecurity.
            </p>
            <p>
              My journey in cybersecurity began with a fascination for understanding how 
              systems work and how to protect them. I actively participate in CTF competitions, 
              bug bounty programs, and contribute to open-source security tools.
            </p>
            <p>
              When I'm not exploring vulnerabilities or writing secure code, you'll find me 
              mentoring junior students in cybersecurity basics, participating in hackathons, 
              or expanding my knowledge through online courses and certifications.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }
  