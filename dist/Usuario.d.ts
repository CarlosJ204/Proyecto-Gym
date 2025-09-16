export declare abstract class Usuario {
    protected nombre: string;
    protected sexo: string;
    protected altura: number;
    protected edad: number;
    protected peso: number;
    protected mensualidad: number;
    constructor(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad?: number);
    abstract tarifa(): number;
    abstract mostrarInformacion(): string;
}
//# sourceMappingURL=Usuario.d.ts.map