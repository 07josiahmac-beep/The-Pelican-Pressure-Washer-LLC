import { motion } from "motion/react";
import { Button } from "./ui/Button";
import { ArrowRight, Star } from "lucide-react";

export function Gallery() {
  const images = [
    "https://i.imgur.com/pv1Tise.jpeg",
    "https://i.imgur.com/uc1uTQy.jpeg",
    "https://i.imgur.com/n23XV0q.jpeg",
    "https://i.imgur.com/On2cf6d.jpeg",
    "https://i.imgur.com/WRY6FSY.jpeg"
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase rounded mb-6"
          >
            <Star className="w-3 h-3 fill-white" /> Our Work
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase"
          >
            Instant Curb Appeal Upgrade
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 font-medium"
          >
            Years of buildup removed in hours. See some of our recent transformations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 overflow-hidden rounded-[2rem] shadow-xl shadow-black/50 border-4 border-slate-800"
          >
             <img src={images[0]} alt="Cleaning project" className="w-full h-80 md:h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-[2rem] shadow-xl shadow-black/50 border-4 border-slate-800"
          >
             <img src={images[1]} alt="Cleaning project" className="w-full h-80 md:h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="overflow-hidden rounded-[2rem] shadow-xl shadow-black/50 border-4 border-slate-800"
          >
             <img src={images[2]} alt="Cleaning project" className="w-full h-80 md:h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="overflow-hidden rounded-[2rem] shadow-xl shadow-black/50 border-4 border-slate-800"
          >
             <img src={images[3]} alt="Cleaning project" className="w-full h-80 md:h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="overflow-hidden rounded-[2rem] shadow-xl shadow-black/50 border-4 border-slate-800 lg:col-span-1"
          >
             <img src={images[4]} alt="Cleaning project" className="w-full h-80 md:h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
        </div>

        <div className="text-center mt-20">
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="group text-lg h-14 px-10">
            Get Results Like This
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
