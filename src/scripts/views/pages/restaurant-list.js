/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import RestaurantSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
            <div class="content">
              <h2 class="content-heading">Restaurant's List</h2>
              <div id="restaurant" class="restaurant">

              </div>
           </div>
          `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.listOfRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
export default RestaurantList;
