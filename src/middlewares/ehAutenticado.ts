import {NextFunction, Request, Response} from 'express';
import {verify} from 'jsonwebtoken';

interface PayLoad {
    sub: string;
}

export function ehAutenticado (req: Request, res: Response, next: NextFunction) {

    //Receber o Token
    const authToken = req.headers.authorization;
    //Verifica se existe o Token
    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        //Validar o Token
        const {sub} = verify(token, process.env.JWT_SECRET) as PayLoad;
        //Recupera o id do Token e coloca dentro de uma variavel do req
        req.usuario_id = sub;

        return next();

    } catch (error) {
        return res.status(401).end();
    }

}