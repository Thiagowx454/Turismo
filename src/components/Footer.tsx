import { Plane, Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8"
        >
          {/* Brand */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-500 p-2.5 rounded-xl shadow-lg shadow-teal-500/20">
                <Plane className="w-7 h-7 text-white" />
              </div>
              <span className="font-black text-2xl tracking-tight text-white">Horizonte</span>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              Descubra o mundo com a agência de Curitiba que prioriza a sua experiência, conforto e segurança em cada roteiro.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -5, backgroundColor: '#14b8a6', color: 'white' }} href="#" className="bg-slate-800 p-3.5 rounded-xl text-slate-400 transition-colors shadow-md">
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5, backgroundColor: '#14b8a6', color: 'white' }} href="#" className="bg-slate-800 p-3.5 rounded-xl text-slate-400 transition-colors shadow-md">
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5, backgroundColor: '#14b8a6', color: 'white' }} href="#" className="bg-slate-800 p-3.5 rounded-xl text-slate-400 transition-colors shadow-md">
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-extrabold text-xl mb-6">Navegação</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors inline-block hover:translate-x-2 transform duration-300">Sobre Nós</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors inline-block hover:translate-x-2 transform duration-300">Destinos</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors inline-block hover:translate-x-2 transform duration-300">Pacotes de Viagem</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors inline-block hover:translate-x-2 transform duration-300">Blog da Viagem</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors inline-block hover:translate-x-2 transform duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold text-xl mb-6">Contato</h4>
            <ul className="space-y-5 font-medium text-slate-400">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Av. do Batel, 1230 - Batel<br />Curitiba - PR, 80420-090</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-teal-500" />
                </div>
                <span className="group-hover:text-teal-400 transition-colors">+55 (41) 99999-9999</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-teal-500" />
                </div>
                <span className="group-hover:text-teal-400 transition-colors">contato@horizonte.tur.br</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-medium text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Horizonte Turismo. Todos os direitos reservados.</p>
          <p>Feito com amor em Curitiba, PR 🌲</p>
        </motion.div>
      </div>
    </footer>
  );
}
