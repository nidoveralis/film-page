import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import './singleFilm.scss'
import { api } from '../../utils/MainApi';
import { premiereData } from '../../utils/constants';

function SingleFilm () {
  const {id} = useParams();
  const slider = useRef();
  const [data, setData] = useState();
  const [isLoader, setIsLoader] = useState(false);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    api.getSinleMovies(id).then((res) => {
      setData(res);
    setIsLoader(false);
    })
  // eslint-disable-next-line
  }, []);

  return (
    <>
    <section className='single'>
    {isLoader && <div className='loader' style={{top: 70}} />}
      {data &&
      <>
      <div className='info'>
        <h2>{`${data.rating.kp} ${data.name}`}</h2>
        <img className='img' src={data.poster.url} alt="Постер фильма" />
        <div className='description'>
        <p className='description'>{data.description}</p>
        <ul>
          <li><p>Длительность: <span>{`${data.movieLength} мин`}</span></p></li>
          <li><p>Популярность: <span>24.13</span></p></li>
          <li><p>Дата выхода: <span>{data && premiereData(data)}</span></p></li>
          <li><p>Жанр: <span>{data.genres.map(el=>el.name)}</span></p></li>
        </ul>
        </div>

      </div>
      <div className='similar'>
      <h3>Похожие фильмы</h3>
        <div className="container">
        <ul ref={slider}>
          {data?.similarMovies?.length > 0 ? data.similarMovies.map((el) => (
            <li key={el.id}>
            <img className='poster' src={el.poster.url} alt="Постер фильма" />
              <p>{el.name}</p>
            </li>
          )) : 
          <p>Нет похожих фильмов</p>}
        </ul>
        </div>
      </div>
      </>      
      }
      {
        isErr && <p>Фильм не найден</p>
      }
    </section></>
  )
}

export default SingleFilm;