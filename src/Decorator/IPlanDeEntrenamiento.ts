export
interface IPlanDeEntrenamiento {
    setEntrenador(entrenador: string): void;
    setDieta(dieta: string): void;
    getEntrenador(): string;
    getDieta(): string;
    getTipoPlan(): string;
    calcularCosto(): number;
}