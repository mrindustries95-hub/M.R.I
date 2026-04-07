import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

// Pages
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Customization } from "./pages/Customization";
import { Quality } from "./pages/Quality";
import { Contact } from "./pages/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const sections = ['home', 'products', 'customization', 'quality', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: -72 });
    }
  };

  return (
    <div>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} openQuote={() => setQuoteOpen(true)} />
      <Modal open={quoteOpen} close={() => setQuoteOpen(false)} />

      <main>
        <motion.div 
          id="home"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Home setPage={scrollToSection} openQuote={() => setQuoteOpen(true)} />
        </motion.div>

        <motion.div 
          id="products" 
          className="lmode"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Products openQuote={() => setQuoteOpen(true)} />
        </motion.div>
        
        <motion.div 
          id="customization" 
          className="lmode"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Customization openQuote={() => setQuoteOpen(true)} />
        </motion.div>
        
        <motion.div 
          id="quality" 
          className="lmode"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Quality openQuote={() => setQuoteOpen(true)} />
        </motion.div>
        
        <motion.div 
          id="contact" 
          className="lmode"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Contact />
        </motion.div>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
