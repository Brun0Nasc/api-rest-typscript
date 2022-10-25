import { Router } from 'express'
import { UsuariosHandler } from './handler'

const routes = Router()
const us = new UsuariosHandler()

routes.post('/usuarios', us.create) // criar novo usuário
routes.post('/usuario/:idUsuario/chave', us.registerChave) // registrar nova chave pix para o usuário 

export default routes