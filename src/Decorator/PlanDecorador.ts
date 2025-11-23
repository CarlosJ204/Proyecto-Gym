import { IPlanDeEntrenamiento } from "./IPlanDeEntrenamiento";
export
abstract class PlanDecorador implements IPlanDeEntrenamiento {
    protected planEspecializado: IPlanDeEntrenamiento;
    
    constructor(planEspecializado: IPlanDeEntrenamiento) {
        this.planEspecializado = planEspecializado;
    }

    public setEntrenador(entrenador: string): void {
        this.planEspecializado.setEntrenador(entrenador);
    }

    public setDieta(dieta: string): void {
        this.planEspecializado.setDieta(dieta);
    }

    public getTipoPlan(): string {
        return "Entrenamiento Especializado";
    }
    
    public getEntrenador(): string {
        return this.planEspecializado.getEntrenador();
    }
    
    public getDieta(): string {
        return this.planEspecializado.getDieta();
    }

    public calcularCosto(): number {
        return 0;
    }

    public calcularCostoAdicional(): number {
        var entrenador: string = this.planEspecializado.getEntrenador();
        var dieta: string = this.planEspecializado.getDieta();
        if (entrenador != "NA" || dieta != "NA") {
            if (entrenador == "NA" && dieta != "NA") {
                return 20000;
            }
            if (entrenador != "NA" && dieta == "NA") {
                return 20000;
            }
            return 40000;
        }
        return 0;
    }
 
    

}