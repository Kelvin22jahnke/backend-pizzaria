import prismaClient from "../../prisma";

interface ItemPedidoRequest{
    pedido_id: string;
    produto_id: string;
    quantidade: number;
}

class AdicionarPedidoItemService {
    async execute({pedido_id, produto_id, quantidade}:ItemPedidoRequest){
        const itemPedido = await prismaClient.item.create({
            data:{
                pedido_id: pedido_id,
                produto_id: produto_id,
                quatidade: quantidade,
            }
        });

        return itemPedido;
    }
}

export {AdicionarPedidoItemService}