
 export abstract class Usuario {
    protected nombre: string;
    protected sexo: string;
    protected altura: number;
    protected edad: number;
    protected peso: number;
    protected mensualidad: number;

    constructor(
        nombre: string,
        sexo: string,
        altura: number,
        edad: number,
        peso: number,
        mensualidad: number = 50000
    ) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.altura = altura;
        this.edad = edad;
        this.peso = peso;
        this.mensualidad = mensualidad;
    }

    public abstract tarifa(): number;

    public  abstract mostrarInformacion(): string ;

}