import type { IFabricaPlanes } from "./IFabricaPlanes";
import { UsuarioNormalMensual } from "./UsuarioNormalMensual";
import { UsuarioConvenioMensual } from "./UsuarioConvenioMensual";
import { UsuarioNormal } from "./UsuarioNormal.js";
import { UsuarioConvenio } from "./UsuarioConvenio.js";

class FabricaPlanMensual implements IFabricaPlanes {
    public crearUsuarioNormal(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number): UsuarioNormal {
        return new UsuarioNormalMensual(nombre, sexo, altura, edad, peso, mensualidad);
    }       
    public crearUsuarioConvenio(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number): UsuarioConvenio {
        return new UsuarioConvenioMensual(nombre, sexo, altura, edad, peso, mensualidad);
    }
}

export { FabricaPlanMensual };
