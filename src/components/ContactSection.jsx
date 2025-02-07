import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiInstagram } from "react-icons/fi";
import { FaReddit } from "react-icons/fa";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Message sent successfully!");
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
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-300">
            <p className="flex items-center space-x-2 mt-10">
                <a
                    href="mailto:devanandan0805@gmail.com"
                    className="text-cyan-400 hover:text-red-400 transition-all transform duration-300"
                    >
                    <FiMail size={19} />
                </a>
                <span>Email: devanandan0805@gmail.com</span>
            </p>
              <div className="pt-4">
                <p className="mb-4">Connect with me on:</p>
                <div className="flex space-x-6 text-cyan-400">
                  <a
                    href="https://github.com/Siddhaartth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-white transition-all transform duration-300"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/dear._.dev08/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-orange-500 transition-all transform duration-300"
                  >
                    <FiInstagram size={24} />
                  </a>
                  <a
                    href="https://www.reddit.com/user/unknown_user-33/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-red-700 transition-all transform duration-300"
                  >
                    <FaReddit size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
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
                <p className="text-green-400 text-center mt-4">{formStatus}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
