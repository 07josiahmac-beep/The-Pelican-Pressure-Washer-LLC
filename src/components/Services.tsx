import { motion } from "motion/react";
import { Droplets, Home, Sparkles, Umbrella, Fence } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "House Washing",
      description: "Bring your home back to life. We safely remove algae, dirt, and mildew without damaging your siding.",
      icon: <Home className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Driveway & Concrete",
      description: "Restore your driveway's original look. Say goodbye to deep stains, oil spots, and slippery moss.",
      icon: <Sparkles className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Roof Cleaning",
      description: "Protect your roof and extend its lifespan by safely removing harmful moss and black streaks.",
      icon: <Umbrella className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Deck & Patio",
      description: "Prep your outdoor spaces for summer. We carefully wash wood, composite, and stone surfaces.",
      icon: <Droplets className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Fence Cleaning",
      description: "Strip away graying and buildup from wooden or vinyl fences, getting them ready for stain or just looking new.",
      icon: <Fence className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Commercial Services",
      description: "Keep your business looking sharp and inviting. We handle walkways, storefronts, and parking areas.",
      icon: <Droplets className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase rounded mb-6"
          >
            What We Do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 uppercase"
          >
            Professional Cleaning for Every Surface
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Whether it's soft washing your roof or high-pressure cleaning your concrete, we have the right tools and expertise for the job.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200 border-4 border-slate-100 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6 bg-orange-500 text-white w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center border-4 border-orange-200 [&>svg]:text-white">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
