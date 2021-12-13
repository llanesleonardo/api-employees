{
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "test123",
    "database": "employees",
    "synchronize": true,
    "entities": [
      "dist/entity/*.js"
    ],
    "cli": {
      "entitiesDir": "dist/entity"
    }
  }