import dotenv from 'dotenv' // This npm module import dotenv to use env files with out require them
/**
 *  @getEnv function that choose a config file (only use it in development enviroment )
 */
export const getEnv = () =>
  // return and Object with a parsed key containing the loaded content
  dotenv.config().error ? {} : dotenv.config().parsed // ternarian to set some values inside an .env file return
