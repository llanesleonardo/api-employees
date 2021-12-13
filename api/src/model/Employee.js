/*export */ class Employee_old {
  constructor(
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
    this.id = id
    this.name = name
    this.lastname = lastname
    this.email = email
    this.department = department
    this.position = position
    this.creationDate = creationDate
    this.modificationDate = modificationDate
    this.mobile = mobile
    this.active = active
    this.urlPhoto = urlPhoto
  }
}

module.exports = {
  Employee_old: Employee_old
}
