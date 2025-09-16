import { UsuarioNormal } from "./UsuarioNormal";
import { UsuarioConvenio } from "./UsuarioConvenio";
interface IFabricaPlanes {
    crearUsuarioNormal(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number): UsuarioNormal;
    crearUsuarioConvenio(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number): UsuarioConvenio;
}
export type { IFabricaPlanes };
