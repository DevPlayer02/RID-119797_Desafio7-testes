import Aluno from '../aluno.model';
import { KnexService } from '../../../service/knex';
import { response } from 'express';

describe('Unit - Aluno model Suite', () => {
    it('deve retornar valores do modelo', async () => {
        const knexServiceMock: any = {
            conectar: jest.fn().mockReturnValueOnce({
                select: jest.fn().mockResolvedValueOnce([])
            })
        };

        const alunoInstance = new Aluno(knexServiceMock);
        const result = await alunoInstance.getAll();

        expect(result).toBeTruthy();
        expect(result.length).toBe(0);
    });

    it('deve salvar um produto no modelo', async () => {
        const knexServiceMock: any = {
            conectar: jest.fn().mockReturnValueOnce({
                insert: jest.fn().mockResolvedValueOnce([100])
            })
        };

        const alunoInstance = new Aluno(knexServiceMock);
        const response = await alunoInstance.create({
            id: 1,
            nome: 'Xoxo',
            cpf: 12345678900
        });

        expect(response).toBeTruthy();
        expect(response).toEqual([100]);
    });
})