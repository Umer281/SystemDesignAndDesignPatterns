export interface PaymentStrategy {
    payment(data): boolean;
}