import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Menu, X, ChevronRight, Search, MapPin, Phone, Mail, Instagram, Facebook, Globe, Award, Factory, PenTool, Upload, DollarSign, Ruler, CheckCircle2, Hammer, Eye, Settings, Gift } from 'lucide-react';

// Logo path - place your logo at public/jaywin-logo.png
const LOGO_PATH = "/jaywin-logo.png";
const COMPANY_NAME = "JAYWIN AI JEWELLERY";

// Contact Information
const CONTACT = {
  phone: "+60 12-219 2419",
  phoneLink: "tel:+60122192419",
  address: "No 12-4 Jalan Bunus 6, Off Jalan Masjid India, 50100 Kuala Lumpur",
  email: "info@jaywin.biz",
  website: "www.jaywin.biz",
  hours: "Monday - Saturday, 9:00 AM - 6:00 PM"
};

// Dealers data
const dealers = [
  {
    name: "Meena Jewellers",
    address: "60 Jalan Masjid India, Kuala Lumpur 50100",
    phone: "03-2697 1006",
    email: "online@meena.com.my",
    location: "Kuala Lumpur"
  },
  {
    name: "SMS Deen Jewellers",
    address: "52 Jalan Masjid India, Kuala Lumpur 50100",
    phone: "03-2693 0455",
    email: "",
    location: "Kuala Lumpur"
  },
  {
    name: "Jacint Jewellers",
    address: "85, Jalan Yam Tuan, 70000 Seremban, Negeri Sembilan",
    phone: "06-762 2553",
    email: "jacintjewellery@gmail.com",
    location: "Seremban"
  }
];

// Features for About section
const features = [
  { icon: Award, title: "Master Craftsmen", desc: "Skilled artisans with generations of expertise." },
  { icon: Factory, title: "Modern Facility", desc: "Advanced equipment meets traditional techniques." },
  { icon: Eye, title: "Quality Control", desc: "Rigorous inspection at every manufacturing stage." },
  { icon: PenTool, title: "Custom Design", desc: "Bespoke manufacturing capabilities for unique visions." }
];

// Process steps
const steps = [
  { number: "01", icon: Upload, title: "Submit Your Requirements", desc: "Share your design ideas, sketches, samples, or reference images. Tell us about your vision, preferred materials, quantity, and timeline." },
  { number: "02", icon: DollarSign, title: "Quotation & Consultation", desc: "Our team reviews your requirements and provides an initial estimate. We discuss material options, design feasibility, and timeline." },
  { number: "03", icon: Ruler, title: "Design Development", desc: "Our designers create detailed 2D or 3D renderings based on your specifications. We optimize the design for manufacturing while maintaining your vision." },
  { number: "04", icon: CheckCircle2, title: "Design Approval", desc: "Review the finalized design and provide your approval. Once confirmed, we provide a precise quotation including all costs." },
  { number: "05", icon: Hammer, title: "Mold & Sample Production", desc: "We create the production mold and manufacture the first sample. This typically takes 3-20 days depending on complexity." },
  { number: "06", icon: Eye, title: "Sample Inspection", desc: "We send you the first sample for inspection and verification. Review the craftsmanship, weight, finish, and overall quality." },
  { number: "07", icon: Settings, title: "Full Production", desc: "Upon sample approval, we begin full-scale manufacturing. We keep you updated throughout the production process." },
  { number: "08", icon: Gift, title: "Delivery & Support", desc: "Your order undergoes final inspection and is carefully packaged for delivery. We provide all necessary documentation." }
];

// Gold purity standards
const goldStandards = [
  { title: "916 Gold (22K)", desc: "91.6% pure gold mixed with alloys for durability. Ideal for everyday wear jewelry with excellent color and strength balance." },
  { title: "999 Gold (24K)", desc: "99.9% pure gold for maximum purity. Softer and more suitable for investment pieces and special ceremonial jewelry." },
  { title: "Custom Alloys", desc: "Other gold purities and special alloy compositions available upon request to meet specific design or market requirements." }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// NavLink Component
const NavLink = ({ href, children, mobile = false, onClick, isScrolled = true }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`
      font-medium tracking-wide transition-colors duration-300
      ${mobile 
        ? 'text-2xl text-slate-800 py-4 block hover:text-[#A65D57]' 
        : `text-xs font-bold uppercase tracking-[0.15em] ${isScrolled ? 'text-slate-800 hover:text-[#A65D57]' : 'text-white hover:text-[#D4AF37]'}`
      }
    `}
  >
    {children}
  </a>
);

