import { Aluno } from '../aluno.model';
import { KnexService } from '../../../service/knex';
import { response } from 'express';
import alunoFactory from '../aluno.factory';

describe('Unit - Aluno model Suite', () => {
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

        const alunoInstance = new Aluno(knexServiceMock);
        const response = await alunoFactory.getAll();
        expect(response).toBeTruthy();
        expect(response.length).toBe([3]);
    });

    it('deve salvar um produto no modelo', async () => {
        let knexServiceMock:any

        const knexMock = () => {
            return {
                insert: jest.fn().mockReturnValueOnce([100])
            }
        }

        knexServiceMock = {
            conectar: jest.fn(() => knexMock)
        }

        const alunoInstance = new Aluno(knexServiceMock);
        const response = await alunoFactory.create({
            nome: 'Leticia',
            cpf: "12345678900"
        });
        expect(response).toBeTruthy();
        expect(response).toEqual([3]);
    });
})