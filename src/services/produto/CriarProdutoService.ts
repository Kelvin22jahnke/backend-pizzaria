import prismaClient from "../../prisma";

interface ProdutoRequest {
    nome: string;
    preco: string;
    descricao: string;
    banner:string;
    categoria_id: string;
}

class CriarProdutoService {
    async execute({nome, preco, descricao, banner, categoria_id}:ProdutoRequest){
        
        const produto = await prismaClient.produto.create({
            data:{
                nome: nome,
                preco: preco,
                descricao: descricao,
                banner: banner,
                categoria_id: categoria_id
            }
        });

        return produto;
    }
}

export {CriarProdutoService}