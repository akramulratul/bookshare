import {
  ADD_CHAT,
  INITIAL_CHAT,
  NEW_MESSAGE_RECEIVED,
} from "../constants/actions";

export default (chats = [], action) => {
  switch (action.type) {
    case INITIAL_CHAT:
      return action.payload;
    case ADD_CHAT:
      return [...chats, action.payload];
    case NEW_MESSAGE_RECEIVED:
      return chats.map((chat) => {
        if (chat.fromId === action.payload) {
          return {
            ...chat,
            clicked: false,
          };
        } else {
          return chat;
        }
      });
    default:
      return chats;
  }
};
