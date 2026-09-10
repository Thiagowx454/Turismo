import { motion } from 'motion/react';
import { Star, MapPin } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Foz do Iguaçu',
    country: 'Paraná',
    price: 'R$ 1.250',
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg',
    tag: 'Natureza'
  },
  {
    id: 2,
    title: 'Ilha do Mel',
    country: 'Paraná',
    price: 'R$ 890',
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Farol_da_Ilha_do_Mel.jpg',
    tag: 'Ecoturismo'
  },
  {
    id: 3,
    title: 'Florianópolis',
    country: 'Santa Catarina',
    price: 'R$ 1.600',
    rating: 5.0,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg',
    tag: 'Praias'
  },
  {
    id: 4,
    title: 'Fernando de Noronha',
    country: 'Pernambuco',
    price: 'R$ 4.500',
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg',
    tag: 'Premium'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function Destinations() {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute -top-40 -right-40 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></motion.div>
         <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-teal-500 font-bold tracking-widest uppercase text-sm mb-4">Explore o Mundo</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Destinos mais procurados</h3>
          <p className="text-slate-600 text-xl font-medium leading-relaxed">
            Descubra lugares incríveis para sua próxima aventura. Curados especialmente pelos nossos especialistas curitibanos.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 group cursor-pointer border border-slate-100"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover origin-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-teal-600 shadow-sm uppercase tracking-wide">
                  {dest.tag}
                </div>
              </div>
              <div className="p-7">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-2xl font-extrabold text-slate-900 mb-1">{dest.title}</h4>
                    <div className="flex items-center text-slate-500">
                      <MapPin className="w-4 h-4 mr-1 text-teal-500" />
                      <span className="font-medium text-sm">{dest.country}</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-teal-50 px-2.5 py-1.5 rounded-lg text-teal-700 text-sm font-bold shadow-sm">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {dest.rating}
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-slate-100 flex justify-between items-center">
                  <div>
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">A partir de</div>
                    <div className="text-2xl font-black text-teal-600 leading-none">{dest.price}</div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/5541999999999?text=Ol%C3%A1!%20Tenho%20interesse%20no%20pacote%20para%20${dest.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-teal-50 hover:bg-[#25D366] text-teal-700 hover:text-white px-4 py-2.5 rounded-full font-bold text-sm transition-colors duration-300 shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    Reservar
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
