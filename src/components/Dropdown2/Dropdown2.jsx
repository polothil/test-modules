import React, { useState } from 'react';

const Dropdown2 = ({ title, items = [], multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) setSelection([item]);
      else if (multiSelect) setSelection([...selection, item]);
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.id !== item.id);
      setSelection([...selectionAfterRemoval]);
    }
  };

  const isItemInSelection = (item) => {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <div className='dd-wrapper'>
      <div
        className='dd-header'
        tabIndex={0}
        role='button'
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className='dd-header_title'>
          <p className='dd-header_title--bold'>{title}</p>
        </div>
        <div className='dd-header_action'>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className='dd-list'>
          {items.map((item) => (
            <li key={item.id} className='dd-list-item'>
              <button onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown2;
