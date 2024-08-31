import { PaymentStrategy } from "./paymentStrategy";

export class CardStrategy implements PaymentStrategy {

    payment(data): boolean {
        
        if(data['cardNo']) {
            console.log("payment successfull through card");
            return true;
        }else{
            console.log("payment fail through card")
            return false;
        }
    }
}