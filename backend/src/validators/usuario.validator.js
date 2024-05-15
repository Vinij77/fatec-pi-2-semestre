import { body, params } from "express-validator";

export const createUserValidator = [
    body('email').isEmail().withMessage("Email inválido"),
    body('name').isString().withMessage("Nome inválido"),
]

export const updateUserValidator = [
    param('id').isInt().withMessage("ID inválido"),
    body('email').isEmail().withMessage("Email inválido"),
    body('name').isString().withMessage("Nome inválido"),
]

export const deleteUserValidator = [
    param('id').isInt().withMessage("Id inválido"),
]