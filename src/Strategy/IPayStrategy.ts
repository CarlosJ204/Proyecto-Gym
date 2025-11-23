export interface IPayStrategy {
    pay(paymentAmount: number): boolean;
    collectPaymentDetails(): void;
}