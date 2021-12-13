const EntitySchema = require('typeorm').EntitySchema // import {EntitySchema} from "typeorm";
const Employee = require('../model/Employee').Employee // import {Employee} from "../model/Employee";

module.exports = new EntitySchema({
  name: 'Employee',
  target: Employee,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar'
    },
    lastname: {
      type: 'varchar'
    },
    email: {
      type: 'varchar'
    },
    department: {
      type: 'int'
    },
    position: {
      type: 'int'
    },
    creationDate: {
      type: 'varchar'
    },
    modificationDate: {
      type: 'varchar'
    },
    mobile: {
      type: 'varchar'
    },
    active: {
      type: 'boolean'
    },
    urlPhoto: {
      type: 'varchar'
    }
  }
})
