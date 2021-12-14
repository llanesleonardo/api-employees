import { body, check, param } from 'express-validator'
import { isValidId } from '@middlewares/db.middlewares'

export const badWords = ['tonto', 'pendejo', 'puto', 'baboso']

export const postValidations = [
  body('name')
    .exists()
    .withMessage('field not found')
    .isLength({ min: 3, max: undefined })
    .withMessage('field is too short you need a larger value')
    .not()
    .isIn(badWords)
    .withMessage('field contains a bad word'),
  body('lastname')
    .exists()
    .isLength({ min: 3, max: undefined })
    .withMessage('field is too short you need a larger value')
    .not()
    .isIn(badWords)
    .withMessage('field contains a bad word'),
  body('email')
    .exists()
    .withMessage('field not found')
    .notEmpty()
    .withMessage('field is empty')
    .isEmail()
    .withMessage('The field is not an email')
    .not()
    .isIn(badWords)
    .withMessage('field contains a bad word')
    .normalizeEmail(),
  body('department')
    .exists()
    .withMessage('field not found')
    .notEmpty()
    .withMessage('field is empty')
    .isInt()
    .withMessage('field is not an Number'),
  body('position')
    .exists()
    .withMessage('field not found')
    .notEmpty()
    .withMessage('field is empty')
    .isInt()
    .withMessage('field is not an Number'),
  body('creationDate')
    .exists()
    .withMessage('field not found')
    .notEmpty()
    .withMessage('field is empty'),
  body('modificationDate')
    .exists()
    .withMessage('field not found')
    .notEmpty()
    .withMessage('field is empty'),
  body('mobile')
    .exists()
    .withMessage('field not found')
    .notEmpty()
    .withMessage('field is empty')
    .not()
    .isIn(badWords)
    .withMessage('field contains a bad word'),
  body('active')
    .exists()
    .withMessage('field not found')
    .notEmpty()
    .withMessage('field is empty')
    .isInt()
    .withMessage('field is not an Number'),
  body('urlPhoto')
    .exists()
    .withMessage('field not found')
    .notEmpty()
    .withMessage('field is empty')
    .isURL({ protocols: ['http', 'https', 'ftp'], require_host: true })
    .not()
    .isIn(badWords)
    .withMessage('field contains a bad word')
]
export const putValidations = [
  param('id')
    .exists()
    .withMessage('field not found')
    .notEmpty()
    .withMessage('field is empty')
]
export const dbValidations = [isValidId]
