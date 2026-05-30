//01 - produto.routes.js — o porteiro
//Ele só recebe a requisição e passa para o controller certo. Não faz nada sozinho.

import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";

const produtoRouter = Router();

produtoRouter.get("/produtos", produtoController.findAllProdutoController);
produtoRouter.post("/produtos", produtoController.createProdutoController);

export default produtoRouter;