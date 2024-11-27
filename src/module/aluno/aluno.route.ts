import express from "express";
import * as aluno from './aluno.factory'; 

const router = express.Router();

router.get('/', async (_: any, res: any) => {
  try {
    const data = await alunoFactory.getAll();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao encontrar informações na página' });
  }
});

router.post('/', async (req: any, res: any) => {
  try{
    const { cpf, nome } = req.body;
    if (!cpf || !nome) {
      return res.status(400).json({ error: 'CPF e Nome são obrigatórios' });
    }
    const data = await aluno.create({ cpf, nome });
    return res.status(201).json({ message: 'Aluno criado com sucesso',id: data[0] });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao encontrar informações na página' });
  }  
});

export default router;
