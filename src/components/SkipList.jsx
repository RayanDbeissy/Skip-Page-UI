import React, { useState } from 'react';
import SkipCard from './SkipCard';

const SkipList = () => {
  const skips = [
    { id: 1, title: 'Skip A', price: 500 },
    { id: 2, title: 'Skip B', price: 750 },
    { id: 3, title: 'Skip C', price: 600 },
  ];

  const [selectedId, setSelectedId] = useState(null);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          selected={selectedId === skip.id}
          onSelect={() => setSelectedId(skip.id)}
          price={skip.price}
          title={skip.title}
        />
      ))}
    </div>
  );
};

export default SkipList;
