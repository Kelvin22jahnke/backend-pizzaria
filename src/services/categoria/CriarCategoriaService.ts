import prismaClient from "../../prisma"

interface CategoriaRequest {
    nome: string
}


class CriarCategoriaService {
    async execute({nome}: CategoriaRequest){

        if(nome == ''){
            throw new Error("Nome da Categoria inválido");
        }

        const categoria = await prismaClient.categoria.create({data:{nome:nome}, select: {id: true, nome: true}});

        return categoria;

    }
}

export {CriarCategoriaService}