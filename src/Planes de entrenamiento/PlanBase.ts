import { IPlanDeEntrenamiento } from "./IPlanDeEntrenamiento";
export
class PlanBase implements IPlanDeEntrenamiento {
    protected entrenador: string = "";
    protected dieta: string = "";

    public setEntrenador(entrenador: string): void {
        this.entrenador = entrenador;
    }

    public setDieta(dieta: string): void {
        this.dieta = dieta;
    }
    
    public getEntrenador(): string {
        return this.entrenador;
    }
    
    public getDieta(): string {
        return this.dieta;
    }

    public getTipoPlan(): string {
        if (this.entrenador != "NA" || this.dieta != "NA") {
            if (this.entrenador == "NA" && this.dieta != "NA") {
                return "" + `Entrenador: ${this.entrenador}, Dieta: ${this.dieta}`;
            }
            if (this.entrenador != "NA" && this.dieta == "NA") {
                return "" + `Entrenador: ${this.entrenador}, Dieta: ${this.dieta}`;
            }
            return "" + `Entrenador: ${this.entrenador}, Dieta: ${this.dieta}`;
        }
        return "Entrenamiento Base";
    }

    public calcularCosto(): number {
        if (this.entrenador != "NA" || this.dieta != "NA") {
            if (this.entrenador == "NA" && this.dieta != "NA") {
                return 20000;
            }
            if (this.entrenador != "NA" && this.dieta == "NA") {
                return 20000;
            }
            return 40000;
        }
        return 0;
    }


}