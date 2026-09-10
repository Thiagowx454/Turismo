import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden min-h-[95vh] flex items-center">
      {/* Animated Background */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg"
          alt="Cataratas do Iguaçu, Paraná"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-block py-1.5 px-5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 font-bold text-sm mb-6 backdrop-blur-md cursor-default tracking-wide uppercase shadow-lg shadow-teal-900/50"
          >
            📍 Partindo de Curitiba para o mundo
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-2xl">
            Descubra o Seu Próximo <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300 inline-block mt-2">
              Destino Inesquecível
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-md font-medium"
        >
          Experiências exclusivas, roteiros personalizados e memórias para a vida toda. A sua agência premium no coração do Paraná.
        </motion.p>

        {/* Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-3xl shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-2"
        >
          <div className="bg-white rounded-2xl w-full flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-100 p-2 gap-2 md:gap-0">
            <motion.div whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }} className="flex-1 flex items-center gap-3 px-6 py-4 w-full rounded-xl transition-colors">
              <MapPin className="text-teal-500 w-7 h-7 shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Local</label>
                <input
                  type="text"
                  placeholder="Para onde?"
                  className="bg-transparent border-none focus:outline-none text-slate-800 font-bold text-lg w-full placeholder:text-slate-300 placeholder:font-semibold"
                />
              </div>
            </motion.div>
            <motion.div whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }} className="flex-1 flex items-center gap-3 px-6 py-4 w-full rounded-xl transition-colors">
              <Calendar className="text-teal-500 w-7 h-7 shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Datas</label>
                <input
                  type="text"
                  placeholder="Quando?"
                  className="bg-transparent border-none focus:outline-none text-slate-800 font-bold text-lg w-full placeholder:text-slate-300 placeholder:font-semibold"
                />
              </div>
            </motion.div>
            <motion.div whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }} className="flex-1 flex items-center gap-3 px-6 py-4 w-full rounded-xl transition-colors">
              <Users className="text-teal-500 w-7 h-7 shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Hóspedes</label>
                <input
                  type="text"
                  placeholder="Quantos?"
                  className="bg-transparent border-none focus:outline-none text-slate-800 font-bold text-lg w-full placeholder:text-slate-300 placeholder:font-semibold"
                />
              </div>
            </motion.div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-500 hover:bg-teal-400 text-white p-7 rounded-2xl transition-colors w-full md:w-auto flex justify-center items-center shadow-lg shadow-teal-500/40 shrink-0"
          >
            <Search className="w-7 h-7 md:mr-0 mr-3" />
            <span className="md:hidden block font-bold text-lg">Buscar Pacotes</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
