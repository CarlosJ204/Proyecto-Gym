import { Usuario } from "./Usuario";
export abstract class UsuarioConvenio extends Usuario {
    protected pago: number = 0;
    protected descuentoConvenio: number;


    constructor(
        nombre: string,
        sexo: string,
        altura: number,
        edad: number,
        peso: number,
        mensualidad: number,
        descuentoConvenio: number,
    ) {
        super(nombre, sexo, altura, edad, peso,mensualidad);
        this.descuentoConvenio = descuentoConvenio;
    }


    public override tarifa(): number{   
        return this.pago = this.mensualidad - (this.mensualidad * this.descuentoConvenio / 100);
    }

    public override mostrarInformacion(): string {
        return `Nombre: ${this.nombre}, Sexo: ${this.sexo}, Altura: ${this.altura}, Edad: ${this.edad}, Peso: ${this.peso}, Tarifa: ${this.tarifa()}`;
    }


}    