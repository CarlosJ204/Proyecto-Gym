import { UsuarioNormal } from "./UsuarioNormal";
export class UsuarioNormalAnual extends UsuarioNormal {
    constructor(
        nombre: string,
        sexo: string,
        altura: number,
        edad: number,
        peso: number,
        mensualidad: number,
        descuentoAnual: number = 5,
    ) {
        super(nombre, sexo, altura, edad, peso,mensualidad,descuentoAnual);
    }
}

