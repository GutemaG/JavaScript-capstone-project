import card from './card.js';
import detail from './detail.js';
import { getComment, getLikes } from './fetchInvolvement.js';
import fetchMealAPI, { fetchSingleMealAPI } from './fetchMealAPI.js';

const filterLike = (likes, mealId) => {
  const filtered = likes.filter((like) => like.item_id === Number(mealId));
  if (filtered.length) {
    return filtered[0].likes;
  }
  return 0;
};

const itemList = async () => {
  const cardContainer = document.querySelector('.cardContainer');
  const meals = await fetchMealAPI();
  const likes = await getLikes();
  meals.forEach((meal) => {
    const mealLikes = filterLike(likes, meal.idMeal);
    cardContainer.appendChild(card({ ...meal, mealLikes }));
  });
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      const mealId = event.target.id;
      const meal = await fetchSingleMealAPI(event.target.id);
      const comments = await getComment(mealId);
      let popup = null;
      if (!comments) {
        popup = detail(meal[0], []);
      } else {
        popup = detail(meal[0], comments);
      }
      document.querySelector('#app').appendChild(popup);

      const commentListContainer = document.querySelector('.comment-list');
      if (!comments.length) {
        commentListContainer.innerText = 'No comment';
      } else {
        comments.forEach((comment) => {
          const commentList = document.createElement('li');
          commentList.innerText = `${comment.creation_date}  ${comment.username}  ${comment.comment}`;
          commentListContainer.appendChild(commentList);
        });
      }
      const closeButtons = document.querySelectorAll('.btn-close');
      const popups = document.querySelectorAll('.pop-up');
      closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          popups.forEach((popup) => {
            document.querySelector('#app').removeChild(popup);
          });
        });
      });
    });
  });
};

export default itemList;
