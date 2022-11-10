import { Request, Response } from "express"
import { RemovePlayerUseCase } from "./RemovePlayerUseCase"

export class RemovePlayerController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const removePlayerUseCase = new RemovePlayerUseCase()

        const result = await removePlayerUseCase.execute(id)

        return response.json(result)
    }
}