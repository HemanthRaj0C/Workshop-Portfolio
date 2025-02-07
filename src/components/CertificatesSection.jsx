import { motion } from "framer-motion";

export default function CertificatesSection() {
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