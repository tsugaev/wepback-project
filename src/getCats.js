import { initialState } from './initialState';
import { render } from './render';

export const getCats = () => {
  fetch("http://localhost:3050/categories/")
  .then((res) => res.json())
  .then((cats) => {
    initialState.cats = cats;
    render();
  })
  .catch((e) => {
    console.log(e);
  })
}
