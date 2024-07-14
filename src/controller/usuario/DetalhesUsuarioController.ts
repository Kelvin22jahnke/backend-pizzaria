import {Request, Response} from 'express';
import { DetalhesUsuarioService } from '../../services/usuario/DetalhesUsuarioService';

class DetalhesUsuarioController {
    async handle(req: Request, res: Response){

        const Usuario_id = req.usuario_id;

        const detalheUsuarioService = new DetalhesUsuarioService();
        const detalheUsuario = await detalheUsuarioService.execute(Usuario_id);

        return res.json(detalheUsuario);
    }
}

export {DetalhesUsuarioController}