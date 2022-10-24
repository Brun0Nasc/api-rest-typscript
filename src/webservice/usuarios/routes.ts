import { Router } from 'express'
import { UsuariosHandler } from './handler'

const routes = Router()
const us = new UsuariosHandler()

routes.post('/usuarios', us.create)

export default routes