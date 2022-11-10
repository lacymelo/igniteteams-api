import { Router } from "express"
import { groupsRoutes } from "./groups.routes"
import { playersRoutes } from "./players.routes"


const routes = Router()

routes.use(groupsRoutes)
routes.use(playersRoutes)

export { routes }