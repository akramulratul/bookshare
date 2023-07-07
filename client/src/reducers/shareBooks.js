import {
  FETCH_SHARE_ALL,
  //   CREATE,
  FILTER_BOOKS,
  //   ADD_FAV,
  UPDATE_SHARE,
  DELETE_SHARE_BOOK,
  //   UPDATE_BOOKS,
} from "../constants/actions";

export default (shareBooks = [], action) => {
  switch (action.type) {
    case FETCH_SHARE_ALL:
      return action.payload;
    case FILTER_BOOKS:
      return action.payload;
    // case CREATE:
    //   return [...shareBooks, action.payload];
    // case ADD_FAV:
    //   return shareBooks.map((book) =>
    //     action.payload._id === book._id ? action.payload : book
    //   );
    case UPDATE_SHARE:
      return shareBooks.map((book) =>
        action.payload._id === book._id ? action.payload : book
      );
    // case UPDATE_BOOKS:
    //   return shareBooks.map((book) =>
    //     action.payload._id === book._id ? action.payload : book
    //   );
    case DELETE_SHARE_BOOK:
      return shareBooks.filter((book) => action.payload !== book._id);
    default:
      return shareBooks;
  }
};
