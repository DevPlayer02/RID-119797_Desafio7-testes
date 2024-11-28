"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knex_2 = __importDefault(require("../config/knex"));
class KnexService {
    constructor() {
        this.conectar = () => {
            if (!KnexService.conn) {
                KnexService.conn = (0, knex_1.default)(knex_2.default);
            }
            return KnexService.conn;
        };
    }
}
exports.default = KnexService;
exports.default = KnexService;
