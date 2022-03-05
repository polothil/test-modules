import { useState } from 'react';
import Dropdown2 from './components/Dropdown2/Dropdown2';
// import Dropdown from './components/Dropdown/Dropdown';
// import { countries } from './data/countries';
// import { animals as data } from './data/animals';

import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import BookData from './data/Data.json';

// const items = [
//   { id: 1, value: 'Pulp Fiction' },
//   { id: 2, value: 'The Prestige' },
//   { id: 3, value: 'Blade Runner 2049' },
// ];

function App() {
  // const [value, setValue] = useState(null);
  return (
    <div className='App'>
      <SearchBar placeholder='Enter a book name..' data={BookData} />
    </div>
    // <div className='container'>
    //   <Dropdown2 title='Select Movie' items={items} />
    // </div>

    // <div style={{ width: 200 }}>
    //   <Dropdown
    //     options={data}
    //     prompt={'Select animal...'}
    //     id='id'
    //     label='name'
    //     value={value}
    //     onChange={(val) => setValue(val)}
    //   />
    // </div>
  );
}

export default App;
