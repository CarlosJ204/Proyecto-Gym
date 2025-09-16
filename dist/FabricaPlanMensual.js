"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaPlanMensual = void 0;
class FabricaPlanMensual {
    crearUsuarioNormal(nombre, sexo, altura, edad, peso, mensualidad, descuentoAnual) {
        return new UsuarioNormalMensual(nombre, sexo, altura, edad, peso, mensualidad, descuentoAnual);
    }
    crearUsuarioConvenio(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio) {
        return new UsuarioConvenioMensual(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio);
    }
}
exports.FabricaPlanMensual = FabricaPlanMensual;
//# sourceMappingURL=FabricaPlanMensual.js.map