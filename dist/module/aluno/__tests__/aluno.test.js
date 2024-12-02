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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_model_1 = __importDefault(require("../aluno.model"));
describe('Unit - Aluno model Suite', () => {
    it('deve retornar valores do modelo', () => __awaiter(void 0, void 0, void 0, function* () {
        const knexServiceMock = {
            conectar: jest.fn().mockReturnValueOnce({
                select: jest.fn().mockReturnValueOnce([]) // mock do método 'select'
            })
        };
        const alunoInstance = new aluno_model_1.default(knexServiceMock);
        const result = yield alunoInstance.getAll();
        expect(result).toBeTruthy();
        expect(result.length).toBe(0);
    }));
    it('deve salvar um produto no modelo', () => __awaiter(void 0, void 0, void 0, function* () {
        const knexServiceMock = {
            conectar: jest.fn().mockReturnValueOnce({
                insert: jest.fn().mockReturnValueOnce([100]) // mock do método 'insert'
            })
        };
        const alunoInstance = new aluno_model_1.default(knexServiceMock);
        const response = yield alunoInstance.create({
            id: 1,
            nome: 'Xoxo',
            cpf: 12345678900
        });
        expect(response).toBeTruthy();
        expect(response).toEqual([100]);
    }));
});
