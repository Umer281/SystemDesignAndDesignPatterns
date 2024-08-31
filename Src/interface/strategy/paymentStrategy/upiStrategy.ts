import { PaymentStrategy } from "./paymentStrategy";

export class UpiStrategy implements PaymentStrategy {

    payment(data): boolean {
        
        if(data['upiId']) {
            console.log("payment successfull through upi");
            return true;
        }else{
            console.log("payment fail through upi")
            return false;
        }
    }
}