import {Request, Response} from 'express';
import {CriarProdutoService} from '../../services/produto/CriarProdutoService';


class CriarProdutoController {
    async handle(req: Request, res: Response){
        
        const criarProdutoService = new CriarProdutoService();

        const {nome, preco, descricao, categoria_id} = req.body;

        if(!req.file){
            throw new Error("Erro de Upload de Imagem do Produto.");
        }else {
           
            const {originalname, filename: banner } = req.file;

            const produto = await criarProdutoService.execute({nome,preco,descricao,banner,categoria_id});
    
            return res.json(produto);
        }

       
    }
}

export {CriarProdutoController}