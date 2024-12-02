"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexConfig = void 0;
exports.knexConfig = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'dnc',
        password: 'passworddnc',
        database: 'testednc',
    },
};
exports.default = exports.knexConfig;
