import { IPayStrategy } from "./IPayStrategy";
export class PayByCash implements IPayStrategy {
    protected cashHanded: number;

    constructor(cashHanded: number) {
        this.cashHanded = cashHanded;
    }

    pay(paymentAmount: number): boolean {
        if(this.cashHanded >= paymentAmount){
            console.log(`Pagando ${paymentAmount} en efectivo. Cambio: ${this.cashHanded - paymentAmount}`);
            return true;
        }
        else{
            console.log("No se pudo realizar el pago en efectivo.");
            return false;
        }
    }

    collectPaymentDetails(): void {
      this.getCashHanded();  
    }

    private getCashHanded(): number {
        return this.cashHanded;
    }


}