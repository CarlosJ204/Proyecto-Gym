"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaPlanAnual = void 0;
class FabricaPlanAnual {
    crearUsuarioNormal(nombre, sexo, altura, edad, peso, mensualidad, descuentoAnual) {
        return new UsuarioNormalAnual(nombre, sexo, altura, edad, peso, mensualidad, descuentoAnual);
    }
    crearUsuarioConvenio(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio) {
        return new UsuarioConvenioAnual(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio);
    }
}
exports.FabricaPlanAnual = FabricaPlanAnual;
//# sourceMappingURL=FabricaPlanAnual.js.map