"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaPessoa = void 0;
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        const metodoOriginal = descriptor.value;
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Menor de Idade cadastrado");
            }
            else {
                console.log("Adulto cadastrado");
            }
            return metodoOriginal.apply(this);
        };
    };
}
exports.verificaPessoa = verificaPessoa;
