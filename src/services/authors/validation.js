import {body} from 'express-validator'
export const AuthorsValidationMiddleware = [
    body("title").exists().withMessage("Title is a mandatory field!"),
    body("category").exists().withMessage("Category is a mandatory field!"),
    body("author.name").exists.withMessage("Name is a mandatory field!"),
  ]