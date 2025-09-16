"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioConvenioMensual = void 0;
const UsuarioConvenio_1 = require("./UsuarioConvenio");
class UsuarioConvenioMensual extends UsuarioConvenio_1.UsuarioConvenio {
    constructor(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio = 10) {
        super(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio);
    }
}
exports.UsuarioConvenioMensual = UsuarioConvenioMensual;
//# sourceMappingURL=UsuarioConvenioMensual.js.map