import prismaClient from "../../prisma";

interface PedidoRequest {
    pedido_id: string;
}

class DetalharPedidoService {
    async execute({pedido_id}: PedidoRequest){
        const pedidoDetalhe = await prismaClient.item.findMany({
            where: {
                id: pedido_id
            },
            include:{
                produto:true,
                pedido: true
            }
        });

        return pedidoDetalhe;
    }
}

export {DetalharPedidoService}