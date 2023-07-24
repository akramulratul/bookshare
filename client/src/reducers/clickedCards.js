// clickedCards.js

import { CARD_CLICKED } from "../constants/actions";

const initialState = [];

export default function clickedCardsReducer(state = initialState, action) {
  switch (action.type) {
    case CARD_CLICKED:
      return [...state, action.payload];
    default:
      return state;
  }
}
