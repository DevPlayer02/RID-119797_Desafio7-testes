import express from "express";
import alunoFactory from './aluno.factory'; 

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
    const data = await alunoFactory.create(req.body);
    return res.status(201).json({ message: 'Aluno criado com sucesso',id: data[0] });
  } catch (error) {
    return res.status(500).json(console.log(error));
  }  
});

export default router;
