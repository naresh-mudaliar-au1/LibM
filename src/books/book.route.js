import express from "express";
import bookController from "./book.controller";
import { AuthService } from "../common";
import { validation } from "../common";
const { bookValidationSchema, validateRequest } = validation;

export default express
  .Router()
  .post(
    "/create",
    AuthService,
    validateRequest(bookValidationSchema),
    bookController.createBook
  )
  .put(
    "/:id/update",
    AuthService,
    validateRequest(bookValidationSchema),
    bookController.updateBook
  )
  .get("/:id", bookController.getBookById)
  .get("/", bookController.getAllBook)
  .delete("/:id", AuthService, bookController.deleteBookById);
