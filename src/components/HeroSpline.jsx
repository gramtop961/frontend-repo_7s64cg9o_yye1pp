import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Map } from 'lucide-react';

export default function HeroSpline({ onStartExploring, onSeeNearby }) {
  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] md:h-[90vh] overflow-hidden bg-black">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs sm:text-sm">
            <Shield className="h-4 w-4 text-emerald-400" />
            <span>Women-first safety • Verified users • Trust by design</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            TrailMeet
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-300 to-orange-500">
              Meet solo travellers nearby. Safely.
            </span>
          </h1>

          <p className="max-w-2xl text-white/80 text-sm sm:text-base">
            Connect by dates, destinations, interests and pace. Plan coffee walks, hikes or co-travel with trusted people and community venues.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button onClick={onStartExploring} className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-orange-100 transition">
              <Rocket className="h-4 w-4" />
              Start Exploring
            </button>
            <button onClick={onSeeNearby} className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition">
              <Map className="h-4 w-4" />
              See Nearby
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
