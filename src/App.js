import React, { useState } from 'react';
import './App.css';
import SkipCard from './components/SkipCard';

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const fakeSkips = [
    { price: 200, title: 'Mini Skip', hirePeriod: 5 },
    { price: 250, title: 'Midi Skip', hirePeriod: 7 },
    { price: 300, title: 'Builder Skip', hirePeriod: 6 },
    { price: 350, title: 'Maxi Skip', hirePeriod: 9 },
    { price: 400, title: 'Industrial Skip', hirePeriod: 8 },
    { price: 450, title: 'Roll-on Roll-off Skip', hirePeriod: 10 },
  ];

  const sortedSkips = [...fakeSkips].sort((a, b) => a.price - b.price);

  return (
    <div className="app">
      <header className="page-header">
        <h1>Find the Right Skip</h1>
        <p>Choose the size that works best for your project</p>
      </header>

      <section className="skip-grid">
        {sortedSkips.map((skip, index) => {
          const col = index % 3;
          const row = Math.floor(index / 3);

          let positionClass = '';
          if (row === 0) {
            // First row animations
            positionClass =
              col === 0 ? 'slide-left' : col === 1 ? 'slide-top' : 'slide-right';
          } else if (row === 1) {
            // Second row animations, middle card slides from bottom
            positionClass =
              col === 0 ? 'slide-left' : col === 1 ? 'slide-bottom' : 'slide-right';
          } else {
            // Additional rows fallback
            positionClass =
              col === 0 ? 'slide-left' : col === 1 ? 'slide-top' : 'slide-right';
          }

          const delay = 0.3 * index;

          return (
            <div
              className={`card-wrapper ${positionClass}`}
              key={index}
              style={{ animationDelay: `${delay}s` }}
            >
              <SkipCard
                selected={selectedId === index}
                onSelect={() => setSelectedId(index)}
                price={skip.price}
                title={skip.title}
                hirePeriod={skip.hirePeriod}
              />
            </div>
          );
        })}
      </section>

      <footer className="footer-controls">
        <button className="btn secondary">Back</button>
        <button className="btn primary" disabled={selectedId === null}>
          Continue
        </button>
      </footer>
    </div>
  );
}

export default App;
