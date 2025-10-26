import { PlanDecorador } from "./PlanDecorador";
import { IPlanDeEntrenamiento } from "./IPlanDeEntrenamiento";
export
    class DietaEspecializada extends PlanDecorador {

    constructor(planEspecializado: IPlanDeEntrenamiento) {
        super(planEspecializado);
    }

    public calcularCosto(): number {
        return this.planEspecializado.calcularCosto() + this.calcularCostoAdicional();
    }

    public getTipoPlan(): string {
        return this.planEspecializado.getTipoPlan() + " + Dieta Especial";
    }

}