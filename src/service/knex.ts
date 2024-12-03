import knex, { Knex } from "knex";
import knexConfig from '../config/knex';

export class KnexService {
  private static conn: Knex;

  conectar = () => {
    if (!KnexService.conn) {
      KnexService.conn = knex(knexConfig)
    }
    return KnexService.conn;
  }
}

export default Knex;
