import { initialState } from '../initialState';
import { getNewsByCat } from '../getNewsByCat';

export const renderHeader = () => {
  const header = document.createElement("header");
  const menu = document.createElement("ul");

  initialState.cats.forEach((category) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = category.name;
    menuItem.addEventListener("click", () => getNewsByCat(category._id));
    menu.append(menuItem);
  })

  header.append(menu);

  return header;
}
