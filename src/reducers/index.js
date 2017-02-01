import { combineReducers } from 'redux';

import { generateProducts } from '../utils/data';
import { ACTION_TYPES } from '../actions';

const INITIAL_STATE = {
  products: generateProducts(10),
};

export const products = (state = INITIAL_STATE.products, { type, payload }) => {
  if (type === ACTION_TYPES.addProduct) {
    return [...state, payload.product];
  }

  if (type === ACTION_TYPES.deleteProduct) {
    return state.filter(product=> product.name !== payload.product)
  }
  return state;
};

export default combineReducers({
  products,
});
