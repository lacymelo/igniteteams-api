import { prisma } from "../../../database/prismaClient";

export class RemoveGroupUseCase {
    async execute(id: string) {
        const removeGroup = await prisma.groups.delete({
            where: { id }
        })

        return removeGroup
    }
}