import { Request, Response } from "express";

export class UsuariosHandler {
    async create(req: Request, res: Response) {
        const {nome, email} = req.body

        if (!nome || !email) {
            return res.status(400).json({message: 'passe os campos obrigatorios'})
        }

        try{

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal server error'})
        }
    }
}