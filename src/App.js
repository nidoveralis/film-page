import { Routes, Route } from 'react-router-dom';
import './App.scss';

import FilmsList from './components/filmsList/FilmsList';
import SingleFilm from './components/singleFilm/singleFilm';

function App() {

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>Кино справочник</h1>
      </header>
        <Routes>
          <Route path="/" element={<FilmsList/>} />
          <Route path="/:id" element={<SingleFilm />} />
        </Routes>
    </div>
  );
}

export default App;
