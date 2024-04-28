import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import FilmsList from './components/filmsList/FilmsList';
import SingleFilm from './components/singleFilm/singleFilm';

import { api } from './utils/MainApi';

function App() {

  const [listProps, setListProps] = useState();

  useEffect(()=>{
    api.getMovies(1).then(data => {
      setListProps(data);
    });
  }, []);

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>Кино справочник</h1>
      </header>
      <Routes>
        <Route path="/" element={<FilmsList listProps={listProps}/>} />
        <Route path="/:id" element={<SingleFilm />} />
      </Routes>
    </div>
  );
}

export default App;
