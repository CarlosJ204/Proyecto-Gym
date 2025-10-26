import { IPlanDeEntrenamiento } from "./IPlanDeEntrenamiento";
import { PlanBase } from "./PlanBase";
import { EntrenadorEspecial } from "./EntrenadorEspecial";
import { DietaEspecializada } from "./DietaEspecializada";

function main(): void {

    var miplan: IPlanDeEntrenamiento = new PlanBase();
    miplan.setEntrenador("Juan Perez");
    miplan.setDieta("NA");
    console.log("Tipo de plan: " + miplan.getTipoPlan());
    console.log("Costo del plan: " + miplan.calcularCosto());
    console.log("--------------");
    miplan = new EntrenadorEspecial(miplan);
    miplan.setEntrenador("Juan Perez");
    console.log("Tipo de plan: " + miplan.getTipoPlan());
    console.log("Costo del plan: " + miplan.calcularCosto());
    console.log("--------------");
    miplan = new DietaEspecializada(miplan);
    miplan.setDieta("Dieta Alta en Proteinas");
    //miplan.setEntrenador("NA");
    console.log("Tipo de plan: " + miplan.getTipoPlan());
    console.log("Costo del plan: " + miplan.calcularCosto());
    console.log("--------------");
}

main();
