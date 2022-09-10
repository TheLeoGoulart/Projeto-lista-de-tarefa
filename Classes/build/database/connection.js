"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusConnection = exports.connection = void 0;
function connection(info) {
    console.log("Conexão realizada com sucesso:", info.ip);
    return true;
}
exports.connection = connection;
function statusConnection() {
    console.log("Servidor Funcionando 100%");
}
exports.statusConnection = statusConnection;
