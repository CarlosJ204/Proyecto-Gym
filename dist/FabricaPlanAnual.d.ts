import type { IFabricaPlanes } from "./IFabricaPlanes.js";
declare class FabricaPlanAnual implements IFabricaPlanes {
    crearUsuarioNormal(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoAnual: number): UsuarioNormal;
    crearUsuarioConvenio(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoConvenio: number): UsuarioConvenio;
}
export { FabricaPlanAnual };
//# sourceMappingURL=FabricaPlanAnual.d.ts.map