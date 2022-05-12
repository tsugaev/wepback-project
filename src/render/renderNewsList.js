import { initialState } from '../initialState';
import { getNewsById } from '../getNewsById';

export const renderNewsList = () => {
  const newsList = document.createElement("div");

  initialState.news.forEach((news) => {
    const div = document.createElement("div");
    div.textContent = news.title;
    div.addEventListener("click", () => getNewsById(news._id));
    newsList.append(div);
  })

  return newsList;
}
