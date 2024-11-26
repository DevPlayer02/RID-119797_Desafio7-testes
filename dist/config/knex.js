"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexConfig = void 0;
exports.knexConfig = {
    client: 'mysql2',
    connection: {
        host: 'testednc',
        port: 3306,
        user: 'user',
        password: 'password',
        database: 'testednc',
    },
};
exports.default = exports.knexConfig;
