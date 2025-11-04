import React, { useMemo, useRef, useState } from 'react';
import HeroSpline from './components/HeroSpline.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import DiscoveryPreview from './components/DiscoveryPreview.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const topRef = useRef(null);
  const featuresRef = useRef(null);
  const discoveryRef = useRef(null);

  // Toasts
  const [toasts, setToasts] = useState([]);
  const addToast = (text) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, text }]);
    // auto-remove after 3.5s
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3500);
  };

  // Modal
  const [modal, setModal] = useState({ open: false, title: '', content: null, action: null, actionLabel: '' });
  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  const handleStartExploring = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSeeNearby = () => {
    discoveryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleOpenFilters = () => {
    setModal({
      open: true,
      title: 'Filters',
      action: () => {
        addToast('Filters applied');
        closeModal();
      },
      actionLabel: 'Apply',
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-white/80 mb-1">Intent</label>
            <select className="w-full rounded-md bg-white/10 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-300/50">
              <option>Coffee</option>
              <option>Walk</option>
              <option>Hike</option>
              <option>Co-travel</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-white/80 mb-1">Distance (km)</label>
              <input type="range" min="1" max="25" defaultValue="5" className="w-full" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Dates</label>
              <input type="date" className="w-full rounded-md bg-white/10 border border-white/15 px-3 py-2 text-sm outline-none" />
            </div>
          </div>
        </div>
      ),
    });
  };

  const handleSayHi = (name) => {
    setModal({
      open: true,
      title: `Message ${name}`,
      actionLabel: 'Send',
      action: () => {
        addToast(`Sent a hello to ${name}`);
        closeModal();
      },
      content: (
        <textarea rows={4} placeholder={`Write a friendly intro to ${name}...`} className="w-full rounded-md bg-white/10 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-300/50" />
      ),
    });
  };

  const handleViewProfile = (name) => {
    setModal({
      open: true,
      title: `${name}'s profile`,
      actionLabel: 'Close',
      action: () => closeModal(),
      content: (
        <div className="space-y-2 text-sm text-white/80">
          <p>Interests: coffee walks, local food, sunset points.</p>
          <p>Verifications: email, phone, ID.</p>
          <p>Safety: Guardian mode on. Shares live location on meets.</p>
        </div>
      ),
    });
  };

  const handleJoinTrip = (route) => {
    setModal({
      open: true,
      title: `Join trip: ${route}`,
      actionLabel: 'Request to join',
      action: () => {
        addToast(`Requested to join ${route}`);
        closeModal();
      },
      content: (
        <div className="space-y-2 text-sm text-white/80">
          <p>We will notify the host and create a group chat when accepted.</p>
          <label className="block mt-2">Intro note</label>
          <textarea rows={3} className="w-full rounded-md bg-white/10 border border-white/15 px-3 py-2 text-sm" placeholder="Share your plans or preferences" />
        </div>
      ),
    });
  };

  const handleTripDetails = (route, dates, match) => {
    setModal({
      open: true,
      title: `${route}`,
      actionLabel: 'Close',
      action: () => closeModal(),
      content: (
        <div className="space-y-2 text-sm text-white/80">
          <p>Dates: {dates}</p>
          <p>Match score: {match}%</p>
          <p>Itinerary: meetup at bus stand, breakfast stop, scenic viewpoints, flexible pace.</p>
        </div>
      ),
    });
  };

  return (
    <div ref={topRef} className="min-h-screen bg-black text-white">
      <div id="hero">
        <HeroSpline onStartExploring={handleStartExploring} onSeeNearby={handleSeeNearby} />
      </div>
      <div id="features" ref={featuresRef}>
        <FeatureGrid />
      </div>
      <div id="discovery" ref={discoveryRef}>
        <DiscoveryPreview
          onOpenFilters={handleOpenFilters}
          onSayHi={handleSayHi}
          onViewProfile={handleViewProfile}
          onJoinTrip={handleJoinTrip}
          onTripDetails={handleTripDetails}
        />
      </div>
      <Footer />

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
          <div className="relative w-full sm:max-w-md bg-neutral-900 border border-white/10 rounded-t-2xl sm:rounded-2xl p-5 sm:p-6 mx-0 sm:mx-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">{modal.title}</h3>
              <button onClick={closeModal} className="text-white/60 hover:text-white">✕</button>
            </div>
            <div>{modal.content}</div>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={closeModal} className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Cancel</button>
              {modal.action && (
                <button onClick={modal.action} className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-orange-100">
                  {modal.actionLabel || 'OK'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Toasts */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((t) => (
          <div key={t.id} className="rounded-lg bg-neutral-900 border border-white/10 px-4 py-2 text-sm shadow-lg">
            {t.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
