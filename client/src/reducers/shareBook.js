import { GET_SHARE_BOOK, VALID, DEL_BOOK_WISH } from "../constants/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (shareBooks = {}, action) => {
  switch (action.type) {
    case GET_SHARE_BOOK:
      return action.payload;
    case VALID:
      return action.payload;
    case DEL_BOOK_WISH:
      return action.payload;
    default:
      return shareBooks;
  }
};
