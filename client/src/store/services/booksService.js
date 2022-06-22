import axios from "axios";

const getBooks = async () => {
  const books = await axios.get("/api/books");
  return books.data;
};

const getBook = async (id) => {
  const books = await axios.get(`/api/books/${id}`);
  return books.data;
};

const createBook = async (bookData) => {
  const books = await axios.post("/api/books", bookData);
  return books.data;
};

const booksService = {
  getBooks,
  getBook,
  createBook,
};

export default booksService;
