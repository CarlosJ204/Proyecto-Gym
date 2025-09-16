"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FabricaPlanAnual_js_1 = require("./FabricaPlanAnual.js");
const FabricaPlanMensual_js_1 = require("./FabricaPlanMensual.js");
function main() {
    function main() {
        const fabricaAnual = new FabricaPlanAnual_js_1.FabricaPlanAnual();
        const fabricaMensual = new FabricaPlanMensual_js_1.FabricaPlanMensual();
        // Crear usuarios con diferentes planes
        const usuario1 = fabricaAnual.crearUsuarioNormal("Juan Perez", "M", 1.75, 28, 70, 50000, 15);
        const usuario2 = fabricaAnual.crearUsuarioConvenio("Maria Gomez", "F", 1.65, 32, 60, 50000, 10);
        const usuario3 = fabricaMensual.crearUsuarioNormal("Carlos Ruiz", "M", 1.80, 24, 80, 50000, 5);
        const usuario4 = fabricaMensual.crearUsuarioConvenio("Ana Torres", "F", 1.70, 29, 65, 50000, 8);
        usuario1.tarifa();
        usuario1.mostrarInformacion();
        usuario2.tarifa();
        usuario2.mostrarInformacion();
        usuario3.tarifa();
        usuario3.mostrarInformacion();
        usuario4.tarifa();
        usuario4.mostrarInformacion();
    }
}
main();
//# sourceMappingURL=Main.js.map