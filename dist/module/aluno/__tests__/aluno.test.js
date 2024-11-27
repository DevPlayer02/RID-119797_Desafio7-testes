"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_model_1 = require("../aluno.model");
describe('Unit - Produto model Suite', () => {
    it('deve retornar valores do modelo', () => __awaiter(void 0, void 0, void 0, function* () {
        let knexServiceMock;
        const knexMock = () => {
            return {
                select: jest.fn().mockReturnValueOnce([])
            };
        };
        knexServiceMock = {
            conectar: jest.fn(() => knexMock)
        };
        const aluno = new aluno_model_1.Aluno(knexServiceMock);
        const response = yield aluno.getAll();
        expect(response).toBeTruthy();
        expect(response.length).toBe(0);
    }));
    it('deve salvar um produto no modelo', () => __awaiter(void 0, void 0, void 0, function* () {
        let knexServiceMock;
        const knexMock = () => {
            return {
                insert: jest.fn().mockReturnValueOnce([100])
            };
        };
        knexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        };
        const produto = new Produto(knexServiceMock);
        const response = yield produto.store({
            nome: 'Produto teste 1',
            preco: 2000
        });
        expect(response).toBeTruthy();
        expect(response).toEqual([100]);
    }));
});
