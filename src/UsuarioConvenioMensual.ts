import { UsuarioConvenio } from "./UsuarioConvenio";
export class UsuarioConvenioMensual extends UsuarioConvenio {
    constructor(
        nombre: string,
        sexo: string,
        altura: number,
        edad: number,
        peso: number,
        mensualidad: number,
        descuentoConvenio: number = 10,
    ) {
        super(nombre, sexo, altura, edad, peso,mensualidad,descuentoConvenio);
    }
}
    