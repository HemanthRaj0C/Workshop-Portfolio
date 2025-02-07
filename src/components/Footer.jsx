import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {

    const [date, setDate] = useState(null)
    useEffect(()=>{
        setDate(new Date().getFullYear())
    }, [])

    return (
      <footer className="bg-gray-900 py-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              <p>
                This is just a fake portfolio. All the projects and contact details
                given are not real.
              </p>
              <p>
                &copy; {date} Created for
                <a rel="noopener" href="https://www.revil.in/" target="_blank"> <span className="hover:text-red-500 transition-all transform duration-200">Revil</span></a>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 mt-4 md:mt-0"
            >
              <a href="https://github.com/Siddhaartth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">GitHub</a>
              <a href="https://www.instagram.com/dear._.dev08/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">Instagram</a>
              <a href="https://www.reddit.com/user/unknown_user-33/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">Reddit</a>
            </motion.div>
          </div>
        </div>
      </footer>
    );
  }