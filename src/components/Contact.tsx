import { motion } from "motion/react";
import { Button } from "./ui/Button";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20 relative border-8 border-slate-800">
          
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -mr-[400px] -mt-[400px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[100px] -ml-[300px] -mb-[300px] pointer-events-none" />
          </div>

          <div className="flex flex-col lg:flex-row relative z-10">
            {/* Contact Info */}
            <div className="p-10 md:p-16 lg:w-5/12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                  Get A Free Quote
                </h2>
                <p className="text-slate-300 font-medium leading-relaxed mb-10 text-lg">
                  Ready to transform your property? Fill out the form or give us a call. We usually respond within an hour with a clear, honest quote.
                </p>
                
                <div className="space-y-6">
                  <a href="tel:5039972313" className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-black tracking-tighter">(503) 997-2313</span>
                  </a>
                  <a href="mailto:the.pelican.pw@gmail.com" className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group break-all">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-black tracking-tighter">the.pelican.pw@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-white group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-black tracking-tighter">Beaverton, OR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-10 md:p-16 lg:w-7/12 bg-white/5 backdrop-blur-sm">
              <form 
                className="space-y-6" 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! In a real app, this would submit the form.");
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-300">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-300">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="(503) 555-0123"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium text-slate-300">Property Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="123 Main St, Beaverton OR"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-300">Service Needed</label>
                  <select 
                    id="service" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all [&>option]:bg-slate-900"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="house">House Soft Washing</option>
                    <option value="driveway">Driveway & Concrete</option>
                    <option value="roof">Roof Cleaning</option>
                    <option value="deck">Deck & Patio</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium text-slate-300">Additional Details</label>
                  <textarea 
                    id="details" 
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Any specific stains, or areas of focus?"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full text-lg mt-4 h-16">
                  Request Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
