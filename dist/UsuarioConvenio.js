"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioConvenio = void 0;
const Usuario_1 = require("./Usuario");
class UsuarioConvenio extends Usuario_1.Usuario {
    constructor(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio) {
        super(nombre, sexo, altura, edad, peso, mensualidad);
        this.pago = 0;
        this.descuentoConvenio = descuentoConvenio;
    }
    tarifa() {
        return this.pago = this.mensualidad - (this.mensualidad * this.descuentoConvenio / 100);
    }
    mostrarInformacion() {
        return `Nombre: ${this.nombre}, Sexo: ${this.sexo}, Altura: ${this.altura}, Edad: ${this.edad}, Peso: ${this.peso}, Tarifa: ${this.tarifa()}`;
    }
}
exports.UsuarioConvenio = UsuarioConvenio;
//# sourceMappingURL=UsuarioConvenio.js.map