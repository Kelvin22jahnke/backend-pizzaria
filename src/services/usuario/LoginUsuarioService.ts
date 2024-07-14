import prismaClient from "../../prisma";
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';

interface LoginUsuarioRequest{
    email: string;
    senha: string;
}

class LoginUsuarioService {
    async execute ({email, senha}:LoginUsuarioRequest){
        
        //Verificar se o e-mail existe
        const usuario = await prismaClient.usuario.findFirst({where:{email: email}});

        if(!usuario){
            throw new Error("E-mail ou Senha incorretos.");
        }

        //Verificar se a senha está correta
        const EhSenhaCorreta = await compare(senha, usuario.senha);

        if(!EhSenhaCorreta){
            throw new Error("E-mail ou Senha incorretos.");
        }

        //Gera um token JWT e devolve os dados do Usuário como id, nome e e-mail
        const token = sign(
            {
                nome: usuario.nome,
                email: usuario.email
            }, process.env.JWT_SECRET,
            {
                subject: usuario.id,
                expiresIn: '30d'
            }
        );

        return {id: usuario.id, 
                nome: usuario.nome, 
                email:usuario.email, 
                token: token}
    }
}

export {LoginUsuarioService};