import React from 'react';
import HeroSpline from './components/HeroSpline.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import DiscoveryPreview from './components/DiscoveryPreview.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSpline />
      <FeatureGrid />
      <DiscoveryPreview />
      <Footer />
    </div>
  );
}

export default App;
