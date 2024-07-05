import { Request } from "express";

import { UserController } from "./usersController"
import { makeMockResponse } from "../mocks/mockResponse";

describe('User Controller', () => {
    const usersController = new UserController();
    
    const mockRequest = {} as Request
    const mockResponse = makeMockResponse();

    it('Deve listar os nossos usuários', () => {
        usersController.listarUsuarios(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(4)
    })

    it('Deve criar um novo usuário', () => {
        mockRequest.body = { 
            name: 'Matheus'
        }

        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Matheus criado`})
    })

    it('Não deve criar um usuário com o nome em branco', () => {
        mockRequest.body = {
            name: ""
        }

        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({'mensagem': 'Não é possível criar usuário sem nome'})
    })
})