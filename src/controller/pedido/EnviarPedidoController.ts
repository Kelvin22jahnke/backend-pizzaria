import {Request, Response} from 'express';
import {EnviarPedidoService} from '../../services/pedido/EnviarPedidoService';

class EnviarPedidoController {
    async handle(req: Request, res: Response){

        const {pedido_id} = req.body;
        const enviarPedidoService = new EnviarPedidoService();

        const pedido = await enviarPedidoService.execute({pedido_id});

        return res.json(pedido);
    }
}

export {EnviarPedidoController}