import React from 'react';
import './selector.css'

const Selector = ({ onSelect }) => {
  return (
    <div className='selector' data-testid='selector'>
      <button onClick={() => onSelect('form')}>Show Form</button>
      <button onClick={() => onSelect('about')}>Show About</button>
    </div>
  );
};

export default Selector;
