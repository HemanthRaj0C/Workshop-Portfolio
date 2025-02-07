import { motion } from 'framer-motion';

export default function SkillsSection() {
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
  