"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexService = void 0;
const knex_1 = __importDefault(require("knex"));
const knex_2 = __importDefault(require("../config/knex"));
class KnexService {
    conectar() {
        if (!KnexService.conn) {
            KnexService.conn = (0, knex_1.default)(knex_2.default);
        }
        return KnexService.conn;
    }
}
exports.KnexService = KnexService;
exports.default = KnexService;
