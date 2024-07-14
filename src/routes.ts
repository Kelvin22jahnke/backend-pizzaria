import { Router } from 'express';
import multer from 'multer';
import { CriarUsuarioController } from './controller/usuario/CriarUsuarioController';
import { LoginUsuarioController } from './controller/usuario/LoginUsuarioController';
import { DetalhesUsuarioController } from './controller/usuario/DetalhesUsuarioController'
import { ehAutenticado } from './middlewares/ehAutenticado';
import { CriarCategoriaController } from './controller/categoria/CriarCategoriaController';
import { ListarCategoriaController } from './controller/categoria/ListarCategoriaController';
import { CriarProdutoController } from './controller/produto/CriarProdutoController';
import uploadConfig from './config/multer';
import { ListarProdutoCategoriaController } from './controller/produto/ListarProdutoCategoriaController';
import { CriarPedidoController } from './controller/pedido/CriarPedidoController';
import { RemoverPedidoController } from './controller/pedido/RemoverPedidoController';
import { AdicionarItemPedidoController } from './controller/pedido/AdicionarItemPedidoController';
import { RemoverItemPedidoController } from './controller/pedido/RemoverItemPedidoController';
import { EnviarPedidoController } from './controller/pedido/EnviarPedidoController';
import { ListarPedidoController } from './controller/pedido/ListarPedidoController';
import { DetalharPedidoController } from './controller/pedido/DetalharPedidoController';
import { ConcluirPedidoController } from './controller/pedido/ConcluirPedidoController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// Rotas do Usuário
router.post('/usuarios', new CriarUsuarioController().handle);
router.post('/logar', new LoginUsuarioController().handle)
// Quando existe um middlewares ele é executando antes de executar a rota
router.get('/usuario-info', ehAutenticado, new DetalhesUsuarioController().handle);

//Rotas Categoria
router.post('/categoria', ehAutenticado, new CriarCategoriaController().handle);
router.get('/Categoria', ehAutenticado , new ListarCategoriaController().handle);

//Rotas Produto
router.post('/produto', ehAutenticado, upload.single('file'), new CriarProdutoController().handle);
router.get('/categoria/produto', ehAutenticado, new ListarProdutoCategoriaController().handle);

//Rotas Pedido
router.post('/pedido', ehAutenticado, new CriarPedidoController().handle);
router.delete('/pedido',ehAutenticado, new RemoverPedidoController().handle);
router.put('/pedido/enviar-pedido', ehAutenticado, new EnviarPedidoController().handle);
router.get('/pedidos', ehAutenticado, new ListarPedidoController().handle);
router.get('/pedido/detalhe', ehAutenticado, new DetalharPedidoController().handle);
router.put('/pedido/concluir-pedido', ehAutenticado, new ConcluirPedidoController().handle);

//Rotas Itens Pedido
router.post('/pedido/adicionar-item', ehAutenticado, new AdicionarItemPedidoController().handle);
router.delete('/pedido/remover-item', ehAutenticado, new RemoverItemPedidoController().handle);

export { router };