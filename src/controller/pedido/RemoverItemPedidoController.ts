import {Request, Response} from 'express';
import {RemoverPedidoItemService} from '../../services/pedido/RemoverPedidoItemService';

class RemoverItemPedidoController {
    async handle(req: Request, res: Response){

        const item_id = req.query.item_id as string;
        const removerPedidoItemService = new RemoverPedidoItemService();

        const pedidoItem = await removerPedidoItemService.execute({item_id});

        return res.json(pedidoItem);

    }
}

export {RemoverItemPedidoController}