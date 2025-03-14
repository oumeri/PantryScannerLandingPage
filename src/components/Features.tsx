import { BarChart, Bell, List, Scan, LogIn, CheckCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  { src: "/Imgs/Home.JPG", alt: "App Screen 1" },
  { src: "/Imgs/ListItems.JPG", alt: "App Screen 2" },
  { src: "/Imgs/login.JPG", alt: "App Screen 3" },
  { src: "/Imgs/lostItems.JPG", alt: "App Screen 4" },
];

const features = [
    {
      icon: <Scan className="w-8 h-8 text-green-500" />,
      title: "Smart Scanning",
      description:
        "Advanced AI technology to instantly recognize food items and their conditions",
    },
    {
      icon: <Bell className="w-8 h-8 text-green-500" />,
      title: "Expiry Alerts",
      description: "Get timely notifications before your food items expire",
    },
    {
      icon: <LogIn className="w-8 h-8 text-green-500" />,
      title: "Login with Google",
      description:
        "Easily log in to the app using your Google account for a seamless experience",
    },
    {
      icon: <List className="w-8 h-8 text-green-500" />,
      title: "Food List",
      description:
        "Get a comprehensive list of all your food items along with their detailed information",
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
      title: "Pantry Tracking",
      description:
        "Track your scanned items in your pantry with estimated expiry dates and status updates",
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-500" />,
      title: "Waste Analysis",
      description:
        "Analyze food loss based on historical data and optimize your consumption habits",
    },
  ];
  

export const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Smart Features for Modern Living
        </h2>
        
        <div className="relative w-full flex justify-center items-center h-[600px] mb-10">
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isLeft = index === (currentIndex - 1 + images.length) % images.length;
            const isRight = index === (currentIndex + 1) % images.length;

            return (
              <motion.div
                key={index}
                className="absolute w-72 h-[583px] bg-gray-200 rounded-3xl border-[5px] border-gray-900 shadow-xl overflow-hidden"
                animate={{
                  scale: isActive ? 1.1 : 0.8,
                  opacity: isActive ? 1 : 0.6,
                  x: isActive ? 0 : isLeft ? -150 : isRight ? 150 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ zIndex: isActive ? 10 : 5 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover rounded-lg"
                />
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
