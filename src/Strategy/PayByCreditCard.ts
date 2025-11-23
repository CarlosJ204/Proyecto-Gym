import { CreditCard } from "./CreditCard";
import { IPayStrategy } from "./IPayStrategy";

export class PayByCreditCard  implements IPayStrategy {
    protected card: CreditCard | null = null;
    protected amount: number;
    protected cardNumber: string;
    protected cvv: string;
    protected dateOfExpiry: string;

    constructor(amount:number, cardNumber: string, cvv: string, dateOfExpiry: string) {
        
        this.amount = amount;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.dateOfExpiry = dateOfExpiry;
    }

    pay(paymentAmount: number): boolean {
        if (this.card && this.card.getAmount() >= paymentAmount) {
            console.log(`Pagando ${paymentAmount} usando Tarjeta de Crédito.`);
            this.card.setAmount(this.card.getAmount() - paymentAmount);
            return true; 
        }
        else {
            console.log("No se pudo realizar el pago con Tarjeta de Crédito.");
            return false;
        }
    }

    collectPaymentDetails(): void {
       this.card = new CreditCard(this.amount,this.cardNumber,this.cvv,this.dateOfExpiry);
    }
}