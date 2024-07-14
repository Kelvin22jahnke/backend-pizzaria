import prismaClient from "../../prisma";

class ListarPedidoService {
    async execute(){
        const pedidos = await prismaClient.pedido.findMany({
            where: {
                rascunho: false,
                status: false
            }, orderBy:{
                data_criacao: 'desc'
            }
        });

        return pedidos;
    }
}

export {ListarPedidoService}