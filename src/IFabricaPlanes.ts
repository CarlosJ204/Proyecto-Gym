import { UsuarioNormal } from "./UsuarioNormal";
import { UsuarioConvenio } from "./UsuarioConvenio";
interface IFabricaPlanes {
    crearUsuarioNormal(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoAnual: number): UsuarioNormal;
    crearUsuarioConvenio(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoConvenio: number): UsuarioConvenio;
}
export type { IFabricaPlanes };
