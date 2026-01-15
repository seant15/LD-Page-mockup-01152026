
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  CheckCircle2, 
  Baby, 
  ShieldCheck, 
  Calendar, 
  Menu, 
  X,
  Heart,
  Stethoscope,
  Smile,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

// --- Types ---
interface Service {
  title: string;
  description: string;
}

// --- Components ---

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">L</div>
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-blue-900 tracking-tight">LUMIERE DENTAL</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Excellence in Dentistry</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          <a href="tel:571-444-9999" className="bg-blue-600 text-white px-6 py-2.5 rounded hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50">
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 shadow-xl">
          <a href="#" className="text-gray-800 font-medium border-b border-gray-50 pb-2">Home</a>
          <a href="#" className="text-gray-800 font-medium border-b border-gray-50 pb-2">About</a>
          <a href="#" className="text-gray-800 font-medium border-b border-gray-50 pb-2">Services</a>
          <a href="#" className="text-gray-800 font-medium border-b border-gray-50 pb-2">Contact</a>
          <a href="tel:571-444-9999" className="bg-blue-600 text-white px-6 py-3 rounded-md text-center font-bold">
            Call 571-444-9999
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c2c2c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-6">Lumiere Dental</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Providing quality dental care for the Fairfax community. Our mission is to help patients achieve optimal oral health through comprehensive, personalized care in a comfortable environment.
          </p>
          <div className="flex space-x-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
             <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6">Our Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-blue-400">Preventive Care</a></li>
            <li><a href="#" className="hover:text-blue-400">Restorative Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Cosmetic Dentistry</a></li>
            <li><a href="#" className="hover:text-blue-400">Periodontal Care</a></li>
            <li><a href="#" className="hover:text-blue-400 font-semibold text-blue-400">Family & Pediatric Dentistry</a></li>
            <li><a href="#" className="hover:text-blue-400">Emergency Care</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 text-blue-400 shrink-0" />
              <span>9524-B Lee Hwy (Route 29), Fairfax, VA 22031</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 text-blue-400 shrink-0" />
              <a href="tel:571-444-9999" className="hover:text-blue-400">571-444-9999</a>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 text-blue-400 shrink-0" />
              <a href="mailto:info@ldfairfax.com" className="hover:text-blue-400">info@ldfairfax.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-700 mt-16 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Lumiere Dental. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// --- Main Page Component ---

const PediatricPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000" 
            alt="Pediatric Dental Care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center py-16">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              <Baby size={14} />
              <span>Pediatric Specialists</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Pediatric Dentist in Fairfax - Kid-Friendly Dental Care
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 mb-8 max-w-xl leading-relaxed">
              Creating healthy smiles in a fun, kid-friendly environment. We accept <span className="font-bold text-white underline">Medicaid</span> and provide gentle care for children of all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded shadow-xl transition-all flex items-center justify-center">
                Schedule Your Child's Appointment
              </button>
              <a href="tel:571-444-9999" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-8 rounded transition-all text-center flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                571-444-9999
              </a>
            </div>
          </div>

          {/* Service Area Card */}
          <div className="hidden lg:block">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
              <h3 className="text-blue-900 font-bold text-xl mb-4 border-b border-blue-100 pb-2">Now Serving:</h3>
              <div className="grid grid-cols-2 gap-y-2 text-gray-700 font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Fairfax</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Herndon</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Centreville</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Manassas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Reston</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Chantilly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Merrifield</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-50">
                <p className="text-blue-800 text-sm font-bold flex items-center">
                   <Clock size={16} className="mr-2" /> Same-Day Appointments Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Us for Pediatric Dental Care</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <Smile className="text-blue-600" size={32} />, title: "Kid-friendly environment", desc: "Designed for comfort and joy." },
              { icon: <Baby className="text-blue-600" size={32} />, title: "Experienced with children", desc: "Patient and caring staff." },
              { icon: <ShieldCheck className="text-blue-600" size={32} />, title: "Accepts Medicaid", desc: "Cardinal Care & Humana." },
              { icon: <Clock className="text-blue-600" size={32} />, title: "Same-day appointments", desc: "Fast care when you need it." },
              { icon: <Heart className="text-blue-600" size={32} />, title: "Gentle care", desc: "Compassionate, low-stress visits." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-blue-900 mb-2 leading-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pediatric Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Comprehensive Pediatric Services</h2>
              <p className="text-gray-600">From first teeth to braces, we provide the full spectrum of childrens dental care in Fairfax.</p>
            </div>
            <button className="text-blue-600 font-bold flex items-center hover:underline">
              View All Services <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Children's exams and cleanings",
              "Cavity prevention and treatment",
              "Space maintainers",
              "Emergency pediatric care",
              "Fluoride treatments",
              "Dental sealants"
            ].map((service, idx) => (
              <div key={idx} className="group p-6 border border-blue-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Medicaid Section - HIGH PRIORITY */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -ml-32 -mb-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500 text-xs font-bold px-3 py-1 rounded-full uppercase mb-4">Coverage Information</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Medicaid Accepted for Kids</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                We believe every child deserves a beautiful smile. That's why we proudly accept various Medicaid plans for all pediatric services.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/20 p-1 rounded-full text-green-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg">Cardinal Care Accepted</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/20 p-1 rounded-full text-green-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg">Humana Medicaid Accepted</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/20 p-1 rounded-full text-green-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg">VA Medicaid Coverage</span>
                </div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <p className="flex items-center text-sm">
                  <ShieldAlert size={18} className="mr-2 text-blue-300" />
                  Please call us at <span className="font-bold underline ml-1">571-444-9999</span> to verify your specific coverage.
                </p>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Learn About Coverage</h3>
              <p className="text-gray-600 mb-6">Need help understanding what pediatric dental services are covered by your plan?</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Parent's Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="555-555-5555" />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors">
                  Get Coverage Info
                </button>
                <p className="text-center text-xs text-gray-400 mt-4 italic">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Makes Us Kid-Friendly */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d9d?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Happy child at dentist" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-xl hidden md:block">
                  <Smile size={48} className="mb-2" />
                  <p className="font-bold text-xl tracking-tight">15+ Years<br/>Experience</p>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">What Makes Us Kid-Friendly?</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Smile className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Comfortable Environment</h4>
                  <p className="text-gray-600">Our office is designed to reduce anxiety with bright, welcoming spaces and child-sized amenities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Heart className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Patient, Gentle Approach</h4>
                  <p className="text-gray-600">Our team takes extra time to build trust with every young patient, never rushing the process.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Stethoscope className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Kid-Friendly Explanations</h4>
                  <p className="text-gray-600">We explain procedures using simple, non-scary terms that help children feel in control and informed.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
               <button className="bg-blue-600 text-white px-8 py-4 rounded font-bold hover:bg-blue-700 transition-all shadow-lg">
                 Book Your Visit Today
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Location & Contact */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Visit Lumiere Dental in Fairfax</h2>
            <p className="text-gray-600">Conveniently located on Route 29 (Lee Hwy).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                      <MapPin size={20} className="mr-2 text-blue-500" /> Get In Touch
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Address:</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          9524-B Lee Hwy (Route 29),<br/>Fairfax, VA 22031
                        </p>
                        <a href="https://maps.google.com" className="text-blue-600 text-xs font-bold mt-2 inline-block hover:underline">Get Directions</a>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Phone:</p>
                        <a href="tel:571-444-9999" className="text-blue-600 font-bold text-lg">571-444-9999</a>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Email:</p>
                        <a href="mailto:info@ldfairfax.com" className="text-blue-600 text-sm">info@ldfairfax.com</a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                      <Clock size={20} className="mr-2 text-blue-500" /> Office Hours
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex justify-between"><span>Monday:</span> <span className="font-medium text-gray-800">9 AM - 5 PM</span></li>
                      <li className="flex justify-between"><span>Tuesday:</span> <span className="font-medium text-gray-800">9 AM - 5 PM</span></li>
                      <li className="flex justify-between"><span>Wednesday:</span> <span className="font-medium text-gray-800">9 AM - 5 PM</span></li>
                      <li className="flex justify-between"><span>Thursday:</span> <span className="font-medium text-gray-800">9 AM - 5 PM</span></li>
                      <li className="flex justify-between"><span>Friday:</span> <span className="font-medium text-gray-800">9 AM - 5 PM</span></li>
                      <li className="flex justify-between"><span>Saturday:</span> <span className="font-medium text-gray-800">9 AM - 2 PM</span></li>
                      <li className="flex justify-between text-red-500"><span>Sunday:</span> <span className="font-medium">Closed</span></li>
                    </ul>
                  </div>
               </div>
               
               <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                  <p className="text-gray-600 text-sm mb-4">Want to skip the wait? Request an appointment online.</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded shadow transition-all">
                    Request Online Appointment
                  </button>
               </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white h-[400px] md:h-auto">
              {/* Fake Map Embed */}
              <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                 <img 
                    src="https://picsum.photos/seed/dentistmap/800/600" 
                    alt="Map Location" 
                    className="w-full h-full object-cover grayscale opacity-50"
                 />
                 <div className="absolute inset-0 bg-blue-900/10"></div>
                 <div className="relative bg-white p-4 rounded shadow-2xl flex items-center space-x-3">
                   <div className="w-8 h-8 bg-red-500 rounded-full animate-bounce flex items-center justify-center text-white">
                      <MapPin size={16} />
                   </div>
                   <div>
                     <p className="font-bold text-blue-900 text-sm">Lumiere Dental</p>
                     <p className="text-gray-500 text-xs">9524-B Lee Hwy, Fairfax</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PediatricPage />
      </main>
      <Footer />
      
      {/* Persistent Floating Contact Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:571-444-9999" 
          className="bg-blue-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-4 border-white animate-pulse"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}
