import {Request, Response} from 'express';
import {ListarProdutosCategoriaService} from '../../services/produto/ListarProdutosCategoriaService';

class ListarProdutoCategoriaController {
    async handle(req: Request, res: Response){
        const listarProdutosCategoriaService = new ListarProdutosCategoriaService();
        const categoria_id = req.query.categoria_id as string;

        const produtos = await listarProdutosCategoriaService.execute({categoria_id});

        return res.json(produtos);
    }
}

export {ListarProdutoCategoriaController}