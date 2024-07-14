import {Request, Response} from 'express';
import {CriarPedidoService} from '../../services/pedido/CriarPedidoService';

class CriarPedidoController {

    async handle(req: Request, res: Response){

        const criarPedidoService = new CriarPedidoService();
        const {mesa, nome_usuario} = req.body;

        const pedido = await criarPedidoService.execute({mesa, nome_usuario});
        return res.json(pedido);

    }
}

export {CriarPedidoController}