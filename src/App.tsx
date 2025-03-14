import { useEffect, useState } from 'react';
import { 
  Scan, 
  Star,  
  ChevronDown, 
  Apple, 
  Smartphone,
} from 'lucide-react';
import Hero from './components/Hero';
import { Footer } from './components/Footer';
import { Features } from './components/Features';
import { HowItWork } from './components/HowItWork';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
          setActiveSection(section.id);
        }
      });

      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { number: '1M+', label: 'Downloads' },
    { number: '4.8', label: 'App Store Rating' },
    { number: '50K+', label: 'Daily Active Users' },
    { number: '200+', label: 'Supported Products' },
  ];

 

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm py-4 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Scan className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold text-gray-800">Pantry Scanner</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className={`transition-colors duration-300 ${activeSection === 'features' ? 'text-green-500' : 'text-gray-600 hover:text-green-500'}`}>Features</a>
              <a href="#how-it-works" className={`transition-colors duration-300 ${activeSection === 'how-it-works' ? 'text-green-500' : 'text-gray-600 hover:text-green-500'}`}>How It Works</a>
              <a href="#testimonials" className={`transition-colors duration-300 ${activeSection === 'testimonials' ? 'text-green-500' : 'text-gray-600 hover:text-green-500'}`}>Testimonials</a>
            </nav>
            <a href="#download" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300">
              Download Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero></Hero>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features></Features>
    
      {/* How It Works Section */}
      <HowItWork></HowItWork>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "This app has completely transformed how I manage my kitchen. No more wasted food!",
                author: "Sarah Johnson",
                role: "Home Chef",
                rating: 5
              },
              {
                text: "The expiry notifications have saved me money countless times. Highly recommended!",
                author: "Michael Chen",
                role: "Busy Parent",
                rating: 5
              },
              {
                text: "Simple to use and incredibly effective. The analytics help me shop smarter.",
                author: "Emma Davis",
                role: "Food Blogger",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Download Pantry Scanner Today</h2>
          <p className="text-xl mb-12">Available for iOS and Android</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="flex items-center space-x-2 bg-white text-green-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <Apple className="w-6 h-6" />
              <span>App Store</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-white text-green-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <Smartphone className="w-6 h-6" />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </section>

      <Footer></Footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ChevronDown className="w-6 h-6 transform rotate-180" />
      </button>
    </div>
  );
}

export default App;