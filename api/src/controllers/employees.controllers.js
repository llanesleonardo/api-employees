import * as employeesServices from '@services/employees.services'

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

export async function index(req, res, next) {
  try {
    const employees = await employeesServices.index() // call service and store the result in a constant variable
    res.status(200).json(employees) // send status code and joson rresponse to the client
  } catch (e) {}
}

export async function store(req, res, next) {
  try {
    const storedEmployee = await employeesServices.store() // call service and store the result in a constant variable
    res.status(200).json(storedEmployee) // send status code and joson rresponse to the client
  } catch (e) {}
}

export async function show(req, res, next) {
  try {
    const employee = await employeesServices.show() // call service and store the result in a constant variable
    res.status(200).json(employee) // send status code and joson rresponse to the client
  } catch (e) {}
}

export async function update(req, res, next) {
  try {
    const updatedEmployee = await employeesServices.update() // call service and store the result in a constant variable
    res.status(200).json(updatedEmployee) // send status code and joson rresponse to the client
  } catch (e) {}
}

export async function destroy(req, res, next) {
  try {
    const destroyedEmployee = await employeesServices.destroy() // call service and store the result in a constant variable
    res.status(200).json(destroyedEmployee) // send status code and joson rresponse to the client
  } catch (e) {}
}
