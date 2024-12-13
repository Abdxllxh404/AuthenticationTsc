"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: process.env['PORT'] || 3000,
    host: process.env['HOST'] || 'localhost',
    jwtSecret: process.env['JWT_SECRET'] || '',
    mysql: {
        host: process.env['MYSQL_HOST'] || 'localhost',
        user: process.env['MYSQL_USER'] || 'root',
        password: process.env['MYSQL_PASSWORD'] || 'frankent',
        database: process.env['MYSQL_DATABASE'] || 'myapp',
        port: process.env['PORT'] || 3000,
    },
    emailService: process.env['EMAIL_SERVICE'],
    emailUser: process.env['EMAIL_USER'],
    emailPass: process.env['EMAIL_PASS'],
};