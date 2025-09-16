"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioConvenioAnual = void 0;
const UsuarioConvenio_1 = require("./UsuarioConvenio");
class UsuarioConvenioAnual extends UsuarioConvenio_1.UsuarioConvenio {
    constructor(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio = 20) {
        super(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio);
    }
}
exports.UsuarioConvenioAnual = UsuarioConvenioAnual;
//# sourceMappingURL=UsarioConvenioAnual.js.map