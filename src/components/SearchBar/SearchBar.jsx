// https://www.youtube.com/watch?v=x7niho285qs
import React, { useState } from 'react';

import './SearchBar.scss';

import { Search, Close } from '@mui/icons-material';

const SearchBar = ({ placeholder = 'default', data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  const handleFilter = (event) => {
    setSearchWord(event.target.value);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') setFilteredData([]);
    else setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setSearchWord('');
  };

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder} value={searchWord} onChange={handleFilter} />
        <div className='searchIcon'>
          {filteredData.length === 0 ? <Search /> : <Close id='clearBtn' onClick={clearInput} />}
        </div>
      </div>
      {filteredData.length != 0 ? (
        <div className='dataResult'>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a key={key} className='dataItem' href={value.link} target='_blank'>
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
