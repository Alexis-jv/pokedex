import './App.css';
import { useState, useEffect } from 'react';
import PageSelector from './components/PageSelector/index.js';
import PokedexPage from './components/PokedexPage';

function App() {
  const [page, setPage] = useState(1);

  function handleClick(value) {
    if (page + value > 0) setPage(page + value);
  }
  return (
    <div className='App'>
      <PokedexPage page={page} />
      <PageSelector page={page} onPreviousClick={() => handleClick(-1)} onNextClick={() => handleClick(1)} />
    </div>
  );
}

export default App;