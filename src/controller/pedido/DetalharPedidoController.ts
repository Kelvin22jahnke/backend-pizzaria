import {Request, Response} from 'express';
import {DetalharPedidoService} from '../../services/pedido/DetalharPedidoService';

class DetalharPedidoController {
    async handle(req: Request, res: Response){

        const pedido_id = req.query.pedido_id as string;
        const detalharPedidoService = new DetalharPedidoService();
        const pedido = await detalharPedidoService.execute({pedido_id});

        return res.json(pedido);
    }
}

export {DetalharPedidoController}