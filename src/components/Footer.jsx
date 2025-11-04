import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} TrailMeet. Travel safer, connect better.
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Safety-first • Privacy by default • Community standards
          </div>
        </div>
        <div className="mt-4 text-xs text-white/50 flex items-center gap-1">
          Built with <Heart className="h-3 w-3 text-orange-300" /> for solo travellers.
        </div>
      </div>
    </footer>
  );
}
