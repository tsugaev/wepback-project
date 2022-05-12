import { initialState } from '../initialState';
import { renderHeader } from './renderHeader';
import { renderNewsList } from './renderNewsList';
import { renderSingleNews } from './renderSingleNews';

export const render = () => {
  const root = document.getElementById("root");
  const main = document.createElement("main");

  root.textContent = "";

  if (Array.isArray(initialState.news)) {
    main.append(renderNewsList());
  } else {
    main.append(renderSingleNews());
  }

  root.append(renderHeader(), main);
}
