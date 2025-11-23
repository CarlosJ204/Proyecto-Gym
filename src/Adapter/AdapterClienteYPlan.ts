import { IClienteYPlan } from "./IClienteYPlan";
import { UsuarioConvenio } from "../Abstract factory/UsuarioConvenio";
import { UsuarioNormal } from "../Abstract factory/UsuarioNormal";
import { IPlanDeEntrenamiento } from "../Decorator/IPlanDeEntrenamiento";
import { ServiceUsuarioCompleto } from "./ServiceUsuarioCompleto";

export
    class AdapterClienteYPlan implements IClienteYPlan {

    private service: ServiceUsuarioCompleto;
    private usuario: UsuarioNormal | UsuarioConvenio;
    private plan: IPlanDeEntrenamiento;

    constructor(usuario: UsuarioNormal | UsuarioConvenio, plan: IPlanDeEntrenamiento) {
        this.service = new ServiceUsuarioCompleto();
        this.usuario = usuario;
        this.plan = plan;
    }

    mostrarInformacionCompleta(): string {
        const data = this.service.getUsuarioPlanDatos(this.usuario, this.plan);
        return `
    Usuario: ${this.usuario.mostrarInformacion()}
    Tipo de Plan: ${data.plan}
    Entrenador: ${data.entrenador}
    Dieta: ${data.dieta}
    Costo del plan: ${data.costoPlan}
    Costo total (tarifa + plan): ${data.costoTotal}
    `;
    }
    getCostoTotal(): number {
        const data = this.service.getUsuarioPlanDatos(this.usuario, this.plan);
        return data.costoTotal;
    }
}