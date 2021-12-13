import { Router } from 'express' // this npm module import Router  to handle routes
import employeesRoutes from '@routes/employees.routes' // this custom route import employeesRoutes to use photos specific logic

const router = Router() // create an instance of Router Express to handle all the routes of the apps

router.get('/', (_, res) => res.status(200).json({ message: 'ppal' })) // send a object if the url is: "for example" -> localhost:PORT_NODE/"

router.use('/api', [employeesRoutes]) // use the employeesRoutes if the url is: "for example" -> localhost:4000/api", it can be another route attached to this url like [employeesRoutes,otherRoutes]

export default router
