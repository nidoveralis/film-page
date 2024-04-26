import React from 'react';

import './FilmsList.scss';

function FilmsList (list) {
  console.log(list);
  return (
    <section className="start-page">
      <h2>Лучшие фильмы</h2>
      <ul className="list list-page">
        {list.list?.docs?.map((item, index) => (
          <li key={index}><button>{index + 1}</button></li>
        ))}
      </ul>
      <button className='button-right' />
      <ul className="list">

      </ul>
    </section>
  )
}

export default FilmsList;