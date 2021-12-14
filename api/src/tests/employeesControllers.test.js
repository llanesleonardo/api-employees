import { getConnection, getRepository, createConnection } from 'typeorm'
import { Employee } from '@entities/Employee'
import { createTypeORMConnection } from '../config/connectionTypeORM'
import { store } from '../services/employees.services'

beforeAll(async () => {
  await createTypeORMConnection()
})

afterAll(async () => {
  await getConnection().close()
})

it('store function, store and object in DB', async () => {
  const employee = new Employee()

  employee.name = 'name1'
  employee.lastname = 'lastname'
  employee.email = 'email@gmail.com'
  employee.department = 0
  employee.position = 0
  employee.creationDate = 'creationDate'
  employee.modificationDate = 'modificationDate'
  employee.mobile = 'mobile'
  employee.active = 0
  employee.urlPhoto = 'http://3lstrategy.com/urlPhoto'

  const name = 'name'
  const lastname = 'lastname'
  const email = 'email@gmail.com'
  const department = 0
  const position = 0
  const creationDate = 'creationDate'
  const modificationDate = 'modificationDate'
  const mobile = 'mobile'
  const active = 0
  const urlPhoto = 'http://3lstrategy.com/urlPhoto'

  // let photo = await getPhotoRepository().create(payload)
  // const storedEmployee = await getConnection()
  //   .getRepository(Employee)
  //  .save(employee)
  // console.log(storedEmployee)
  // expect(Object.keys(storedEmployee).length).toBeGreaterThan(0)
  const newEmployee = await store(
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
  )
  expect(Object.keys(newEmployee).length).toBeGreaterThan(0)
})

//Object.keys(notEmptyObject).length
/**

  //expect(notEmptyObject.id).not.toBeUndefined()
  expect(notEmptyObject.name).toBe('Leonardo12')
  expect(notEmptyObject.email).toContain('@')
  expect(notEmptyObject.department).toBeNaN()
  expect(notEmptyObject.position).toBeNaN()
  expect(notEmptyObject.mobile).toBeGreaterThan(0)
  expect(notEmptyObject.active).toBeNaN()
  expect(notEmptyObject.urlPhoto).toBe('http://3lstrategy.com/urlPhoto')

 */
