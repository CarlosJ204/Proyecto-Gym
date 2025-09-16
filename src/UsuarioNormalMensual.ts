import { UsuarioNormal } from "./UsuarioNormal";
export class UsuarioNormalMensual extends UsuarioNormal {
    constructor(
        nombre: string,
        sexo: string,
        altura: number,
        edad: number,
        peso: number,
        mensualidad: number,
        descuentoAnual: number = 0,
    ) {
        super(nombre, sexo, altura, edad, peso,mensualidad,descuentoAnual);
    }
}
        