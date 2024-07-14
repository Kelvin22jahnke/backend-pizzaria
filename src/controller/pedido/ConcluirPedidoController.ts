import {Request, Response} from 'express';
import {ConcluirPedidoService} from '../../services/pedido/ConcluirPedidoService';

class ConcluirPedidoController {
    async handle(req: Request, res: Response){

        const {pedido_id} = req.body;
        const concluirPedidoService = new ConcluirPedidoService();
        const pedido = await concluirPedidoService.execute({pedido_id});
        return res.json(pedido);
    }
}

export {ConcluirPedidoController}