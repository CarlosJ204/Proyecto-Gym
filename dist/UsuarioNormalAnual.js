"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioNormalAnual = void 0;
const UsuarioNormal_1 = require("./UsuarioNormal");
class UsuarioNormalAnual extends UsuarioNormal_1.UsuarioNormal {
    constructor(nombre, sexo, altura, edad, peso, mensualidad, descuentoAnual = 5) {
        super(nombre, sexo, altura, edad, peso, mensualidad, descuentoAnual);
    }
}
exports.UsuarioNormalAnual = UsuarioNormalAnual;
//# sourceMappingURL=UsuarioNormalAnual.js.map