const Book = require("../modules/book");

/**
 * Получить все книги
 * @param {*} req
 * @param {*} res
 */

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: "Не удалось получить список книг",
    });
  }
};

/**
 * Получить книгу по id
 * @param {*} req
 * @param {*} res
 */

const getBook = async (req, res) => {
  try {
    const book = await Book.find({ _id: req.params.id });

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({
      message: "Книга не найдена",
    });
  }
};

/**
 * Добавить книгу
 * @param {*} req
 * @param {*} res
 * @returns
 */

const addBook = async (req, res) => {
  const errors = {};

  if (!req.body.name) {
    errors.name = { message: "Пожалуйста укажите название" };
  }

  if (!req.body.description) {
    errors.description = { message: "Пожалуйста добавьте описание" };
  }

  if (req.body.description && req.body.description.length > 700) {
    errors.description = { message: "Слишком длинное описание" };
  }

  if (!req.body.author) {
    errors.author = { message: "Пожалуйста укажите автора" };
  }

  if (!req.file) {
    errors.bookImage = { message: "Пожалуйста добавьте обложку книги" };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }
  try {
    const { name, description, author } = req.body;

    const book = await Book.create({
      name,
      description,
      author,
      bookImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({
      message: "Не удалось добавить книгу",
    });
  }
};

module.exports = {
  getBooks,
  getBook,
  addBook,
};
