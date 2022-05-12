import { initialState } from '../initialState';

export const renderComments = () => {
  const commentsList = document.createElement("div");

  initialState.comments.forEach((comments, index) => {
    const commentItem = document.createElement("div");
    commentItem.textContent = `${index + 1}) ${comments.text}`;
    commentsList.append(commentItem);
  });

  return commentsList;
}
