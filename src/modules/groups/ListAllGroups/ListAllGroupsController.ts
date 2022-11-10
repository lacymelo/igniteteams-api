import { Request, Response } from "express"
import { ListAllGroupsUseCase } from "./ListAllGroupsUseCase"

export class ListAllGroupsController {
    async handle(request: Request, response: Response) {
        const listAllGroupsUseCase = new ListAllGroupsUseCase()

        const result = await listAllGroupsUseCase.execute()

        return response.json(result)
    }
}