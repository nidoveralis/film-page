import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './FilmsList.scss';

import { api } from '../../utils/MainApi';

function FilmsList () {
  //const sliderRef = useRef(null);
  const [list, setList] = useState();
  const [activeIndex, setActiveIndex] = useState(1);
  const [isLoader, setIsLoader] = useState(false);

  const getPage = (page) => {
    setIsLoader(true);
    api.getMovies(page).then(data => {
      setList(data);
      setIsLoader(false);
    });
  }

  const handleOpenPage = (index) => {
    setActiveIndex(index + 1);
    getPage(index + 1);
  };
  const handleClickRight = () => {
    //const slider = sliderRef.current;
    //slider.scrollLeft += 65;
    setActiveIndex(activeIndex + 1);
    getPage(activeIndex + 1);
  };

  useEffect(()=>{
    if(!list) {
      setIsLoader(true);
      api.getMovies(activeIndex).then(data => {
        setList(data);
        setIsLoader(false);
      });
    }
  // eslint-disable-next-line
  }, []);
  return (
    <>
     <section className='start-page'>
     {isLoader && <div className='loader' style={{top: 70}} />}
      <h2>Лучшие фильмы</h2>
      {list &&
        <>
        <div className='button-cotaiten'>
        <ul className='list_page'>
        {list?.docs?.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleOpenPage(index)}
                className={activeIndex - 1 === index ? 'button_active' : ''}
              >
                {index + 1}
              </button>
            </li>
        ))}
        </ul>
        <button className='button_right' onClick={handleClickRight} disabled={activeIndex === 5} />
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
      </>
      }
    </section>
    </>
  )
}

export default FilmsList;