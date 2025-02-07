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
            <br />
            <p>
              I'm a passionate Cybersecurity student at Chennai Institute of Technology, currently 
              pursuing my B.Tech in Computer Science with a specialization in Cybersecurity. My 
              curiosity about ethical hacking, network security, and digital forensics drives my 
              continuous learning in this ever-evolving field.
            </p>
            <br />
            <p>
              My journey in cybersecurity began with a fascination for understanding how systems work 
              and how to protect them from threats. I actively participate in CTF (Capture The Flag) 
              competitions, bug bounty programs, and contribute to open-source security tools. These 
              experiences have sharpened my skills in penetration testing, cryptography, and 
              vulnerability assessment.
            </p>
            <br />
            <p>
              Beyond technical skills, I enjoy mentoring junior students in cybersecurity fundamentals, 
              helping them get started with ethical hacking and secure coding practices. I also engage 
              in hackathons, collaborate on security research projects, and stay updated with the 
              latest industry trends through online courses and certifications.
            </p>
            <br />
            <p>
              When I'm not immersed in cybersecurity, you’ll find me exploring emerging tech trends, 
              writing about security best practices, or brainstorming innovative ways to strengthen 
              digital defenses. My ultimate goal is to contribute to a safer digital world by bridging 
              the gap between security awareness and implementation.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }
  