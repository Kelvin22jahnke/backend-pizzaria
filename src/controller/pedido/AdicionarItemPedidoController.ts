import {Request, Response} from 'express';
import { AdicionarPedidoItemService } from '../../services/pedido/AdicionarPedidoItemService';

class AdicionarItemPedidoController {
    async handle(req: Request, res: Response){

        const {pedido_id, produto_id, quantidade} = req.body;
        const adicionarPedidoItemService = new AdicionarPedidoItemService();
        const pedido = await adicionarPedidoItemService.execute({pedido_id, produto_id, quantidade} );
        return res.json(pedido);
    }
}

export {AdicionarItemPedidoController}