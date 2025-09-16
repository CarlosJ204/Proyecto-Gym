import { UsuarioConvenio } from "./UsuarioConvenio";
export class UsuarioConvenioAnual extends UsuarioConvenio {
    constructor(
        nombre: string,
        sexo: string,
        altura: number,
        edad: number,
        peso: number,
        mensualidad: number,
        descuentoConvenio: number = 20,
    ) {
        super(nombre, sexo, altura, edad, peso,mensualidad,descuentoConvenio);
    }

}