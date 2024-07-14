import {Request, response, Response} from 'express';
import { CriarUsuarioService } from '../../services/usuario/CriarUsuarioService';


class CriarUsuarioController {
    async handle(req: Request, res: Response){

        const {nome, email, senha} = req.body;
        const criarUsuarioService = new CriarUsuarioService();
        const usuario = await criarUsuarioService.execute({nome,email,senha});

        return res.json(usuario);
    }
}

export {CriarUsuarioController};