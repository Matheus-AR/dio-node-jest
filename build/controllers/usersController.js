"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const database_1 = require("../database");
class UserController {
    criarUsuario(request, response) {
        const { name } = request.body;
        if (name.length < 3) {
            return response.status(403).json({ 'mensagem': 'Não é possível criar usuário sem nome' });
        }
        database_1.database.push(name);
        return response.status(201).json({ 'mensagem': `Usuário ${name} criado` });
    }
    listarUsuarios(request, response) {
        return response.status(200).json(database_1.database);
    }
}
exports.UserController = UserController;
