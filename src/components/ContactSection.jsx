import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
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
  