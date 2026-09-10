import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, Plane } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Destinos', href: '#destinos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="bg-teal-500 p-2.5 rounded-xl shadow-lg shadow-teal-500/30">
              <Plane className="w-7 h-7 text-white" />
            </div>
            <span className={`font-extrabold text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>Horizonte</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.a 
                key={index}
                whileHover={{ y: -2 }}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`relative text-lg font-bold group transition-colors duration-300 ${isScrolled ? 'text-slate-700 hover:text-teal-600' : 'text-white/90 hover:text-white drop-shadow-sm'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-teal-600' : 'bg-teal-400'}`}></span>
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <motion.a 
              href="https://wa.me/5541999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20viagem%20com%20a%20Horizonte."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 text-white px-7 py-3 rounded-full text-lg font-bold transition-all shadow-md shadow-teal-500/20 block"
            >
              Agendar Viagem
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-slate-900' : 'text-white'}>
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="block px-3 py-3 text-slate-800 text-lg font-bold hover:bg-teal-50 hover:text-teal-600 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
              <a 
                href="https://wa.me/5541999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20viagem%20com%20a%20Horizonte."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-teal-500 text-white px-5 py-4 rounded-xl text-lg font-bold shadow-lg shadow-teal-500/25 active:scale-95 transition-transform text-center block"
              >
                Agendar Viagem
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
