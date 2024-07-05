import { Request, Response } from 'express';

import { database } from '../database';



export class UserController {
    public criarUsuario(request: Request, response: Response): Response {
        const { name } = request.body;
    
        if (name.length < 3) {
            return response.status(403).json({'mensagem': 'Não é possível criar usuário sem nome'})
        }
        
        database.push(name);
        return response.status(201).json({ 'mensagem': `Usuário ${name} criado` });
    }

    public listarUsuarios(request: Request, response: Response): Response {
        return response.status(200).json(database)
    }
}

