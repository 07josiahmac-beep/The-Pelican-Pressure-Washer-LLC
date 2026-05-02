import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Clock, ThumbsUp, MapPin } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Local Beaverton Business",
      description: "Latino-owned and proudly serving our community. We treat every neighbor's home like our own.",
      icon: <MapPin className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Professional & Reliable",
      description: "We show up on time, communicate clearly, and don't leave until the job is done perfectly.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Safe Methods",
      description: "We know when to use high pressure and when to soft wash, protecting your property from damage.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Fast Free Quotes",
      description: "No waiting around. Contact us, and we'll get you a clear, affordable price quickly—no hidden fees.",
      icon: <Clock className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 pr-0 lg:pr-8"
        >
           <p className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold tracking-widest uppercase rounded">Why Choose Us</p>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 leading-[0.9]">
             Premium Service, <br className="hidden lg:block"/><span className="text-blue-600">No Hassle.</span>
           </h2>
           <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
             Hiring a contractor shouldn't be stressful. We make the entire process incredibly simple. From the moment you request a quote to the final walkthrough, expect clear communication and exceptional results.
           </p>
           
           <div className="pt-6 grid sm:grid-cols-2 gap-x-8 gap-y-12">
             {reasons.map((reason, idx) => (
               <div key={idx} className="space-y-3">
                 <div className="bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border-4 border-orange-200 [&>svg]:text-white">
                   {reason.icon}
                 </div>
                 <h4 className="font-black uppercase tracking-tighter text-slate-900 text-xl">{reason.title}</h4>
                 <p className="text-slate-600 font-medium text-sm leading-relaxed">{reason.description}</p>
               </div>
             ))}
           </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex-1 w-full"
        >
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-slate-100 bg-slate-900 group">
            <img 
              src="https://i.imgur.com/gWOocll.jpeg" 
              alt="Professional contractor smiling" 
              className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-90 transition-all hover:grayscale-0 hover:mix-blend-normal hover:opacity-100 duration-500"
            />
            <div className="absolute inset-0 bg-blue-600 mix-blend-overlay opacity-30 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 shadow-xl border-4 border-slate-50">
               <div className="flex items-center gap-4">
                 <div className="bg-blue-600 rounded-full p-4 text-white shadow-lg">
                   <ThumbsUp className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-slate-900 font-black uppercase tracking-tighter text-xl">100% Satisfaction</p>
                   <p className="text-slate-500 font-bold text-sm">Guaranteed results every time.</p>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
