import { initialState } from './initialState';
import { getCats } from './getCats';

export const getNews = () => {
  fetch("http://localhost:3050/news/")
  .then((res) => res.json())
  .then((news) => {
    initialState.news = news;
    getCats();
  })
  .catch((e) => {
    console.log(e);
  })
}
