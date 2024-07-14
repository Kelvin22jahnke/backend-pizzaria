import {Request, Response} from 'express';
import {LoginUsuarioService} from '../../services/usuario/LoginUsuarioService'

class LoginUsuarioController {
    async handle(req: Request, res: Response){
        const {email, senha} = req.body;
        const loginUsuarioService = new LoginUsuarioService();

        //Executa o serviço de Login
        const login = await loginUsuarioService.execute({email, senha});
        
        return res.json(login);
    }
}

export {LoginUsuarioController}