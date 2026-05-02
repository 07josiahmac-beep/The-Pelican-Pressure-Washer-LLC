import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Beaverton, OR",
      text: "The Pelican team was fantastic. My driveway was almost black from years of pine needles and moss. It looks legitimately brand new now. Will definitely hire again next year.",
      rating: 5,
    },
    {
      name: "Miguel Torres",
      location: "Hillsboro, OR",
      text: "Highly recommended! Very professional, responded to my quote request within an hour, and came the next day. The house siding was completely transformed and safely soft washed.",
      rating: 5,
    },
    {
      name: "Emily R.",
      location: "Tigard, OR",
      text: "I was getting ready to sell my house and needed a quick curb appeal boost. They cleaned the roof, driveway, and front walkway. The real estate agent couldn't believe the difference.",
      rating: 5,
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 mb-6"
          >
            What Our Neighbors Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium"
          >
            Don't just take our word for it. Read reviews from homeowners across the Portland metro area.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 border-4 border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 flex flex-col hover:-translate-y-2 transition-transform"
            >
              <div className="flex gap-1 text-orange-400 mb-6 font-bold text-sm items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 font-medium leading-relaxed flex-1 mb-8">"{review.text}"</p>
              <div className="pt-6 border-t-2 border-slate-200">
                <p className="font-black text-slate-900 text-lg uppercase tracking-tighter">{review.name}</p>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
