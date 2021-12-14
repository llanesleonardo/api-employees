import { responseFormat } from '@helpers/format.helpers'
import { validId } from '@services/employees.services'

export async function isValidId(req, res, next) {
  try {
    const { id } = req.params
    const employee = await validId(id)
    console.log('employeeId ' + JSON.stringify(employee))
    if (!employee) {
      const response = responseFormat(
        400,
        { errors: 'id no encontrado' },
        'Los datos son erroneos'
      )

      return res.status(400).json(response)
    }

    next()
  } catch (e) {
    console.error(e.stack)
  }
}
