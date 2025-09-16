import { Usuario } from "./Usuario";
export declare abstract class UsuarioConvenio extends Usuario {
    protected pago: number;
    protected descuentoConvenio: number;
    constructor(nombre: string, sexo: string, altura: number, edad: number, peso: number, mensualidad: number, descuentoConvenio: number);
    tarifa(): number;
    mostrarInformacion(): string;
}
//# sourceMappingURL=UsuarioConvenio.d.ts.map