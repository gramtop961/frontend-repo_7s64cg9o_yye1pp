import React from 'react';
import { Users, Map, Shield, MessageSquare, Zap } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Smart Matching',
    desc: 'Match by dates, destinations, interests, pace and budget — even along the same route.'
  },
  {
    icon: Map,
    title: 'Nearby & Trips',
    desc: 'Discover travellers nearby, arrivals soon and curated meetups at trusted venues.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Women-only visibility, verification tiers, guardian mode, and AI-powered moderation.'
  },
  {
    icon: MessageSquare,
    title: 'Chats & Plans',
    desc: 'One-to-one or small group chats with plan cards, check-ins and live location options.'
  },
  {
    icon: Zap,
    title: 'Low-bandwidth Ready',
    desc: 'Works well in rural towns with offline cache and smart radius expansion.'
  }
];

export default function FeatureGrid() {
  return (
    <section className="bg-neutral-950 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold">Built for real-world solo travel</h2>
          <p className="text-white/70 mt-2 max-w-2xl">TrailMeet blends social discovery, itinerary matching and community safety into one clean experience.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 sm:p-6 hover:border-white/20 transition">
              <div className="flex items-center gap-3">
                <f.icon className="h-5 w-5 text-orange-300" />
                <h3 className="font-medium text-lg">{f.title}</h3>
              </div>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
