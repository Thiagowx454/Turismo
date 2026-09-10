import { Shield, Clock, Award, HeartHandshake, Star } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Viagem Segura',
    description: 'Trabalhamos com parceiros verificados e seguro viagem completo.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Suporte 24/7',
    description: 'Nossa equipe curitibana sempre disponível para ajudar.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Melhores Preços',
    description: 'Garantimos as melhores tarifas através de parcerias exclusivas.'
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Roteiros Únicos',
    description: 'Experiências personalizadas baseadas nos seus sonhos.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } }
};

export default function Features() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-teal-500 font-bold tracking-widest uppercase text-sm mb-4">Por que nos escolher?</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Criamos memórias que duram uma vida inteira
              </h3>
              <p className="text-slate-600 text-xl font-medium mb-12 leading-relaxed">
                Da capital paranaense para os destinos mais cobiçados do mundo. Nossa equipe cuida de todos os detalhes para que você foque apenas em aproveitar cada momento.
              </p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12"
              >
                {features.map((feature, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex flex-col group">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mb-5 bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300 shadow-sm"
                    >
                      <div className="text-teal-500 group-hover:text-white transition-colors duration-300">
                         {feature.icon}
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-extrabold text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="relative z-10"
            >
              <motion.img
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Curitiba_Botanic_Garden.jpg"
                alt="Jardim Botânico de Curitiba"
                className="rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] border-white object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
              {/* Decorative Elements */}
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-5"
              >
                <div className="bg-orange-100 p-3.5 rounded-full text-orange-500 shadow-inner">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">4.9<span className="text-lg text-slate-400">/5</span></div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">Avaliação Média</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 pointer-events-none">
               <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-0 left-0 w-80 h-80 bg-teal-200 rounded-full blur-[80px]"></motion.div>
               <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full blur-[80px]"></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
