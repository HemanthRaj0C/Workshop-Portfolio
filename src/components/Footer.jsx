import { motion } from "framer-motion";

export default function Footer() {
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
              <a href="https://github.com/RaghulR2023" className="text-cyan-400 hover:text-cyan-300">GitHub</a>
              <a href="https://www.linkedin.com/in/raghul287" className="text-cyan-400 hover:text-cyan-300">LinkedIn</a>
              <a href="https://www.instagram.com/_raghul7_/" className="text-cyan-400 hover:text-cyan-300">Instagram</a>
            </motion.div>
          </div>
        </div>
      </footer>
    );
  }