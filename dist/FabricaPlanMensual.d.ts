import type { IFabricaPlanes } from "./IFabricaPlanes.js";
declare class FabricaPlanMensual implements IFabricaPlanes {
    crearUsuarioNormal(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoAnual: number): UsuarioNormal;
    crearUsuarioConvenio(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoConvenio: number): UsuarioConvenio;
}
export { FabricaPlanMensual };
//# sourceMappingURL=FabricaPlanMensual.d.ts.map