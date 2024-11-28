"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_model_1 = __importDefault(require("./aluno.model"));
const knex_1 = require("../../service/knex");
exports.default = new aluno_model_1.default(new knex_1.KnexService);
