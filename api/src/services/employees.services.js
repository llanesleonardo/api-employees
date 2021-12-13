import { getRepository, getConnection } from 'typeorm'
import { Employee } from '../entity/Employee'
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */

function getPhotoRepository() {
  try {
    return getConnection().getRepository(Employee)
  } catch (e) {}
}

/**
 * @index fetch all documents
 */
export async function index() {
  try {
    return await getPhotoRepository().find()
  } catch (e) {}
}
/**
 * @show fetch only one document
 * @param  {} id
 */
export async function show(id) {
  try {
    return await getPhotoRepository().findOne(id)
  } catch (e) {}
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

    ;(employee.name = name),
      (employee.lastname = lastname),
      (employee.email = email),
      (employee.department = department),
      (employee.position = position),
      (employee.creationDate = creationDate),
      (employee.modificationDate = modificationDate),
      (employee.mobile = mobile),
      (employee.active = active),
      (employee.urlPhoto = urlPhoto)

    // let photo = await getPhotoRepository().create(payload)
    return await getPhotoRepository().save(employee)
  } catch (e) {}
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
    let photoToUpdate = await getPhotoRepository().findOne(id)
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
    getRepository('photos').merge(photoToUpdate, payload)
    return await getPhotoRepository().save(photoToUpdate)
  } catch (e) {}
}

/**
 * @destroy delete a specific document in the db
 * @param  {} id
 */
export async function destroy(id) {
  try {
    return await getPhotoRepository().delete(id)
  } catch (e) {}
}
