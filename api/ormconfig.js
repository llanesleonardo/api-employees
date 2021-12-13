/**
 * @ormconfig is a document that contains an object of configuration values
 * @type what kind of db you will use in the app
 * @host_ the host of the database
 * @port the port that will use DB
 * @username this username will be use to connect to the db
 * @password
 * @database specfic database to use in the config
 * @entities all the entities or models that will be allow in this project
 * @synchronize if we want to add new entity or a column, the code will synchronize with the DB
 * @logging file that contains all the warnings, errors, queries, schema build process, info, logs
 */

module.exports = {
  type: 'mysql',
  host: 'localhost' || process.env.MYSQL_HOST,
  port: 3306 || process.env.MYSQL_PORT,
  username: 'root' || process.env.MYSQL_USER,
  password: 'test123' || process.env.MYSQL_PASSWORD,
  database: 'employees' || process.env.MYSQL_DATABASE,
  entities: ['dist/entity/*.js'],
  synchronize: true,
  logging: true
}
