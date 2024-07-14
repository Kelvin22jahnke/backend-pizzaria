import {Request, Response} from 'express';
import {RemoverPedidoService} from '../../services/pedido/RemoverPedidoService'

class RemoverPedidoController {
    async handle(req: Request, res: Response){

        const pedido_id  = req.query.pedido_id as string;
        const removerPedidoService = new RemoverPedidoService();
        const pedido = await removerPedidoService.execute({pedido_id});

        return res.json(pedido);
    }
}

export {RemoverPedidoController}