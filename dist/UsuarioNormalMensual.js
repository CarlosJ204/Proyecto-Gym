"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioNormalMensual = void 0;
const UsuarioNormal_1 = require("./UsuarioNormal");
class UsuarioNormalMensual extends UsuarioNormal_1.UsuarioNormal {
    constructor(nombre, sexo, altura, edad, peso, mensualidad, descuentoAnual = 0) {
        super(nombre, sexo, altura, edad, peso, mensualidad, descuentoAnual);
    }
}
exports.UsuarioNormalMensual = UsuarioNormalMensual;
//# sourceMappingURL=UsuarioNormalMensual.js.map