// Splash Screen Component
function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0F172A] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Logo Image */}
        <motion.img 
          src={LOGO_PATH}
          alt="Jaywin Logo"
          className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        
        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[#D4AF37] font-serif text-3xl md:text-6xl tracking-[0.2em] font-medium uppercase text-center"
        >
          {COMPANY_NAME}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-slate-400 text-xs md:text-sm tracking-[0.3em] mt-4 uppercase"
        >
          Quality · Security · Artistry
        </motion.p>
        
        {/* Loading bar */}
        <motion.div 
          className="mt-12 w-48 h-[2px] bg-slate-700 overflow-hidden rounded-full"
        >
          <motion.div 
            className="h-full bg-[#D4AF37]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Navbar Component
function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            <NavLink href="#about" isScrolled={isScrolled}>Our Brand</NavLink>
            <NavLink href="#process" isScrolled={isScrolled}>Collections</NavLink>
          </div>

          {/* Center Logo - MUCH BIGGER with Company Name */}
          <div className="flex-1 flex justify-center">
            <a href="#" className="flex flex-col items-center group">
              <motion.div 
                className="flex flex-col items-center transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={LOGO_PATH}
                  alt="Jaywin Logo"
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? 'h-20 w-20' : 'h-56 w-56 md:h-72 md:w-72'
                  }`}
                />
                <span className={`font-serif tracking-[0.15em] uppercase transition-all duration-300 font-medium ${
                  isScrolled 
                    ? 'text-[#D4AF37] text-[10px] -mt-2' 
                    : 'text-[#D4AF37] text-base md:text-xl -mt-6 md:-mt-8'
                }`}>
                  {COMPANY_NAME}
                </span>
              </motion.div>
            </a>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            <NavLink href="#dealers" isScrolled={isScrolled}>Where to Buy</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ml-auto p-2 transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[#FFFBF5] z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col items-center">
                <img src={LOGO_PATH} alt="Jaywin Logo" className="h-32 w-32 object-contain" />
                <span className="text-[#D4AF37] font-serif text-sm tracking-[0.1em] uppercase -mt-3">
                  {COMPANY_NAME}
                </span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-slate-900" />
              </button>
            </div>
            
            <div className="flex flex-col gap-2">
              <NavLink href="#about" mobile onClick={handleNavClick}>Our Brand</NavLink>
              <NavLink href="#process" mobile onClick={handleNavClick}>Collections</NavLink>
              <NavLink href="#dealers" mobile onClick={handleNavClick}>Where to Buy</NavLink>
              <NavLink href="#contact" mobile onClick={handleNavClick}>Contact</NavLink>
            </div>

            <div className="mt-auto space-y-4">
              <a 
                href="#contact" 
                onClick={handleNavClick}
                className="block w-full bg-[#0F172A] text-white py-4 text-lg font-medium tracking-wide hover:bg-[#A65D57] transition-colors duration-300 text-center"
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Hero Component
function Hero() {
  return (
    <section className="relative h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1632499354595-91768e9d0028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
          alt="Gold Texture"
          className="w-full h-full object-cover opacity-40 scale-110"
        />
        {/* Animated gold particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-40 md:mt-52">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-[#D4AF37] font-bold tracking-[0.3em] text-sm uppercase mb-6">
            Welcome to Jaywin
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-8">
            CRAFTSMANSHIP
          </h1>
          <p className="text-white/70 text-sm md:text-base tracking-[0.2em] uppercase font-light max-w-2xl mx-auto">
            Artistry · Technology · Purity
          </p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#about" 
            className="px-10 py-4 bg-[#D4AF37] text-[#0F172A] font-semibold tracking-wide hover:bg-[#c9a431] transition-all duration-300 shadow-xl shadow-[#D4AF37]/20"
          >
            DISCOVER OUR CRAFT
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 border-2 border-white/30 text-white font-semibold tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            ENQUIRE NOW
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Right side */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-12 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#D4AF37]"
          />
        </div>
      </motion.div>
    </section>
  );
}

// About Component
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-[#A65D57] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Who We Are</span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#0F172A] mb-6">Crafting Legacy in Gold</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Your trusted manufacturing partner for exceptional gold jewellery
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
            className="space-y-8"
          >
            <p className="text-slate-600 leading-loose text-lg">
              Jaywin Jewellery is a distinguished gold manufacturing facility located in the vibrant heart of Jalan Masjid India, Kuala Lumpur. We specialize in creating premium gold pieces that embody both heritage and contemporary design excellence.
            </p>
            <p className="text-slate-600 leading-loose text-lg">
              As a dedicated gold factory, we serve a select network of authorized dealers across Malaysia, providing them with meticulously crafted pieces that meet the highest standards of quality and craftsmanship.
            </p>
            <p className="text-slate-600 leading-loose text-lg">
              Every piece that leaves our workshop represents our commitment to excellence—from material selection through to final inspection. We take pride in being the manufacturing partner of choice for discerning jewellers who demand nothing but the best.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
            }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden h-[500px] shadow-2xl">
              <img 
                src="/goldsmith.jpeg"
                alt="Goldsmith at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#A65D57]/80 to-[#A65D57]/20 mix-blend-multiply"></div>
              <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-[#D4AF37]/20 backdrop-blur-sm rounded-l-3xl border-l border-white/20"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={scaleIn}
              className="p-8 border border-[#F1E5D1] rounded-xl hover:border-[#A65D57] hover:shadow-lg transition-all duration-300 group bg-[#FFFBF5]"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm border border-[#F1E5D1] group-hover:border-[#A65D57] transition-colors">
                <feature.icon className="w-6 h-6 text-[#A65D57]" />
              </div>
              <h3 className="font-serif text-xl text-[#0F172A] mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Process Component
function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-24 bg-[#FFFBF5]">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-[#A65D57] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">How We Work</span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#0F172A] mb-6">Gold Jewelry Customization</h2>
          <p className="text-slate-500 text-lg">From concept to creation – a transparent journey bringing your vision to life</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={scaleIn}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0">
                <div className="bg-[#A65D57] text-white text-xs font-bold w-12 h-12 flex items-center justify-center rounded-bl-2xl shadow-lg">
                  {step.number}
                </div>
              </div>
              
              <div className="w-16 h-16 bg-[#FFFBF5] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#A65D57]/10 transition-colors">
                <step.icon className="w-8 h-8 text-[#A65D57]" />
              </div>
              
              <h3 className="font-serif text-2xl text-[#0F172A] mb-4">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } } }}
          className="mt-20 bg-white rounded-3xl p-12 text-center shadow-lg border border-[#F1E5D1]"
        >
          <h3 className="font-serif text-3xl text-[#0F172A] mb-6">Ready to start your custom gold jewelry project?</h3>
          <a href="#contact" className="inline-block bg-[#0F172A] text-white px-10 py-4 text-sm font-semibold tracking-wide hover:bg-[#A65D57] transition-colors duration-300 shadow-xl">
            Begin Your Custom Order
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Enquiry Component
function Enquiry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    orderType: 'Custom Manufacturing',
    quantity: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          orderType: 'Custom Manufacturing',
          quantity: '',
          details: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again or contact us directly.' });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E293B] rounded-full blur-3xl opacity-20 -mr-40 -mt-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInUp} className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Get In Touch</span>
          <h2 className="font-serif text-5xl text-white mb-6">Connect With Us</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">We're here to answer your questions and discuss how we can work together</p>
        </motion.div>

        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer} className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div variants={scaleIn} className="bg-[#1E293B] p-8 rounded-xl text-center hover:bg-[#253248] transition-colors">
            <div className="w-16 h-16 bg-[#A65D57]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-xl text-white mb-4">Visit Our Factory</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{CONTACT.address}</p>
          </motion.div>

          <motion.div variants={scaleIn} className="bg-[#1E293B] p-8 rounded-xl text-center hover:bg-[#253248] transition-colors">
            <div className="w-16 h-16 bg-[#A65D57]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-xl text-white mb-4">Call Us</h3>
            <a href={CONTACT.phoneLink} className="text-[#D4AF37] text-lg hover:text-[#c9a431] transition-colors">{CONTACT.phone}</a>
            <p className="text-slate-400 text-sm mt-4">{CONTACT.hours}</p>
          </motion.div>

          <motion.div variants={scaleIn} className="bg-[#1E293B] p-8 rounded-xl text-center hover:bg-[#253248] transition-colors">
            <div className="w-16 h-16 bg-[#A65D57]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-xl text-white mb-4">Email Us</h3>
            <a href={`mailto:${CONTACT.email}`} className="text-[#D4AF37] hover:text-[#c9a431] transition-colors">{CONTACT.email}</a>
            <p className="text-slate-400 text-sm mt-4">
              <a href={`https://${CONTACT.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{CONTACT.website}</a>
            </p>
          </motion.div>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } } }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl text-white mb-4">Custom Design Enquiry</h3>
            <p className="text-slate-400">Have a unique design in mind? Let's bring your vision to life.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#1E293B]/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/5 space-y-8 shadow-2xl">
            {submitStatus && (
              <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#A65D57] focus:border-[#A65D57] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Company / Business Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#A65D57] focus:border-[#A65D57] outline-none transition-all" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#A65D57] focus:border-[#A65D57] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#A65D57] focus:border-[#A65D57] outline-none transition-all" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Order Type *</label>
                <select name="orderType" value={formData.orderType} onChange={handleChange} className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#A65D57] focus:border-[#A65D57] outline-none transition-all cursor-pointer">
                  <option>Custom Manufacturing</option>
                  <option>Bulk Order</option>
                  <option>Repair & Restoration</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Estimated Quantity</label>
                <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 50 pieces" className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#A65D57] focus:border-[#A65D57] outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Project Details *</label>
              <textarea name="details" value={formData.details} onChange={handleChange} required rows={4} placeholder="Please describe your requirements..." className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#A65D57] focus:border-[#A65D57] outline-none transition-all resize-none"></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#A65D57] text-white font-bold tracking-wide py-4 rounded-lg hover:bg-[#8e4d48] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'SENDING...' : 'SUBMIT ENQUIRY'}
            </button>
          </form>
        </motion.div>
      </div>
      
      {/* Gold Standards */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } } }} className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#D4AF37] mb-4">Gold Purity Standards We Work With</h2>
        </motion.div>
        
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
          {goldStandards.map((standard, idx) => (
            <motion.div key={idx} variants={scaleIn} className="bg-[#1E293B] p-8 rounded-xl border-l-4 border-[#A65D57] hover:bg-[#253248] transition-colors">
              <h3 className="font-serif text-2xl text-[#D4AF37] mb-4">{standard.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{standard.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Dealers Component
function Dealers() {
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredDealers = dealers.filter(dealer => 
    dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="dealers" ref={ref} className="py-24 bg-[#FFFBF5]">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInUp} className="text-center mb-12">
          <span className="text-[#A65D57] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Our Network</span>
          <h2 className="font-serif text-5xl text-[#0F172A] mb-4">Authorized Dealers</h2>
          <p className="text-slate-500 text-lg">Find our trusted retail partners across Malaysia</p>
        </motion.div>

        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn} className="max-w-2xl mx-auto mb-20">
          <div className="bg-white p-2 rounded-full shadow-lg flex items-center border border-slate-100">
            <input 
              type="text" 
              placeholder="Search by name or location..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-6 py-3 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
            />
            <button className="bg-[#0F172A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#A65D57] transition-colors flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDealers.map((dealer, idx) => (
            <motion.div key={idx} variants={scaleIn} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#A65D57] p-8 group">
              <h3 className="font-serif text-2xl text-[#0F172A] mb-8 group-hover:text-[#A65D57] transition-colors">{dealer.name}</h3>
              
              <div className="space-y-6 text-sm text-slate-600">
                <div className="flex items-start gap-4">
                  <span className="font-bold text-[#0F172A] w-20 shrink-0">Address:</span>
                  <span className="leading-relaxed">{dealer.address}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-[#0F172A] w-20 shrink-0">Phone:</span>
                  <a href={`tel:${dealer.phone.replace(/[^0-9+]/g, '')}`} className="text-[#A65D57] hover:underline">{dealer.phone}</a>
                </div>
                {dealer.email && (
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-[#0F172A] w-20 shrink-0">Email:</span>
                    <a href={`mailto:${dealer.email}`} className="text-[#A65D57] hover:underline">{dealer.email}</a>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <span className="font-bold text-[#0F172A] w-20 shrink-0">Location:</span>
                  <span>{dealer.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredDealers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No dealers found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex flex-col items-start mb-6">
            <img src={LOGO_PATH} alt="Jaywin Logo" className="h-36 w-36 object-contain brightness-0 invert opacity-80" />
            <span className="text-[#D4AF37] font-serif text-base tracking-[0.1em] uppercase -mt-4">{COMPANY_NAME}</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            A premier gold manufacturing facility dedicated to excellence in craftsmanship and quality. Serving Malaysia's finest jewellers with distinction.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#process" className="hover:text-white transition-colors">Custom Orders</a></li>
            <li><a href="#dealers" className="hover:text-white transition-colors">Find Dealers</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#process" className="hover:text-white transition-colors">Custom Design</a></li>
            <li><a href="#process" className="hover:text-white transition-colors">Bulk Manufacturing</a></li>
            <li><a href="#dealers" className="hover:text-white transition-colors">Dealer Partnership</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Enquiries</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#A65D57] shrink-0 mt-0.5" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#A65D57] shrink-0" />
              <a href={CONTACT.phoneLink} className="hover:text-white transition-colors">{CONTACT.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#A65D57] shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#A65D57] shrink-0" />
              <a href={`https://${CONTACT.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{CONTACT.website}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2026 {COMPANY_NAME}. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function JaywinWebsite() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="font-sans antialiased text-slate-800 bg-[#FFFBF5]">
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Process />
            <Enquiry />
            <Dealers />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
