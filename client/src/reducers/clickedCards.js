// clickedCards.js

import { CARD_CLICKED, NEW_MESSAGE_RECEIVED } from "../constants/actions";

const initialState = [];

export default function clickedCardsReducer(state = initialState, action) {
  switch (action.type) {
    case CARD_CLICKED:
      return [...state, action.payload];
    case NEW_MESSAGE_RECEIVED:
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
}
