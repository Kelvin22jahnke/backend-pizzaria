import prismaClient from "../../prisma"

interface PedidoItemRequest {
    item_id: string;
}

class RemoverPedidoItemService {
    async execute({item_id}: PedidoItemRequest){
        const pedidoItem = await prismaClient.item.delete({
            where: {
                id: item_id
            }
        });

        return pedidoItem;
    }
}

export {RemoverPedidoItemService}