import { Aluno } from '../aluno.model';
import { KnexService } from '../../../service/knex';
import { response } from 'express';

describe('Unit - Produto model Suite', () => {
    it('deve retornar valores do modelo', async () => {
        let knexServiceMock:any

        const knexMock = () => {
            return {
                select: jest.fn().mockReturnValueOnce([])
            }
        }

        knexServiceMock = {
            conectar: jest.fn(() => knexMock)
        }

        const aluno = new Aluno(knexServiceMock);
        const response = await aluno.getAll();
        expect(response).toBeTruthy();
        expect(response.length).toBe(0);
    })

    it('deve salvar um produto no modelo', async () => {
        let knexServiceMock:any

        const knexMock = () => {
            return {
                insert: jest.fn().mockReturnValueOnce([100])
            }
        }

        knexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const produto = new Produto(knexServiceMock);
        const response = await produto.store({
            nome: 'Produto teste 1',
            preco: 2000
        });
        expect(response).toBeTruthy();
        expect(response).toEqual([100]);
    })
})