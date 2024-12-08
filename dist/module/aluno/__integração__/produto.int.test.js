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
const request = require('supertest');
describe('Int - Aluno Suite', () => {
    it('##GET /aluno', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request('http://localhost:8080')
            .get('/aluno');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.data).toHaveLength(6);
    }));
    it('##POST /aluno', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request('http://localhost:8080')
            .post('/aluno')
            .send({
            nome: "Aluno Teste 7",
            cpf: "12345678900"
        });
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.data).toHaveLength(1);
    }));
    it('##POST /aluno valores errados', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request('http://localhost:8080')
            .post('/aluno')
            .send({
            name: "Aluno Teste 7",
            cpf: 12345678900
        });
        expect(response.status).toBe(400);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.msg).toEqual('Nome e Cpf são obrigatórios');
    }));
});
