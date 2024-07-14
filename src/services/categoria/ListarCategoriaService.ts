import prismaClient from "../../prisma";

class ListarCategoriaService {
    async execute(){
        //Retorna todas as Categorias cadastradas no banco de Dados
        const categorias = await prismaClient.categoria.findMany({select: {id: true, nome:true}});
        return categorias;
    }
}

export {ListarCategoriaService}