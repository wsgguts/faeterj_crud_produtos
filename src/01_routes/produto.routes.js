//01 - produto.routes.js — o porteiro
//Ele só recebe a requisição e passa para o controller certo. Não faz nada sozinho.

import produtoController from "../02_controllers/produto.controller.js";
import { Router } from "express";

const produtoRouter = Router();

produtoRouter.get("/produtos", produtoController.findAllProdutoController);

export default produtoRouter;