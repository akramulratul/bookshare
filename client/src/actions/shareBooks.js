import {
  CREATE_SHARE,
  ADD_FAV,
  UPDATE_SOLD,
  DELETE_BOOK,
  UPDATE_BOOKS,
  VALID,
  DEL_BOOK_WISH,
  FETCH_SHARE_ALL,
} from "../constants/actions";
const api = require("../api/index");

export const getShareBooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchShareBooks();
    console.log(data);
    dispatch({ type: FETCH_SHARE_ALL, payload: data });
  } catch (err) {}
};
export const createShareBookAd = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.createShareBookAd(formData);
    dispatch({ type: CREATE_SHARE, payload: data });
    dispatch({ type: VALID, payload: { msg: "Book Posted successfully" } });
    history.push("/");
  } catch (err) {
    const data = err.response.data;
    dispatch({ type: VALID, payload: data });
  }
};

export const addToWishList = (id) => async (dispatch) => {
  try {
    const { data } = await api.addToWishList(id);
    dispatch({ type: ADD_FAV, payload: data });
  } catch (error) {}
};

export const showBookInfo = (bookId) => async (dispatch) => {
  try {
  } catch (error) {}
};

export const updatedIsSold = (bookId) => async (dispatch) => {
  try {
    const { data } = await api.updatedIsSold(bookId);
    dispatch({ type: UPDATE_SOLD, payload: data });
  } catch (error) {}
};

export const deleteaBook = (bookId) => async (dispatch) => {
  try {
    await api.deleteaBook(bookId);
    dispatch({ type: DELETE_BOOK, payload: bookId });
  } catch (err) {}
};

export const editaBook = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editaBook(id, formData);
    dispatch({ type: UPDATE_BOOKS, payload: data });
  } catch (err) {}
};

export const deleteaBookFromWish = (book) => async (dispatch) => {
  try {
    console.log("Actions Book" + book);
    await api.deleteaBookFromWish(book._id);
    console.log("Actions Book2" + book);
    dispatch({ type: DEL_BOOK_WISH, payload: book });

    // console.log("Book ID is"+ book_id)
    // console.log("Book dispathched SuccessFully")
  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
};

export const requestBook = (bookId) => async (dispatch) => {
  try {
    const { data } = await api.requestBook(bookId);
    // Assume REQUEST_BOOK is a new action type that you've defined
    dispatch({ type: "REQUEST_BOOK", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const acceptRequest = (requestId) => async (dispatch) => {
  try {
    const { data } = await api.acceptRequest(requestId);
    // Assume ACCEPT_REQUEST is a new action type that you've defined
    dispatch({ type: "ACCEPT_REQUEST", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const returnBook = (bookId) => async (dispatch) => {
  try {
    const { data } = await api.returnBook(bookId);
    // Assume RETURN_BOOK is a new action type that you've defined
    dispatch({ type: "RETURN_BOOK", payload: data });
  } catch (error) {
    console.error(error);
  }
};
