/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-name">${restaurant.name}</h2>
  <img class="restaurant-pict" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant-info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="desc">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="address">
    <h3>Address</h3>
    <p>${restaurant.address}</p>
  </div>
  <div class="categories">
    <h3>Description</h3>
    <p>${restaurant.categories}</p>
  </div>
  <div class="menu-drink">
    <h3>Food Menus</h3>
    <p>${restaurant.menus.foods
    .map(
      (foods) => `
          <li>${foods.name}</li>
        `,
    ).join('')
}</p>
  </div>
  <div class="menu-drink">
    <h3>Food Menus</h3>
    <p>${restaurant.menus.drinks
    .map(
      (drink) => `
          <li>${drink.name}</li>
        `,
    ).join('')
}</p>
  </div>
  <div class="menu-drink">
  <h3>Review Pengunjung</h3>
  <p>${restaurant.customerReviews
    .map(
      (customerReviews) => `
          <li>${customerReviews.name}</li>
          <li>${customerReviews.date}</li>
          <li>${customerReviews.review}</li>
        `,
    ).join('')
}</p>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-header">
        <img class="restaurant-header_picture" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/'}">
        <div class="restaurant-header_rating">
            <p>⭐️<span class="restaurant-header_rating_score">${restaurant.rating}</span></p>
        </div>
        <div class="restaurant-city">
            <p>${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item_content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
