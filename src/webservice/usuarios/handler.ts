import { Request, Response } from "express";
import { usuarioRepository } from "../../repositories/usuarioRepository";

export class UsuariosHandler {
    async create(req: Request, res: Response) {
        const { nome, telefone, email } = req.body

        if (!nome || !telefone || !email) {
            return res.status(400).json({ message: 'passe os campos obrigatorios' })
        }

        try {
            const newUsuario = usuarioRepository.create({
                nome:'nome',
                telefone:'telefone',
                email:'email'
            })

            console.log(newUsuario)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}