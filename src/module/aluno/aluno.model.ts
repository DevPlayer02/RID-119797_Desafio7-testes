import Knex from "../../service/knex";
import { KnexService } from "../../service/knex";

export class Aluno {
  private db: Knex 

  constructor(knexService: KnexService) {
    this.db = knexService.conectar()
  }

  getAll = async () => {
    return this.db('produtos').select();
  };

  store = async (params: any) => {
    return this.db('produtos').insert(params);
  };
}
