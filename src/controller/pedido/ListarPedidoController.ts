import {Request, Response} from 'express';
import {ListarPedidoService} from '../../services/pedido/ListarPedidoService'

class ListarPedidoController {
    async handle(req: Request, res: Response){

        const listarPedidosService = new ListarPedidoService();
        const pedidos =  await listarPedidosService.execute();
        return res.json(pedidos);
    }
}
export {ListarPedidoController}