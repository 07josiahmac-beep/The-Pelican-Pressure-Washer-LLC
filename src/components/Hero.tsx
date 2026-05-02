import { motion } from "motion/react";
import { Button } from "./ui/Button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full grid lg:grid-cols-12 gap-0 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-6 pr-0 lg:pr-12 text-slate-900"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6 border-none">
            <div className="flex gap-1 text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold tracking-widest uppercase">Top Rated Pressure Washing in Beaverton, OR</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
            Make Your Property Look <span className="text-blue-600 relative whitespace-nowrap">
              Brand New
            </span> Again.
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-md">
            Professional exterior cleaning that restores curb appeal in hours. House washing, roof cleaning, and expert concrete restoration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" variant="primary" className="w-full sm:w-auto group text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="#gallery" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full text-lg">
                See Results
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              <span>Locally Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              <span>Fast Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              <span>100% Satisfaction</span>
            </div>
          </div>
        </motion.div>
        
        {/* Visual Side */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="col-span-12 lg:col-span-6 relative mt-12 lg:mt-0 h-full flex items-center"
        >
          <div className="w-full aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden relative border-8 border-white">
            <img
              src="https://i.imgur.com/dnygBVT.jpeg"
              alt="Before and after exterior cleaning"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Floating Trust Card */}
          <div className="absolute -bottom-6 lg:bottom-10 right-4 lg:-left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-900">JD</div>
              <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-900">AS</div>
              <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-xs font-bold text-orange-900">RL</div>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">4.9 Stars local rating</div>
              <div className="text-xs font-semibold text-slate-500">Based on 150+ reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
