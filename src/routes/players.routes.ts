import { Router } from "express"
import { CreatePlayerController } from "../modules/players/CreatePlayer/CreatePlayerController"
import { RemovePlayerController } from "../modules/players/RemovePlayer/RemovePlayerController"

const playersRoutes = Router()
const createPlayerController = new CreatePlayerController()
const removePlayerController = new RemovePlayerController()

//cria novo jogador 
playersRoutes.post('/player/create/:group_id', createPlayerController.handle)

//remove um jogador
playersRoutes.get('/player/remove/:id', removePlayerController.handle)

export { playersRoutes }