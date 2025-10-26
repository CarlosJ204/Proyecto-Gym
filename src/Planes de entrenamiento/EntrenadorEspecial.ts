import { IPlanDeEntrenamiento } from "./IPlanDeEntrenamiento";
import { PlanDecorador } from "./PlanDecorador";
export
class EntrenadorEspecial extends PlanDecorador {

    constructor(planEspecializado: IPlanDeEntrenamiento) {
        super(planEspecializado);
    }

    public calcularCosto(): number {
        return this.planEspecializado.calcularCosto() + this.calcularCostoAdicional();
    }

    public getTipoPlan(): string {
        return this.planEspecializado.getTipoPlan() + " + Entrenador Especial";
    }


}