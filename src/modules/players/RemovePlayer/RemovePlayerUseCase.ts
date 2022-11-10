import { prisma } from "../../../database/prismaClient";

export class RemovePlayerUseCase {
    async execute(id: string) {
        const removePlayer = await prisma.players.delete({
            where: { id }
        })

        return removePlayer
    }
}