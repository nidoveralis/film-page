import { useParams } from "react-router-dom";

import './singleFilm.scss'

function SingleFilm () {
  const {id} = useParams();
  console.log(id);
  return (
    <section className='single'>
      <div className='info'>
        <h2>8.4 Семь самураев</h2>
        <div className='img'/>
        <p className='description'>Япония. 16 век. В стране полыхает гражданская война, повсюду орудуют банды разбойников и мародеров. Бедные крестьяне нанимают для своей защиты семерых самураев, которые немного сплачивают раздробленных и малодушных жителей деревни в этой борьбе…
        Япония. 16 век. В стране полыхает гражданская война, повсюду орудуют банды разбойников и мародеров. Бедные крестьяне нанимают для своей защиты семерых самураев, которые немного сплачивают раздробленных и малодушных жителей деревни в этой борьбе…
        Япония. 16 век. В стране полыхает гражданская война, повсюду орудуют банды разбойников и мародеров. Бедные крестьяне нанимают для своей        
        </p>
        <ul>
          <li><p>Длительность: <span>202 мин</span></p></li>
          <li><p>Популярность: <span>24.13</span></p></li>
          <li><p>Дата выхода: <span>26 апреля 1954</span></p></li>
          <li><p>Жанр: <span>боевик, драма</span></p></li>
        </ul>

      </div>
      <div className='similar'>
        <h3>Похожие фильмы</h3>
        <ul>
          <li>
          <div className='poster'></div>
            <p>Кагемуся. Тень воина</p>
          </li>
          <li>
            <div className='poster'></div>
            <p>Кагемуся. Тень воина</p>
          </li>
          <li>
            <div className='poster'></div>
            <p>Кагемуся. Тень воина</p>
          </li>
          <li>
            <div className='poster'></div>
            <p>Кагемуся. Тень воина</p>
          </li>
          <li>
          <div className='poster'></div>
            <p>Кагемуся. Тень воина</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default SingleFilm;