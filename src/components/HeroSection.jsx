import { motion } from "framer-motion";

export default function HeroSection() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Title with Animated Glow */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          textShadow: [
            "0 0 10px rgba(6, 182, 212, 0.5)", // Cyan glow
            "0 0 20px rgba(6, 182, 212, 0.7)",
            "0 0 10px rgba(6, 182, 212, 0.5)"
          ]
        }}
        transition={{ 
          duration: 0.8,
          animate: { 
            repeat: Infinity, 
            duration: 2, 
            ease: "easeInOut" 
          }
        }}
        className="text-5xl md:text-7xl font-bold mb-4 text-white"
      >
        Hi, I'm Raghul
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-300 mb-6"
      >
        Cybersecurity Student & Aspiring Security Researcher
      </motion.p>

      {/* Rest of the code remains the same */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-x-4"
      >
        <button
          onClick={() => handleScroll("contact")}
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full transition-colors"
        >
          Get in Touch
        </button>
        <button
          onClick={() => handleScroll("projects")}
          className="border border-cyan-500 hover:bg-cyan-500/20 px-8 py-3 rounded-full transition-colors"
        >
          View Projects
        </button>
      </motion.div>
    </section>
  );
}