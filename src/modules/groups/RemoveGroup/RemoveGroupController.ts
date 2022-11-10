import { Request, Response } from "express"
import { RemoveGroupUseCase } from "./RemoveGroupUseCase"

export class RemoveGroupController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const removeGroupUseCase = new RemoveGroupUseCase()
        const result = await removeGroupUseCase.execute(id)

        return response.json(result)
    }
}