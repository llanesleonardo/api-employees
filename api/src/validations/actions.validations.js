import { body, check, param } from 'express-validator'
import { isValidId } from '@middlewares/db.middlewares'

export const postValidations = [
  body('id').exists(),
  body('name').exists(),
  body('lastname').exists(),
  body('email').exists(),
  body('department').exists(),
  body('position').exists(),
  body('creationDate').exists(),
  body('modificationDate').exists(),
  body('mobile').exists(),
  body('active').exists(),
  body('urlPhoto').exists()
]
export const putValidations = [
  body('id').exists(),
  body('name').exists(),
  body('lastname').exists(),
  body('email').exists(),
  body('department').exists(),
  body('position').exists(),
  body('creationDate').exists(),
  body('modificationDate').exists(),
  body('mobile').exists(),
  body('active').exists(),
  body('urlPhoto').exists()
]
export const dbValidations = [
  param('employeeId')
    .exists()
    .custom(employeeId => isValidId(employeeId))
]
