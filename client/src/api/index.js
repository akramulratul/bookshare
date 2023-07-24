const axios = require("axios");
const API = axios.create({
  baseURL: "http://localhost:3000/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

const urlBooks = "/books";

const urlShareBooks = "/sharebooks";

const fetchBooks = () => API.get(`${urlBooks}/all`);
const fetchShareBooks = () => API.get(`${urlShareBooks}/all`);

const createBookAd = (formData) => API.post(`${urlBooks}/add`, formData);
const createShareBookAd = (formData) =>
  API.post(`${urlShareBooks}/share`, formData);

const addToWishList = (id) => API.patch(`${urlBooks}/${id}/addWishList`, id);

const showBookInfo = (bookId) => API.get(`${urlBooks}/book/${bookId}`);
const showBookShareInfo = (bookId) =>
  API.get(`${urlShareBooks}/book/${bookId}`);

const updatedIsSold = (bookId) => API.patch(`${urlBooks}/${bookId}/sold`);

const deleteaBook = (bookId) => API.delete(`${urlBooks}/${bookId}`);
const deleteAShareBook = (bookId) => API.delete(`${urlShareBooks}/${bookId}`);
const editaBook = (id, formData) => API.patch(`${urlBooks}/${id}`, formData);

const urlUsers = "/users";

const signUp = (formData) => API.post(`${urlUsers}/signUp`, formData);
const signIn = (formData) => API.post(`${urlUsers}/signIn`, formData);

const checkUserValid = (token) => API.post(`${urlUsers}/token-check`, token);
const sendPasswordMail = (email) =>
  API.post(`${urlUsers}/forgot-password`, email);
const resetPassword = (formData) =>
  API.post(`${urlUsers}/reset-password`, formData);

const verifyEmail = (email) => API.post(`${urlUsers}/verify-email`, email);
const verifiedUser = (token) => API.post(`${urlUsers}/validate-user`, token);

const googleFacebookSignIn = (formData) =>
  API.post(`${urlUsers}/googleFacebookSignIn`, formData);
  // API.post(`/auth`, formData);

const getProfile = (id) => API.get(`${urlUsers}/profile/${id}`);
const getRecentUsers = () => API.get(`${urlUsers}/profile/messages`);
const editProfile = (updatedUser) =>
  API.patch(`${urlUsers}/profile`, updatedUser);
const changePassword = (updatedPassword) =>
  API.patch(`${urlUsers}/profile/password`, updatedPassword);

const sendMail = (feedData) => API.post(`${urlUsers}/send-email`, feedData);
// const getWishList = (id) => API.get(`${urlUsers}/wishList`);
const deleteaBookFromWish = (book_id) => API.delete(`${urlUsers}/${book_id}`);

const requestBook = (bookId) => API.post(`/request/book/${bookId}`);
const acceptRequest = (requestId) => API.post(`/request/accept/${requestId}`);
const returnBook = (bookId) => API.post(`/return/book/${bookId}`);

module.exports = {
  fetchBooks,
  fetchShareBooks,
  createBookAd,
  signUp,
  signIn,
  googleFacebookSignIn,
  addToWishList,
  getProfile,
  editProfile,
  showBookInfo,
  showBookShareInfo,
  updatedIsSold,
  deleteaBook,
  deleteAShareBook,
  editaBook,
  changePassword,
  sendMail,
  getRecentUsers,
  deleteaBookFromWish,
  sendPasswordMail,
  checkUserValid,
  resetPassword,
  verifyEmail,
  verifiedUser,
  requestBook,
  acceptRequest,
  returnBook,
  createShareBookAd,
};
