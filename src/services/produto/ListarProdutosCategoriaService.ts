import prismaClient from "../../prisma";

interface ProdutoRequest {
    categoria_id: string;
}


class ListarProdutosCategoriaService {
    async execute({categoria_id}: ProdutoRequest){

        //Retorna todos os produtos por categoria
        const produtosPorCategoria = await prismaClient.produto.findMany({
            where:{
                categoria_id: categoria_id
            }
        });

        return produtosPorCategoria;
    }
}

export {ListarProdutosCategoriaService}