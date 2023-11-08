import bookModel from "./book.model";

const getOne = async (query) => {
  try {
    const book = await bookModel.findOne(query);
    if (!book) throw new Error("Book not found!");
    return book;
  } catch (error) {
    return { error: true, message: error.message };
  }
};

const getAll = async (query) => {
  try {
    //When no limit is set handling from backend!
    let { page = 1, limit = 20, search } = query;

    let skip = (page - 1) * limit,
      searchQuery = search ? { title: new RegExp(search, "gi") } : {};

    const books = await bookModel.find(searchQuery).limit(limit).skip(skip);
    return books;
  } catch (error) {
    return { error: true, message: error.message };
  }
};

const deleteBook = async (id) => {
  try {
    const removeBook = await bookModel.deleteOne({ _id: id });
    if (!removeBook) throw new Error("Book not found!");
    return removeBook;
  } catch (error) {
    return { error: true, message: error.message };
  }
};

const updateBook = async (bookObj) => {
  try {
    let updateBook = await bookModel.findOneAndUpdate(
      { _id: bookObj.id },
      { ...bookObj }
    );
    if (!updateBook) throw new Error("Book not found!");
    return updateBook;
  } catch (error) {
    return { error: true, message: error.message };
  }
};

const createBook = async (bookObj) => {
  try {
    const { title } = bookObj;

    let validate = await bookModel.findOne({ title });
    if (validate) throw new Error("Book already exist!");

    let book = new bookModel({ ...bookObj });
    book = await book.save();
    return { error: false, data: book };
  } catch (error) {
    return { error: true, message: error.message };
  }
};

export default { createBook, deleteBook, getOne, getAll, updateBook };
