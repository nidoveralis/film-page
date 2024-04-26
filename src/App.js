import { useEffect, useState } from 'react';
import './App.scss';

import FilmsList from './components/filmsList/FilmsList';

import { api } from './utils/MainApi';

function App() {

  const [list, setList] = useState();

  useEffect(()=>{
    api.getMovies().then(data => {
      setList(data);
    });
  }, []);

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>Кино справочник</h1>
      </header>
      <FilmsList list={list}/>
    </div>
  );
}

export default App;
