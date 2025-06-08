import React from 'react';
import './SkipCard.css';
import img from '../assets/img1.jpeg'; // Your image

const SkipCard = ({ selected, onSelect, price, title, hirePeriod }) => {
  return (
    <div className={`card ${selected ? 'selected' : ''}`} onClick={onSelect}>
      <div className="card-top">
        <img src={img} alt={title} className="skip-image" />
      </div>
      <div className="card-bottom">
        <h3>{title}</h3>
        <p>Hire Period: {hirePeriod} days</p>
        <span className="price">{price}$</span>
      </div>
    </div>
  );
};

export default SkipCard;
