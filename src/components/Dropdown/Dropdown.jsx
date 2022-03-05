// https://www.youtube.com/watch?v=elC357w9VOA
import React, { useEffect, useRef, useState } from 'react';

import './Dropdown.css';

const Dropdown = ({ options, prompt, value, onChange, id, label }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('click', toggle);
    return () => {
      document.removeEventListener('click', toggle);
    };
  }, []);

  const toggle = (event) => {
    console.dir([event.target, ref.current]);
    setOpen(event && event.target === ref.current);
  };

  const filter = (options) => {
    return options.filter((option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1);
  };

  const displayValue = () => {
    if (query.length > 0) return query;
    if (value) return value[label];
    return '';
  };

  return (
    <div className='dropdown'>
      <div className='control' onClick={() => setOpen((prev) => !prev)}>
        <div className='selected-value'>
          <input
            type='text'
            ref={ref}
            placeholder={value ? value[label] : prompt}
            value={displayValue()} //with paranthesis, it gets executed on component loading
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={`arrow ${open ? 'open' : null}`}></div>
      </div>
      <div className={`options ${open ? 'open' : null}`}>
        <div className='option'>
          {filter(options).map((option) => (
            <div
              key={option[id]}
              className={`option ${value === option ? 'selected' : null}`}
              onClick={() => {
                setQuery('');
                onChange(option);
                setOpen(false);
              }}
            >
              {option[label]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
