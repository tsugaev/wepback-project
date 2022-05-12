import { initialState } from './initialState';
import { render } from './render';

export const getNewsByCat = (id) => {
  fetch(`http://localhost:3050/news/category/${id}`)
  .then((res) => res.json())
  .then((news) => {
    initialState.news = news;
    render();
  })
  .catch((e) => {
    console.log(e);
  })
}
