import { responseFormat } from '@helpers/format.helpers'
import { show } from '@services/employees.services'

export async function isValidId(id) {
  try {
    const objectId = await show(id)
    if (!objectId) {
      const response = responseFormat(
        400,
        { errors: errors.array() },
        'Problema con la consulta en la base de datos'
      )

      return res.status(400).json(response)
    }
    next()
  } catch (e) {}
}
