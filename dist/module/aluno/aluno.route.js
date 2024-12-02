"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aluno_factory_1 = __importDefault(require("./aluno.factory"));
const router = express_1.default.Router();
router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield aluno_factory_1.default.getAll();
        return res.status(200).json({ data });
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao encontrar informações na página' });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cpf, nome } = req.body;
        const data = yield aluno_factory_1.default.create(req.body);
        return res.status(201).json({ message: 'Aluno criado com sucesso', id: data[0] });
    }
    catch (error) {
        return res.status(500).json(console.log(error));
    }
}));
exports.default = router;
