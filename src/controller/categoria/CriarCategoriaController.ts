import {Request, Response} from 'express';
import {CriarCategoriaService} from '../../services/categoria/CriarCategoriaService'

class CriarCategoriaController {
    async handle(req: Request, res: Response){

        const {nome} = req.body;

        const criarCategoriaService = new CriarCategoriaService();
        const categoria = criarCategoriaService.execute({nome});

        return res.json(categoria);
    }
}

export {CriarCategoriaController}