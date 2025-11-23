export class CreditCard {
    protected amount: number;
    protected cardNumber: string;
    protected cvv: string;
    protected dateOfExpiry: string;

    constructor(amount: number, cardNumber: string, cvv: string, dateOfExpiry: string) {
        this.amount = amount;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.dateOfExpiry = dateOfExpiry;
    }
    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

}