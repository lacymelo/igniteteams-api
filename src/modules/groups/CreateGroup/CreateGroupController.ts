import { Request, Response } from "express"
import { CreateGroupUseCase } from "./CreateGroupUseCase"


export class CreateGroupController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const createGroupUseCase = new CreateGroupUseCase()

        const result = await createGroupUseCase.execute({ name })

        return response.json(result)
    }
}