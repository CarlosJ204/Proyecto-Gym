import { Usuario } from "./Usuario";
export declare abstract class UsuarioNormal extends Usuario {
    protected pago: number;
    protected descuentoAnual: number;
    constructor(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoConvenio: number);
    tarifa(): number;
    mostrarInformacion(): string;
}
//# sourceMappingURL=UsuarioNormal.d.ts.map