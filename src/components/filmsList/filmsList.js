import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

import './FilmsList.scss';

import { api } from '../../utils/MainApi';

function FilmsList (listProps) {
  const sliderRef = useRef(null);
  const [list, setList] = useState(listProps);
  const [activeIndex, setActiveIndex] = useState(list?.page-1);
console.log(listProps, list);
  const handleOpenPage = (index) => {
    setActiveIndex(index);
  };
  const handleClickRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 65;
    setActiveIndex(activeIndex + 1);
    console.log(list.page);
    api.getMovies(list.page + 1).then(data => {
      setList(data);
    });
  };

  return (
    <section className='start-page'>
      <h2>Лучшие фильмы</h2>
      <div className='button-cotaiten'>
        <ul className='list_page'ref={sliderRef}>
          {list?.docs?.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleOpenPage(index)}
                className={activeIndex === index ? 'button_active' : ''}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <button className='button_right' onClick={handleClickRight} />
      </div>

      <ul className='list_cards'>
        {list?.docs?.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.id}`}
                className='card'
              >
                <img src={item.poster.url} alt="Постер фильма" />
                <div className='card__text'>
                  <h3>{item.names[0].name}</h3>
                  <p className='card__rating'>{item.rating.kp.toFixed(1)}</p>
                  <p>{item.year}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default FilmsList;