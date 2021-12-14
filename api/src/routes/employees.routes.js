import { Router } from 'express'
import * as employeesController from '@controllers/employees.controllers'
import {
  postValidations,
  putValidations,
  dbValidations
} from '@validations/actions.validations'
import { errorsValidation } from '@middlewares/errors.middlewares'

const router = Router()

/**
 * @param  {} "/employees/"
 * @param  {} employeesController.index calling the index function in the employeesController file (fetch all documents)
 */
router.get('/employees', employeesController.index)

/**
 * @api {post} /employees/
 * @apiName employeesController.store calling the store function in the employeesController file (save a document)
 * @apiPermission client
 * @apiGroup ____?
 * This parameters come from destructuring req.body
 * @apiParam  
 * @apiSuccess (200) {Object} new `Employee` object
 APISPECS
 */
// this route has 2 middlewares and 1 controller - the validation(middleware) postValidation is an specific way to validate fields that comes form the client, the middleware errorsValidation is an specific function
// that handles an inside function validationResult tha comes from express-validator and also handles the responses to the client with respondeFormat function interface
router.post(
  '/employees',
  postValidations,
  errorsValidation,
  employeesController.store
)
/**
 * @param  {id"} "/employees/
 * @param  {} employeesController.show calling the show function in the employeesController file (fetch a document)
 */
router.get(
  '/employees/:id',
  dbValidations,
  errorsValidation,
  employeesController.show
)
/**
 * @param  {id"} "/employees/
 * @param  {} employeesController.update calling the update function in the employeesController file (update a document)
 */

// this route has 2 middlewares and 1 controller - the validation(middleware) postValidations is an specific way to validate fields that comes form the client, the middleware errorsValidation is an specific function
// that handles an inside function validationResult tha comes from express-validator and also handles the responses to the client with respondeFormat function interface
router.put(
  '/employees/:id',
  dbValidations,
  postValidations,
  putValidations,
  errorsValidation,
  employeesController.update
)
/**
 * @param  {id"} "/employees/
 * @param  {} employeesController.destroy calling the destroy function in the employeesController file (destroy a document)
 */
router.delete('/employees/:id', employeesController.destroy)

export default router
