import React from 'react';
import { MapPin, Calendar, Filter, Compass, Coffee, Mountain, Users } from 'lucide-react';

export default function DiscoveryPreview() {
  return (
    <section className="bg-neutral-950 text-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Nearby & Trips</h2>
          <button className="inline-flex items-center gap-2 text-sm rounded-lg border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10 transition">
            <Filter className="h-4 w-4" /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Nearby mock card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="h-5 w-5 text-orange-300" />
              <h3 className="font-medium">Nearby travellers</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Aisha', intent: 'Coffee', km: 2, icon: Coffee },
                { name: 'Luis', intent: 'Hike', km: 5, icon: Mountain },
                { name: 'Mina', intent: 'Co-travel', km: 1, icon: Users },
                { name: 'Tenzin', intent: 'Sunset walk', km: 3, icon: MapPin }
              ].map((p) => (
                <div key={p.name} className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-white/60">{p.km} km • {p.intent}</div>
                    </div>
                    <p.icon className="h-5 w-5 text-orange-300" />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="text-xs rounded-md bg-white text-black px-3 py-1.5 font-medium hover:bg-orange-100">Say hi</button>
                    <button className="text-xs rounded-md border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trips mock card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-orange-300" />
              <h3 className="font-medium">Trip matches</h3>
            </div>

            <div className="space-y-3">
              {[
                { route: 'Manali → Kasol', dates: '12–15 Oct', match: 92 },
                { route: 'Panjim → Palolem', dates: '20–22 Oct', match: 87 },
                { route: 'Jaipur → Pushkar', dates: '2–5 Nov', match: 81 }
              ].map((t) => (
                <div key={t.route} className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{t.route}</div>
                      <div className="text-xs text-white/60">{t.dates}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">Match</div>
                      <div className="text-orange-300 font-semibold">{t.match}%</div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="text-xs rounded-md bg-white text-black px-3 py-1.5 font-medium hover:bg-orange-100">Join</button>
                    <button className="text-xs rounded-md border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
