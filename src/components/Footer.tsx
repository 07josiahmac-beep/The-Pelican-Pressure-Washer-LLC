import { Droplets } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 pb-24 md:pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#" className="inline-block bg-white p-3 rounded-2xl mb-6">
              <img src="https://i.imgur.com/EeV8WdJ.png" alt="The Pelican Pressure Washing" className="h-12 md:h-16 w-auto" />
            </a>
            <p className="leading-relaxed max-w-sm mb-6 text-slate-400 font-medium">
              Premium pressure washing and exterior cleaning services in Beaverton, OR and surrounding areas. Make your property look brand new again.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="tel:5039972313" className="hover:text-blue-400 transition-colors">(503) 997-2313</a></li>
              <li><a href="mailto:the.pelican.pw@gmail.com" className="hover:text-blue-400 transition-colors break-all">the.pelican.pw@gmail.com</a></li>
              <li>Beaverton, OR</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} The Pelican Pressure Washer LLC.</p>
          <div className="flex flex-col items-end text-right">
            <span className="text-xs">Local Business</span>
            <span className="text-white underline decoration-blue-500 italic">Latin-Owned & Operated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <div className="flex gap-3">
        <a href="tel:5039972313" className="flex-1 flex justify-center items-center gap-2 bg-orange-500 text-white py-4 rounded-2xl font-black tracking-tight uppercase hover:-translate-y-1 transition-transform shadow-2xl shadow-orange-500/50">
           📞 Call Now
        </a>
      </div>
    </div>
  );
}
