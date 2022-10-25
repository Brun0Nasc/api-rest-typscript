import { Request, Response } from "express";
import { chaveRepository } from "../../repositories/chaveRepository";
import { usuarioRepository } from "../../repositories/usuarioRepository";

export class UsuariosHandler {
    async create(req: Request, res: Response) {
        const { nome, telefone, email } = req.body

        if (!nome || !telefone || !email) {
            return res.status(400).json({ message: 'passe os campos obrigatorios' })
        }

        try {
            const newUsuario = usuarioRepository.create({
                nome: nome,
                telefone: telefone,
                email: email
            })

            await usuarioRepository.save(newUsuario)

            return res.status(201).json(newUsuario)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    async registerChave(req: Request, res: Response) {
        const { valor_chave } = req.body
        const { idUsuario } = req.params

        if (!valor_chave) {
            return res.status(400).json({ message: 'passe os campos obrigatorios' })
        }

        try {
            const usuario = await usuarioRepository.findOneBy({ id: Number(idUsuario) })

            if (!usuario) {
                return res.status(404).json({ message: "Usuário não existe" })
            }

            const newChave = chaveRepository.create({
                valor_chave,
                usuario
            })

            await chaveRepository.save(newChave)
 
            return res.status(201).json(newChave)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }
}