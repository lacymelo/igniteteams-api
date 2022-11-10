import { Request, Response } from "express"
import { SearchGroupUseCase } from "./SearchGroupUseCase"

export class SearchGroupController {
    async handle(request: Request, response: Response) {
        const { id, team } = request.params

        const searchGroupUseCase = new SearchGroupUseCase()
        const result = await searchGroupUseCase.execute({ id, team })

        return response.json(result)
    }
}