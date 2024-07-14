import prismaClient from "../../prisma";

interface PedidoRequest {
    mesa: number;
    nome_usuario: string;
}


class CriarPedidoService {
    async execute({mesa, nome_usuario}: PedidoRequest) {

        const pedido = await prismaClient.pedido.create({
            data:{
                mesa: mesa,
                nome_usuario: nome_usuario
            }
        });

        return pedido;

    }
}

export {CriarPedidoService};