function FilmList (list) {
  return (
    <section className="">
      <h2>Лучшие фильмы</h2>
      <ul className="list list-page">
        {list?.docs?.map((item, index) => (
          <li key={index}>{index + 1}</li>
        ))}
      </ul>
      <ul className="list">

      </ul>
    </section>
  )
}

export default FilmList;