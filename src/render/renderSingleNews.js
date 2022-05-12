import { initialState } from '../initialState';
import { renderComments } from './renderComments';


export const renderSingleNews = () => {
  const singleNews = document.createElement("div");

  const title = document.createElement("h1");
  const text = document.createElement("div");

  title.textContent = initialState.news.title;
  text.textContent = initialState.news.text;
  const hr = document.createElement("hr");

  singleNews.append(title, text, hr, renderComments());

  return singleNews;
}
