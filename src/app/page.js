// src/app/page.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold"
          >
            Raghul
          </motion.div>
          <div className="space-x-8">
            {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm Raghul
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Cybersecurity Student & Aspiring Security Researcher
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-x-4"
        >
          <button onClick={() => handleScroll("contact")} className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full inline-block transition-colors">
            Get in Touch
          </button>
          <button onClick={() => handleScroll("projects")} className="border border-cyan-500 hover:bg-cyan-500/20 px-8 py-3 rounded-full inline-block transition-colors">
            View Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
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

function SkillsSection() {
  const skills = {
    cybersecurity: [
      'Penetration Testing',
      'Network Security',
      'Malware Analysis',
      'Web Application Security',
      'Security Auditing'
    ],
    technical: [
      'Python',
      'Linux',
      'Wireshark',
      'Metasploit',
      'Burp Suite',
      'NMAP'
    ],
    soft_skills: [
      'Problem Solving',
      'Team Leadership',
      'Technical Writing',
      'Project Management',
      'Research'
    ]
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 capitalize">
                {category.replace('_', ' ')}
              </h3>
              <ul className="space-y-4">
                {skillList.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={item}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
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

function CertificatesSection() {
  const certificates = [
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2024",
      badge: "🛡️"
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2024",
      badge: "🎯"
    },
    {
      title: "Web Security Fundamentals",
      issuer: "PortSwigger Academy",
      date: "2023",
      badge: "🔒"
    },
    {
      title: "Network Security Specialist",
      issuer: "ICT Academy",
      date: "2023",
      badge: "☁️"
    }
  ];

  return (
    <section className="py-20 px-6" id="certificates">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{cert.badge}</span>
                <div>
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-gray-400">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent successfully!');
    // Add your form submission logic here
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-300">
              <p>📍 Chennai, Tamil Nadu</p>
              <p>📧 raghulr.cs2023@citchennai.net</p>
              <p>📱 +91 72007 95287</p>
              <div className="pt-4">
                <p className="mb-4">Connect with me on:</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/RaghulR2023" className="text-cyan-400 hover:text-cyan-300">GitHub</a>
                  <a href="https://www.linkedin.com/in/raghul287" className="text-cyan-400 hover:text-cyan-300">LinkedIn</a>
                  <a href="https://www.instagram.com/_raghul7_/" className="text-cyan-400 hover:text-cyan-300">Instagram</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full text-white font-medium w-full transition-colors"
              >
                Send Message
              </button>
              {formStatus && (
                <p className="text-green-400 text-center">{formStatus}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2025 Raghul. All rights reserved.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                {platform}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}