import { initialState } from './initialState';
import { render } from './render';
import { getComments } from './getComments';

export const getNewsById = (id) => {
  fetch(`http://localhost:3050/news/${id}`)
  .then((res) => res.json())
  .then((news) => {
    initialState.news = news;
    getComments(id)
  })
  .catch((e) => {
    console.log(e);
  })
}
