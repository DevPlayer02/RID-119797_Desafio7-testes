import { Knex } from "knex"; 
import KnexService from "../../service/knex";

export default class Aluno {
  private db: Knex 

  constructor(knexService: KnexService) {
    this.db = knexService.conectar();
  }

  getAll = async () => {
    return this.db('testednc.alunos').select();
  };

  create = async (params: any) => {
    return this.db('testednc.alunos').insert(params);
  };
}
