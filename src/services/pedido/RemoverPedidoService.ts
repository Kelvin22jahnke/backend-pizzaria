import prismaClient from "../../prisma";

interface PedidoRequest {
    pedido_id: string;
}

class RemoverPedidoService {
    async execute({pedido_id}: PedidoRequest){
        const removerPedido = await prismaClient.pedido.delete({
            where: {id: pedido_id}
        });

        return removerPedido;
    }
}

export {RemoverPedidoService}