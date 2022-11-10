import { prisma } from "../../../database/prismaClient"

interface IGroup {
    name: string
}

export class CreateGroupUseCase {
    async execute({ name }: IGroup) {
        //verificar se o grupo já existe
        const groupExists = await prisma.groups.findFirst({
            where: { name }
        })

        if (groupExists) {
            throw new Error("Group already exists!")
        }

        //cria o grupo
        const group = await prisma.groups.create({
            data: {
                name
            }
        })

        return group
    }
}