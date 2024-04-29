export const MAIN_URL = 'https://api.kinopoisk.dev/v1.4/movie';
export const token = 'JSN6CZZ-KZQMQJ3-GREENAX-7Z6BY04';

export const premiereData = (date) => {
  const originalDate = new Date(date);
  const monthsRus = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const day = originalDate.getDate();
  const monthIndex = originalDate.getMonth();
  const year = originalDate.getFullYear();
  return `${day} ${monthsRus[monthIndex]} ${year}`;
}