import React from 'react';
import TextToSpeech from './pages/TextToSpeech';
import Navbar from './components/NavBar'
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <Navbar />
      <Home />
    </main>
  );
};

export default App;
