import { prisma } from "../../../database/prismaClient"

interface IPlayer {
    name: string
    team: string
    group_id: string
}

export class CreatePlayerUseCase {
    async execute({ name, team, group_id }: IPlayer) {
        //verifica se existe um jogador com o mesmo nome
        const playerExists = await prisma.players.findFirst({
            where: { name, group_id }
        })

        if (playerExists) {
            throw new Error("Player already exists!")
        }

        const player = await prisma.players.create({
            data: {
                name,
                team,
                group_id
            }
        })

        return player
    }
}