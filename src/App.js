import { useEffect, useState } from 'react';
import './App.css';

import FilmList from './components/filmsList/filmsList';

import { api } from './utils/MainApi';

function App() {

  const [list, setList] = useState();

  useEffect(()=>{
    api.getMovies().then(data => {
      setList(data);
    });
  }, [])
  return (
    <div className="App">
      <header className='header'>
        <h1>Кино справочник</h1>
      </header>
      <FilmList list={list}/>
    </div>
  );
}

export default App;
