const request = require('supertest');

describe('Int - Aluno Suite', () => {
    it('##GET /aluno', async () => {
        const response = await request('http://localhost:8080')
            .get('/aluno')

    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.data).toHaveLength(1)
    })

    it('##POST /aluno', async () => {
        const response = await request('http://localhost:8080')
            .post('/aluno')
            .send({
                nome: "Aluno Teste 7",
                cpf: "12345678900"
            })

    console.log(response.body)

    expect(response.status).toBe(201)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toHaveLength(1)
    })

    it('##POST /aluno valores errados', async () => {
        const response = await request('http://localhost:8080')
            .post('/aluno')
            .send({
                nome: 123452,
                cpf: 12345678900
            })

    expect(response.status).toBe(500)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.msg).toEqual("Erro ao encontrar informações na página")
    })
} )