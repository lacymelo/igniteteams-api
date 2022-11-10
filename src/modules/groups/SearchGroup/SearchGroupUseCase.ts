import { prisma } from "../../../database/prismaClient"

interface ISearchGroup {
    id: string
    team: string
}

export class SearchGroupUseCase {
    async execute({ id, team }: ISearchGroup) {
        const searchGroup = await prisma.groups.findFirst({
            where: { id },
            select: {
                id: true,
                name: true,
                players: {
                    where: { team },
                    select: {
                        id: true,
                        name: true,
                        team: true
                    }
                }
            }
        })

        return searchGroup
    }
}