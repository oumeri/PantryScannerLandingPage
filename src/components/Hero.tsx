import { Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 text-center md:text-left flex items-center justify-between"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Smart Kitchen <span className="text-green-500">Assistant</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Never waste food again. Scan, track, and manage your pantry items with our intelligent food management system.
            </p>

            {/* Animated Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#download"
                className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Free</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#how-it-works"
                className="text-gray-600 hover:text-green-500 flex items-center space-x-2 transition-colors duration-300"
              >
                <span>Learn More</span>
                <ChevronDown className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Right Wireframe */}
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="relative flex justify-center items-center mt-8 md:mt-0 md:w-1/2"
          >
            <div className="w-72 h-[583px] bg-gray-200 rounded-3xl border-[5px] border-gray-900 shadow-xl relative overflow-hidden">
              <img src="/Imgs/getStarted.JPG" alt="food" className="w-full object-cover rounded-xl" />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Hero;
