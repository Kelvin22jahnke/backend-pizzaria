import prismaClient from "../../prisma";

interface PedidoRequest {
    pedido_id: string
}

class EnviarPedidoService {
    async execute({pedido_id}:PedidoRequest){
        const pedido = await prismaClient.pedido.update({
            where:{
                id: pedido_id
            }, data: {
                rascunho: false
            }
        })

        return pedido;
    }
}

export {EnviarPedidoService}