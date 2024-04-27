import React, { useState, useRef } from 'react';

import './FilmsList.scss';

import Poster from '../../assets/poster.jpg'

function FilmsList (list) {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);


  const handleOpenCard = (item) =>{
    window.location.href = `/${item}`;
  };
  const handleOpenPage = (index) => {
    setActiveIndex(index);
  };
  const handleClickRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 65;
    setActiveIndex(activeIndex + 1);
  };

  return (
    <section className='start-page'>
      <h2>Лучшие фильмы</h2>
      <div className='button-cotaiten'>
        <ul className='list_page'ref={sliderRef}>
          {list.list?.docs?.map((item, index) => (
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
        {list.list?.docs?.map((item, index) => (
            <li key={index}>
              <div className='card' onClick={() => handleOpenCard(item.id)}>
                <img src={Poster} alt="Постер фильма" />
                <div className='card__text'>
                  <h3>{item.names[0].name}</h3>
                  <p className='card__rating'>{item.rating.kp.toFixed(1)}</p>
                  <p>{item.year}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default FilmsList;