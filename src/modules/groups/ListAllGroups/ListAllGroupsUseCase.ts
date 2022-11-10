import { prisma } from "../../../database/prismaClient"

export class ListAllGroupsUseCase {
    async execute() {
        const groupsList = await prisma.groups.findMany({
            select: {
                id: true,
                name: true
            }
        })

        return groupsList
    }
}