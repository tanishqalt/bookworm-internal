/**
 * Endpoints for various APIS
 */

const baseURL = 'http://localhost:3000';

const ENDPOINTS = {
	USER_REGISTER: '/user/register',
	USER_LOGIN: '/user/login',
	USER_VERIFY: '/user/verify',
	GET_ALL_USERS: '/user/all-users',
	GET_USER: '/user/get-user',
	UPDATE_USER_BIO: '/user/update-userbio',
	UPDATE_USER_READING_LIST: '/user/update-user-readinglist',
	REQUEST_NEW_BOOK: '/request/new',
	GET_ALL_REQUESTS: '/request/all',
	GET_ALL_BOOKS: '/books/all',
	NEW_BOOK: '/books/new',
	GET_BOOK: '/books/',
	UPDATE_BOOK_RATING: '/books/update-rating',
	SEARCH_BOOKS: '/books/search/',
	UPDATE_TIMES_READ: '/books/update-timesread/',
	TRENDING_BOOKS: '/books/trending',
};

export { baseURL, ENDPOINTS };
