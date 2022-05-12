import { initialState } from './initialState';
import { render } from './render';

export const getComments = (id) => {
  fetch(`http://localhost:3050/comments/news/${id}`)
  .then((res) => res.json())
  .then((comments) => {
    initialState.comments = comments;
    render();
  })
  .catch((e) => {
    console.log(e);
  })
}
