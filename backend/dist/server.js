"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
database_1.default.sync({ force: true });
console.log('Ha Ha Welcome to database my Lord, running at 3306');
app_1.default.listen(3000);
console.log('Good night my own! I am running at 3000');
