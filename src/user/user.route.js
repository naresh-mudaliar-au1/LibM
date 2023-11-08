import express from "express";
import userController from "./user.controller";
import { validation } from "../common";
const { userValidationSchema, validateRequest } = validation;

export default express
  .Router()
  .post("/signup", validateRequest(userValidationSchema), userController.signup)
  .post("/login", userController.login);
