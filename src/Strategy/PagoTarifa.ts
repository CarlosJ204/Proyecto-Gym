import { IPayStrategy as PayStrategy } from "./IPayStrategy";
export class PagoTarifa {
    protected gymFee = 0;
    protected isClose = false;
    
    processPayment(strategy: PayStrategy): void {
        strategy.collectPaymentDetails();
    }
    setTotalFee(fee: number): void {
        this.gymFee = fee;
    }
    getTotalFee(): number {
        return this.gymFee;
    }

    isClosed(): boolean {
        return this.isClose;
    }
    setClosed(): void {
        this.isClose = true;
        console.log("El pago de la tarifa del gimnasio se ha completado.");
    }
}