import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface UsuarioRequest {
    nome: string;
    email: string;
    senha: string;
}

class CriarUsuarioService {
    async execute({nome, email, senha}: UsuarioRequest) {


        //Verificar existe o e-mail
        if(!email){
            throw new Error("E-mail incorreto!");
        }

        //Vericar se o e-mail já está cadastrado na plataforma
        const existeEmailCadastrado = await prismaClient.usuario.findFirst({where:{email: email}});

        if(existeEmailCadastrado){
            throw new Error("E-mail já Cadastrado");
        }

        const senhaCriptografada = await hash(senha, 8);

        const usuario = await prismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCriptografada
            }, select:{ // O Select Serve para devolver os campos que quiser passando true
                id: true,
                nome:true,
                email:true,
            }
        });

        return usuario;
    }
}
export { CriarUsuarioService }