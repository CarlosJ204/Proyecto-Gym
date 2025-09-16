"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioNormal = void 0;
const Usuario_1 = require("./Usuario");
class UsuarioNormal extends Usuario_1.Usuario {
    constructor(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio) {
        super(nombre, sexo, altura, edad, peso, mensualidad);
        this.pago = 0;
        this.descuentoAnual = descuentoConvenio;
    }
    tarifa() {
        return this.pago = this.mensualidad - (this.mensualidad * this.descuentoAnual / 100);
    }
    mostrarInformacion() {
        return `Nombre: ${this.nombre}, Sexo: ${this.sexo}, Altura: ${this.altura}, Edad: ${this.edad}, Peso: ${this.peso}, Tarifa: ${this.tarifa()}`;
    }
}
exports.UsuarioNormal = UsuarioNormal;
//# sourceMappingURL=UsuarioNormal.js.map