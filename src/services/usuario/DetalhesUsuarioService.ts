import prismaClient from '../../prisma';


class DetalhesUsuarioService {
    async execute (usuario_id: string) {
        const usuario = prismaClient.usuario.findFirst({where:{id: usuario_id},select:{id:true, nome: true, email: true}});
        return usuario;
    }
}

export {DetalhesUsuarioService};    