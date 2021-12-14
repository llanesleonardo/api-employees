import { getRepository, getConnection } from 'typeorm'
import { Employee } from '@entities/Employee'
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */

/**
 * @index fetch all documents
 */
export async function validId(id) {
  try {
    return await getConnection().getRepository(Employee).findOne(id)
  } catch (e) {
    console.error(e.stack)
  }
}

export async function index() {
  try {
    return await getConnection().getRepository(Employee).find()
  } catch (e) {
    console.error(e.stack)
  }
}
/**
 * @show fetch only one document
 * @param  {} id
 */
export async function show(id) {
  try {
    return await getConnection().getRepository(Employee).findOne(id)
  } catch (e) {
    console.error(e.stack)
  }
}
/**
 * @store crete a document an then save that document into db
 * @param  {} payload
 */
export async function store(
  name,
  lastname,
  email,
  department,
  position,
  creationDate,
  modificationDate,
  mobile,
  active,
  urlPhoto
) {
  try {
    const employee = new Employee()

    employee.name = name
    employee.lastname = lastname
    employee.email = email
    employee.department = department
    employee.position = position
    employee.creationDate = creationDate
    employee.modificationDate = modificationDate
    employee.mobile = mobile
    employee.active = active
    employee.urlPhoto = urlPhoto
    // let photo = await getPhotoRepository().create(payload)
    return await getConnection().getRepository(Employee).save(employee)
  } catch (e) {
    console.error(e.stack)
  }
}
/**
 * @update fetch one document, merge with the old same document and then save it into db
 * @param  {} id
 * @param  {} paypload
 */
export async function update(
  id,
  name,
  lastname,
  email,
  department,
  position,
  creationDate,
  modificationDate,
  mobile,
  active,
  urlPhoto
) {
  try {
    let employeeToUpdate = await getConnection()
      .getRepository(Employee)
      .findOne(id)
    let payload = {
      name,
      lastname,
      email,
      department,
      position,
      creationDate,
      modificationDate,
      mobile,
      active,
      urlPhoto
    }
    getRepository(Employee).merge(employeeToUpdate, payload)
    return await getConnection().getRepository(Employee).save(employeeToUpdate)
  } catch (e) {
    console.error(e.stack)
  }
}

/**
 * @destroy delete a specific document in the db
 * @param  {} id
 */
export async function destroy(id) {
  try {
    return await getConnection().getRepository(Employee).delete(id)
  } catch (e) {
    console.error(e.stack)
  }
}
