import type { IFabricaPlanes } from "./IFabricaPlanes";
import { UsuarioNormalAnual } from "./UsuarioNormalAnual";
import { UsuarioConvenioAnual } from "./UsarioConvenioAnual";
import { UsuarioNormal } from "./UsuarioNormal";
import { UsuarioConvenio } from "./UsuarioConvenio";
export class FabricaPlanAnual implements IFabricaPlanes {
    public crearUsuarioNormal(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoAnual: number): UsuarioNormal {
        return new UsuarioNormalAnual(nombre, sexo, altura, edad, peso, mensualidad);
    }           
    public crearUsuarioConvenio(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoConvenio: number): UsuarioConvenio {
        return new UsuarioConvenioAnual(nombre, sexo, altura, edad, peso, mensualidad, descuentoConvenio);
    }
}

