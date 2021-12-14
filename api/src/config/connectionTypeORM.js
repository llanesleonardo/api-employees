import { getConnectionOptions, createConnection } from 'typeorm'

export const createTypeORMConnection = async () => {
  const connectionOptions = await getConnectionOptions('test')
  await createConnection({ ...connectionOptions, name: 'default' })
}
