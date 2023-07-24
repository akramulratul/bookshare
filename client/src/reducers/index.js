import { combineReducers } from "redux";
import books from "./books";
import book from "./book";
import authData from "./auth";
import user from "./user";
import filterData from "./filter";
import wishList from "./wishList";
import chats from "./chats";
import notification from "./notifications";
import recents from "./recents";
import shareBook from "./shareBook";
import shareBooks from "./shareBooks";
import clickedCards from "./clickedCards";

export default combineReducers({
  books,
  authData,
  filterData,
  wishList,
  user,
  book,
  chats,
  notification,
  recents,
  shareBook,
  shareBooks,
  clickedCards,
});
