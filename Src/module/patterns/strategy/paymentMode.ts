// in this we can have different payment methods

import { CardStrategy } from "../../../interface/strategy/paymentStrategy/cardStrategy";
import { PaymentStrategy } from "../../../interface/strategy/paymentStrategy/paymentStrategy";
import { UpiStrategy } from "../../../interface/strategy/paymentStrategy/upiStrategy";



export class PaymentMode {

    paymentStrategy:  PaymentStrategy;

    constructor(strategy: PaymentStrategy){
       this.paymentStrategy = strategy;
    }


    pay(data){
        this.paymentStrategy.payment(data);
    }
}





//now we can create any paymnent method classs 
let upi = new PaymentMode(new UpiStrategy());
let debitCard = new PaymentMode(new CardStrategy());


upi.pay({'upi_id': "728282929@paytm"});
debitCard.pay({'card_no': '1232323322'});

