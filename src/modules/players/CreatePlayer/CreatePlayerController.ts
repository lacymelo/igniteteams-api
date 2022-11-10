import { Request, Response } from "express"
import { CreatePlayerUseCase } from "./CreatePlayerUseCase"

export class CreatePlayerController {
    async handle(request: Request, response: Response) {
        const { name, team } = request.body
        const { group_id } = request.params

        const createPlayerUseCase = new CreatePlayerUseCase()

        const result = await createPlayerUseCase.execute({ name, team, group_id })

        return response.json(result)
    }
}