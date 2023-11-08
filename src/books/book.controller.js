import bookService from "./book.service";

const createBook = async (req, res) => {
  try {
    const { currentUser } = req;
    const createBook = await bookService.createBook({
      ...req.body,
      user_id: currentUser.id,
    });
    if (createBook.error) throw new Error(createBook.message);

    createBook &&
      res.status(200).send({
        success: true,
        message: "Book created successfully!",
        data: createBook.data,
      });
  } catch (error) {
    res.status(400).send({ success: false, Error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params,
      { body } = req;
    const updateBook = await bookService.updateBook({ id, ...body });
    if (updateBook.error) throw new Error(updateBook.message);

    updateBook &&
      res.status(200).send({
        success: true,
        message: "Selected Book has been updated successfully!",
      });
  } catch (error) {
    res.status(400).send({ success: false, Error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const getBook = await bookService.getOne({ _id: id });
    if (getBook.error) throw new Error(getBook.message);

    getBook &&
      res.status(200).send({
        success: true,
        book: getBook,
        message: "Book fetched successfully!",
      });
  } catch (error) {
    res.status(400).send({ success: false, Error: error.message });
  }
};

const getAllBook = async (req, res) => {
  try {
    const books = await bookService.getAll({ ...req.query });
    if (!books.length) throw new Error("No Books found!");
    if (books.error) throw new Error(books.message);
    res.status(200).send({
      success: true,
      books,
      message: "Books fetched successfully!",
    });
  } catch (error) {
    res.status(400).send({ success: false, Error: error.message });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await bookService.deleteBook({ _id: id });
    if (deleteBook.error) throw new Error(deleteBook.message);

    deleteBook &&
      res.status(200).send({
        success: true,
        message: "Selected Book has been deleted successfully!",
      });
  } catch (error) {
    res.status(400).send({ success: false, Error: error.message });
  }
};

export default {
  createBook,
  updateBook,
  getBookById,
  getAllBook,
  deleteBookById,
};
